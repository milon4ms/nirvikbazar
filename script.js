// script.js - cart handling (global functions used by renderer and checkout)
// cart stored in localStorage under 'cart'

let cart = [];

function loadCart() {
  const saved = localStorage.getItem('cart');
  cart = saved ? JSON.parse(saved) : [];
  updateCartBadge();
}
function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartBadge();
}
function updateCartBadge() {
  // optional: update a cart count UI if exists
  const badge = document.querySelector('.cart-badge');
  if (badge) badge.textContent = cart.reduce((s,i)=>s+i.quantity,0);
}

// addToCart(productId, name, price) signature used by renderer
function addToCart(productId, productName, productPrice) {
  const pid = Number(productId);
  const existing = cart.find(i => i.id === pid);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ id: pid, name: productName, price: productPrice, quantity: 1 });
  }
  saveCart();
  alert(`${productName} কার্টে যোগ করা হয়েছে`);
}

// remove item
function removeFromCart(productId) {
  cart = cart.filter(i => i.id !== Number(productId));
  saveCart();
}

// update quantity
function updateQuantity(productId, qty) {
  const item = cart.find(i => i.id === Number(productId));
  if (!item) return;
  item.quantity = Number(qty);
  if (item.quantity <= 0) removeFromCart(productId);
  saveCart();
}

function getCartTotal() {
  return cart.reduce((sum, it) => sum + (Number(it.price) * Number(it.quantity)), 0);
}

function getCart() {
  return cart;
}

// initialize on load
document.addEventListener('DOMContentLoaded', () => {
  loadCart();
});
