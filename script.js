/**
 * Nirvik Bazar - Main Logic File
 * Handles: Product Rendering, Cart Management, and UI Updates
 */

// ১. পেজ লোড হলে প্রডাক্ট দেখানো শুরু করবে
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    updateCartCount();
    
    // চেকআউট পেজে থাকলে সামারি আপডেট করবে
    if (document.getElementById('summary-items')) {
        updateCheckoutSummary();
    }
});

// ২. হোমপেজে প্রডাক্ট রেন্ডার করার ফাংশন
function renderProducts() {
    const mainGrid = document.getElementById('product-container');
    const popularGrid = document.getElementById('popular-products');
    const newGrid = document.getElementById('new-products');

    // products.js থেকে আসা ডাটা চেক করা
    if (typeof products === 'undefined') {
        console.error("products.js ফাইলটি খুঁজে পাওয়া যায়নি!");
        return;
    }

    // সব পণ্যের জন্য (Main Grid)
    if (mainGrid) {
        mainGrid.innerHTML = products.map(product => createProductCard(product)).join('');
    }

    // জনপ্রিয় পণ্যের জন্য
    if (popularGrid) {
        const popularItems = products.filter(p => p.popular);
        popularGrid.innerHTML = popularItems.map(product => createProductCard(product)).join('');
    }

    // নতুন পণ্যের জন্য
    if (newGrid) {
        const newItems = products.filter(p => p.new);
        newGrid.innerHTML = newItems.map(product => createProductCard(product)).join('');
    }
}

// ৩. প্রডাক্ট কার্ডের HTML তৈরি করার কমন ফাংশন
function createProductCard(product) {
    return `
        <div class="product-card">
            <a href="product-details.html?id=${product.id}">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
            </a>
            <div class="product-info">
                <a href="product-details.html?id=${product.id}" style="text-decoration:none; color:inherit;">
                    <h3>${product.name}</h3>
                </a>
                <p class="price">৳${product.price}</p>
                <button onclick="addToCart(${product.id})" class="btn">কার্টে যোগ করুন</button>
            </div>
        </div>
    `;
}

// ৪. কার্টে পণ্য যোগ করার ফাংশন
function addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem('nirvik_cart')) || [];
    const product = products.find(p => p.id === productId);

    if (product) {
        const existingItem = cart.find(item => item.id === productId);
        if (existingItem) {
            existingItem.qty += 1;
        } else {
            cart.push({ ...product, qty: 1 });
        }
        
        localStorage.setItem('nirvik_cart', JSON.stringify(cart));
        updateCartCount();
        alert(`${product.name} কার্টে যোগ করা হয়েছে!`);
    }
}

// ৫. কার্ট কাউন্ট আপডেট (হেডারে দেখানোর জন্য)
function updateCartCount() {
    const cartCountElement = document.getElementById('cart-count');
    if (cartCountElement) {
        const cart = JSON.parse(localStorage.getItem('nirvik_cart')) || [];
        const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
        cartCountElement.innerText = totalItems;
    }
}

// ৬. চেকআউট পেজের সামারি আপডেট
function updateCheckoutSummary() {
    const summaryContainer = document.getElementById('summary-items');
    const subtotalElement = document.getElementById('subtotal');
    const grandTotalElement = document.getElementById('grandtotal');
    
    const cart = JSON.parse(localStorage.getItem('nirvik_cart')) || [];
    const shipping = 80; // ডেলিভারি চার্জ

    if (summaryContainer) {
        summaryContainer.innerHTML = cart.map(item => `
            <div class="summary-row">
                <span>${item.name} (x${item.qty})</span>
                <span>৳${item.price * item.qty}</span>
            </div>
        `).join('');

        const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
        subtotalElement.innerText = `৳${subtotal}`;
        grandTotalElement.innerText = `৳${subtotal + shipping}`;
    }
}

// ৭. অর্ডার সাবমিট হ্যান্ডলার (Checkout Form)
const orderForm = document.getElementById('orderForm');
if (orderForm) {
    orderForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const cart = JSON.parse(localStorage.getItem('nirvik_cart')) || [];
        if (cart.length === 0) {
            alert("আপনার কার্ট খালি!");
            return;
        }

        const orderData = {
            orderId: "NB" + Date.now().toString().slice(-6),
            name: document.getElementById('custName').value,
            mobile: document.getElementById('custMobile').value,
            address: document.getElementById('custAddress').value,
            total: document.getElementById('grandtotal').innerText.replace('৳', ''),
            products: cart
        };

        // save-order.js এর ফাংশন কল করা
        if (typeof processOrder === "function") {
            await processOrder(orderData);
            localStorage.removeItem('nirvik_cart'); // অর্ডার সফল হলে কার্ট খালি করা
        } else {
            alert("সিস্টেম লোড হতে সমস্যা হচ্ছে, পেজটি রিফ্রেশ করুন।");
        }
    });
}
