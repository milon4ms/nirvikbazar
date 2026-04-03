function buyNow(productId) {
    addToCart(productId);
    window.location.href = "checkout.html";
}

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
        
        // শুধু কার্ট বাটনে ক্লিক করলে মেসেজ দেখাবে
        if (!window.location.href.includes('checkout.html')) {
            alert(`${product.name} কার্টে যোগ করা হয়েছে!`);
        }
    }
}
