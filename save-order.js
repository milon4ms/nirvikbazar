// save-order.js
// Uses window.SECRETS.{TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID, GOOGLE_SCRIPT_URL}
// Do NOT hardcode tokens in this file. Inject via public/secrets.js or GitHub Action.

async function saveOrder(orderData) {
  try {
    const secrets = (window.SECRETS || {});
    const TELEGRAM_BOT_TOKEN = secrets.TELEGRAM_BOT_TOKEN || '';
    const TELEGRAM_CHAT_ID = secrets.TELEGRAM_CHAT_ID || '';
    const GOOGLE_SCRIPT_URL = secrets.GOOGLE_SCRIPT_URL || '';

    // Send Telegram (best-effort)
    if (TELEGRAM_BOT_TOKEN && TELEGRAM_CHAT_ID) {
      await sendToTelegram(TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID, orderData);
    } else {
      console.warn('Telegram secrets missing, skipping telegram notify.');
    }

    // Send Google Sheet (best-effort)
    if (GOOGLE_SCRIPT_URL) {
      await sendToGoogleSheet(GOOGLE_SCRIPT_URL, orderData);
    } else {
      console.warn('Google Script URL missing, skipping sheet sync.');
    }

    return true;
  } catch (err) {
    console.error('saveOrder error', err);
    return false;
  }
}

async function sendToTelegram(token, chatId, orderData) {
  const message = [
    '🛍️ *নতুন অর্ডার এসেছে!*',
    '',
    `*অর্ডার নম্বর:* ${orderData.orderId}`,
    `*নাম:* ${escapeMarkdown(orderData.name)}`,
    `*মোবাইল:* ${escapeMarkdown(orderData.mobile)}`,
    `*ঠিকানা:* ${escapeMarkdown(orderData.address)}`,
    '',
    '*পন্যসমূহ:*',
    ...orderData.products.map(p => `• ${escapeMarkdown(p.name)} x${p.quantity} = ৳${p.price * p.quantity}`),
    '',
    `*মোট:* ৳${orderData.total}`,
    `*সময়:* ${new Date().toLocaleString('bn-BD')}`
  ].join('\n');

  const url = `https://api.telegram.org/bot${token}/sendMessage`;
  const res = await fetch(url, {
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify({ chat_id: chatId, text: message, parse_mode: 'Markdown' })
  });
  if (!res.ok) {
    const text = await res.text();
    console.warn('Telegram API returned', res.status, text);
  }
}

async function sendToGoogleSheet(scriptUrl, orderData) {
  const payload = {
    orderId: orderData.orderId,
    name: orderData.name,
    mobile: orderData.mobile,
    address: orderData.address,
    products: orderData.products.map(p => `${p.name} x${p.quantity}`).join(', '),
    total: orderData.total,
    date: new Date().toLocaleString('bn-BD'),
    status: 'নতুন'
  };

  const res = await fetch(scriptUrl, {
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify(payload)
  });
  if (!res.ok) {
    const t = await res.text();
    console.warn('Google Script returned', res.status, t);
  }
}

// minor helper to escape Markdown reserved chars
function escapeMarkdown(text = '') {
  return String(text).replace(/([_*[\]()~`>#+\-=|{}.!])/g, '\\$1');
}
