/**
 * Nirvik Bazar - Order Processing System
 * Handles: API calls to Telegram and Google Sheets
 */

async function processOrder(orderData) {
    // ১. সিক্রেটস ডাটা চেক করা (GitHub Actions থেকে আসবে)
    const secrets = window.SECRETS || {};
    const botToken = secrets.TELEGRAM_BOT_TOKEN;
    const chatId = secrets.TELEGRAM_CHAT_ID;
    const googleScriptUrl = secrets.GOOGLE_SCRIPT_URL;

    // টোকেন বা আইডি না থাকলে ওয়ার্নিং দিবে
    if (!botToken || !chatId) {
        console.warn("নিরাপত্তাজনিত কারণে সরাসরি টোকেন পাওয়া যায়নি। GitHub Actions চেক করুন।");
    }

    try {
        // ২. টেলিগ্রাম নোটিফিকেশন পাঠানো
        const message = `
🛍️ *নতুন অর্ডার এসেছে (নির্বিক বাজার)*
━━━━━━━━━━━━━━
🆔 অর্ডার নং: ${orderData.orderId}
👤 ক্রেতার নাম: ${orderData.name}
📞 মোবাইল: ${orderData.mobile}
🏠 ঠিকানা: ${orderData.address}
━━━━━━━━━━━━━━
📦 পন্যের তালিকা:
${orderData.products.map(p => `▫️ ${p.name} (x${p.qty}) - ৳${p.price}`).join('\n')}
━━━━━━━━━━━━━━
💰 মোট বিল: ৳${orderData.total}
🚚 ডেলিভারি: ক্যাশ অন ডেলিভারি
🕒 সময়: ${new Date().toLocaleString('bn-BD')}
        `;

        if (botToken && chatId) {
            await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: message,
                    parse_mode: 'Markdown'
                })
            });
            console.log("টেলিগ্রাম নোটিফিকেশন পাঠানো হয়েছে।");
        }

        // ৩. গুগল শিটে ডাটা পাঠানো
        if (googleScriptUrl) {
            // গুগল শিটের জন্য ডাটা ফরম্যাট
            const sheetData = {
                orderId: orderData.orderId,
                name: orderData.name,
                mobile: orderData.mobile,
                address: orderData.address,
                total: orderData.total,
                products: orderData.products.map(p => `${p.name}(${p.qty})`).join(', '),
                date: new Date().toLocaleString('bn-BD')
            };

            await fetch(googleScriptUrl, {
                method: 'POST',
                mode: 'no-cors', // গুগল স্ক্রিপ্টের জন্য এটি জরুরি
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(sheetData)
            });
            console.log("গুগল শিটে ডাটা পাঠানো হয়েছে।");
        }

        // ৪. সফল হলে Thank You পেজে পাঠানো
        window.location.href = `thank-you.html?oid=${orderData.orderId}`;

    } catch (error) {
        console.error("অর্ডার প্রসেস করার সময় এরর হয়েছে:", error);
        alert("দুঃখিত, অর্ডারটি সম্পন্ন করা সম্ভব হয়নি। দয়া করে আবার চেষ্টা করুন।");
    }
}

// এটি গ্লোবাল ফাংশন হিসেবে থাকবে যাতে script.js থেকে কল করা যায়
window.processOrder = processOrder;
