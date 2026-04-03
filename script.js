// ১. কার্টে পণ্য যোগ করা
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
        
        // যদি ইউজার চেকআউট পেজে না থাকে তবে অ্যালার্ট দিবে
        if (!window.location.href.includes('checkout')) {
            alert(product.name + " কার্টে যোগ হয়েছে!");
        }
    }
}

// ২. সরাসরি অর্ডার (Buy Now)
function buyNow(productId) {
    addToCart(productId);
    window.location.href = "checkout.html";
}

// ৩. কার্ট কাউন্ট আপডেট
function updateCartCount() {
    const cartCountElement = document.getElementById('cart-count');
    if (cartCountElement) {
        const cart = JSON.parse(localStorage.getItem('nirvik_cart')) || [];
        const total = cart.reduce((sum, item) => sum + item.qty, 0);
        cartCountElement.innerText = total;
    }
}

document.addEventListener('DOMContentLoaded', updateCartCount);
