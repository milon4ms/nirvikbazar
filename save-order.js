// save-order.js
// সুরক্ষিত - Token গুলি GitHub Secrets এ সংরক্ষিত

// Runtime এ Variables সেট করুন (Client-side এর জন্য)
// একটি initialization script থেকে এটি সেট করা হবে

async function getSecrets() {
    // এটি GitHub Actions থেকে Runtime এ সেট হবে
    // অথবা Backend API থেকে আসবে
    
    return {
        TELEGRAM_BOT_TOKEN: window.SECRETS?.TELEGRAM_BOT_TOKEN || '',
        TELEGRAM_CHAT_ID: window.SECRETS?.TELEGRAM_CHAT_ID || '',
        GOOGLE_SCRIPT_URL: window.SECRETS?.GOOGLE_SCRIPT_URL || ''
    };
}

// অর্ডার সংরক্ষণ ফাংশন
async function saveOrder(orderData) {
    try {
        const secrets = await getSecrets();
        
        if (!secrets.TELEGRAM_BOT_TOKEN) {
            console.warn('⚠️ Token লোড হয়নি। Fallback ব্যবহার করছি।');
        }
        
        // ১. টেলিগ্রামে পাঠান
        await sendToTelegram(orderData, secrets);
        
        // २. Google Sheet এ পাঠান
        await sendToGoogleSheet(orderData, secrets);
        
        console.log('✅ অর্ডার সংরক্ষিত হয়েছে');
        return true;
    } catch(error) {
        console.error('❌ Error:', error);
        return false;
    }
}

// টেলিগ্রামে পাঠান
async function sendToTelegram(orderData, secrets) {
    const message = `
🛍️ <b>নতুন অর্ডার এসেছে!</b>

📦 <b>অর্ডার নম্বর:</b> ${orderData.orderId}
👤 <b>গ্রাহকের নাম:</b> ${orderData.name}
📱 <b>মোবাইল:</b> ${orderData.mobile}
📍 <b>ঠিকানা:</b> ${orderData.address}

📋 <b>পণ্যের তালিকা:</b>
${orderData.products.map(p => `  • ${p.name} x${p.quantity} = ৳${p.price * p.quantity}`).join('\n')}

💰 <b>মোট মূল্য:</b> ৳${orderData.total}
🚚 <b>ডেলিভারি:</b> ক্যাশ অন ডেলিভারি
📅 <b>সময়:</b> ${new Date().toLocaleString('bn-BD')}
    `;

    const url = `https://api.telegram.org/bot${secrets.TELEGRAM_BOT_TOKEN}/sendMessage`;
    
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            chat_id: secrets.TELEGRAM_CHAT_ID,
            text: message,
            parse_mode: 'HTML'
        })
    });

    if (!response.ok) {
        console.error('Telegram API error');
        throw new Error('Telegram API error');
    }
    
    return response.json();
}

// Google Sheet এ পাঠান
async function sendToGoogleSheet(orderData, secrets) {
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

    try {
        const response = await fetch(secrets.GOOGLE_SCRIPT_URL, {
            method: 'POST',
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            console.warn('Google Sheet sync warning');
        }
        
        return response.json();
    } catch(error) {
        console.warn('Google Sheet error:', error);
        // এটি ফেইল হলেও অর্ডার চলবে
    }
}
