// Shopping cart functionality
let cart = [];

// Add product to cart
function addToCart(productId, productName, productPrice) {
    const item = {
        id: productId,
        name: productName,
        price: productPrice,
        quantity: 1
    };

    const existingItem = cart.find(p => p.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push(item);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert(productName + ' added to cart!');
}

// Remove product from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Update cart quantity
function updateQuantity(productId, quantity) {
    const item = cart.find(p => p.id === productId);
    if (item) {
        item.quantity = quantity;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        }
        localStorage.setItem('cart', JSON.stringify(cart));
    }
}

// Get cart total
function getCartTotal() {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

// Load cart from localStorage
function loadCart() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
}

// Initialize cart on page load
document.addEventListener('DOMContentLoaded', () => {
    loadCart();
});
