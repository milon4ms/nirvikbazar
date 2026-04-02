let cart = JSON.parse(localStorage.getItem('cart')) || [];

function renderHomeProducts() {
    const container = document.getElementById('product-container');
    if (!container) return;
    
    container.innerHTML = products.map(p => `
        <div class="product-card">
            <img src="${p.image}" alt="${p.name}">
            <h3>${p.name}</h3>
            <span class="price">৳${p.price}</span>
            <div class="card-btns">
                <button class="add-cart" onclick="addToCart(${p.id})">কার্টে যোগ করুন</button>
                <button class="order-now" onclick="buyNow(${p.id})">অর্ডার করুন</button>
            </div>
        </div>
    `).join('');
}

function addToCart(id) {
    const product = products.find(p => p.id === id);
    const item = cart.find(i => i.id === id);
    if (item) {
        item.qty++;
    } else {
        cart.push({ ...product, qty: 1 });
    }
    saveCart();
    alert("কার্টে যোগ হয়েছে!");
}

function buyNow(id) {
    addToCart(id);
    window.location.href = 'checkout.html';
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    const badge = document.getElementById('cart-count');
    if(badge) badge.innerText = cart.length;
}

function updateCheckoutSummary() {
    const summaryList = document.getElementById('summary-items');
    if (!summaryList) return;

    let subtotal = 0;
    const shipping = 80;

    summaryList.innerHTML = cart.map(item => {
        subtotal += item.price * item.qty;
        return `
            <div class="summary-row">
                <span>${item.name} (x${item.qty})</span>
                <span>৳${item.price * item.qty}</span>
            </div>
        `;
    }).join('');

    document.getElementById('subtotal').innerText = `৳${subtotal}`;
    document.getElementById('grandtotal').innerText = `৳${subtotal + shipping}`;
}

// Initial Call
renderHomeProducts();
saveCart();
