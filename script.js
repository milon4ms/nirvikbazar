/**
 * Nirvik Bazar - Main Script File
 * Handles: Product Rendering, Cart Logic, Checkout & Order Processing
 */


// ২. কার্ট স্টেট ম্যানেজমেন্ট
let cart = JSON.parse(localStorage.getItem('nirvik_cart')) || [];
const SHIPPING_COST = 80; // কুরিয়ার খরচ

// ৩. ইনিশিয়ালাইজেশন
document.addEventListener('DOMContentLoaded', () => {
    renderHomeProducts();
    updateCartBadge();
    if (document.getElementById('summary-items')) {
        updateCheckoutSummary();
    }
});

// ৪. হোমপেজে পণ্য রেন্ডারিং
function renderHomeProducts() {
    const mainGrid = document.getElementById('product-container');
    const popularGrid = document.getElementById('popular-products');
    const newGrid = document.getElementById('new-products');

    if (mainGrid) mainGrid.innerHTML = products.map(p => createProductCard(p)).join('');
    if (popularGrid) popularGrid.innerHTML = products.filter(p => p.popular).map(p => createProductCard(p)).join('');
    if (newGrid) newGrid.innerHTML = products.filter(p => p.new).map(p => createProductCard(p)).join('');
}

function createProductCard(p) {
    return `
        <div class="product-card">
            <img src="${p.image}" alt="${p.name}" loading="lazy">
            <h3>${p.name}</h3>
            <span class="price">৳${p.price}</span>
            <div class="card-btns">
                <button class="add-cart" onclick="addToCart(${p.id})">কার্টে যোগ করুন</button>
                <button class="order-now" onclick="buyNow(${p.id})">অর্ডার করুন</button>
            </div>
        </div>
    `;
}

// ৫. কার্ট ফাংশনালিটি
function addToCart(id) {
    const product = products.find(p => p.id === id);
    const existingItem = cart.find(item => item.id === id);

    if (existingItem) {
        existingItem.qty += 1;
    } else {
        cart.push({ ...product, qty: 1 });
    }
    saveCart();
    alert(`${product.name} কার্টে যোগ করা হয়েছে!`);
}

function buyNow(id) {
    const product = products.find(p => p.id === id);
    const existingItem = cart.find(item => item.id === id);
    if (!existingItem) {
        cart.push({ ...product, qty: 1 });
    }
    saveCart();
    window.location.href = 'checkout.html';
}

function saveCart() {
    localStorage.setItem('nirvik_cart', JSON.stringify(cart));
    updateCartBadge();
}

function updateCartBadge() {
    const badge = document.getElementById('cart-count');
    if (badge) {
        badge.innerText = cart.reduce((total, item) => total + item.qty, 0);
    }
}

// ৬. চেকআউট সামারি ও ক্যালকুলেশন
function updateCheckoutSummary() {
    const summaryContainer = document.getElementById('summary-items');
    if (!summaryContainer) return;

    if (cart.length === 0) {
        summaryContainer.innerHTML = '<p>আপনার কার্ট খালি।</p>';
        return;
    }

    let subtotal = 0;
    summaryContainer.innerHTML = cart.map(item => {
        subtotal += item.price * item.qty;
        return `
            <div class="summary-row">
                <span>${item.name} 
                    <div class="qty-controls">
                        <button onclick="changeQty(${item.id}, -1)">-</button>
                        <b>${item.qty}</b>
                        <button onclick="changeQty(${item.id}, 1)">+</button>
                    </div>
                </span>
                <span>৳${item.price * item.qty}</span>
            </div>
        `;
    }).join('');

    document.getElementById('subtotal').innerText = `৳${subtotal}`;
    document.getElementById('shipping').innerText = `৳${SHIPPING_COST}`;
    document.getElementById('grandtotal').innerText = `৳${subtotal + SHIPPING_COST}`;
}

function changeQty(id, delta) {
    const item = cart.find(i => i.id === id);
    if (item) {
        item.qty += delta;
        if (item.qty <= 0) {
            cart = cart.filter(i => i.id !== id);
        }
        saveCart();
        updateCheckoutSummary();
    }
}

// ৭. অর্ডার প্রসেসিং (টেলিগ্রাম ও গুগল শিট)
async function submitOrder(event) {
    event.preventDefault();

    const name = document.getElementById('custName').value;
    const mobile = document.getElementById('custMobile').value;
    const address = document.getElementById('custAddress').value;

    // ১১ সংখ্যার মোবাইল ভ্যালিডেশন
    if (!/^[0-9]{11}$/.test(mobile)) {
        alert("দয়া করে সঠিক ১১ সংখ্যার মোবাইল নম্বর দিন।");
        return;
    }

    if (cart.length === 0) {
        alert("আপনার কার্ট খালি!");
        return;
    }

    const orderId = "ORD-" + Math.floor(100000 + Math.random() * 900000);
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    const total = subtotal + SHIPPING_COST;

    const orderData = {
        orderId, name, mobile, address, total,
        products: cart.map(item => ({ name: item.name, qty: item.qty, price: item.price }))
    };

    // সিক্রেটস চেক (GitHub Actions থেকে আসবে)
    const secrets = window.SECRETS || {};
    const botToken = secrets.TELEGRAM_BOT_TOKEN;
    const chatId = secrets.TELEGRAM_CHAT_ID;
    const scriptUrl = secrets.GOOGLE_SCRIPT_URL;

    // ১. টেলিগ্রাম নোটিফিকেশন
    if (botToken && chatId) {
        const msg = `
🛍️ *নতুন অর্ডার এসেছে!*
━━━━━━━━━━━━━━
🆔 অর্ডার নং: ${orderId}
👤 নাম: ${name}
📞 ফোন: ${mobile}
🏠 ঠিকানা: ${address}
━━━━━━━━━━━━━━
📦 পন্যসমূহ:
${cart.map(p => `- ${p.name} (x${p.qty})`).join('\n')}
━━━━━━━━━━━━━━
💰 মোট বিল: ৳${total} (কুরিয়ারসহ)
    `;
        fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ chat_id: chatId, text: msg, parse_mode: 'Markdown' })
        });
    }

    // ২. গুগল শিটে পাঠানো
    if (scriptUrl) {
        fetch(scriptUrl, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(orderData)
        });
    }

    // অর্ডার সফল হলে
    localStorage.removeItem('nirvik_cart');
    window.location.href = `thank-you.html?oid=${orderId}`;
}

// চেকআউট ফর্ম হ্যান্ডলার অ্যাটাচ করা
const orderForm = document.getElementById('orderForm');
if (orderForm) {
    orderForm.addEventListener('submit', submitOrder);
}
