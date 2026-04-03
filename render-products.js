/**
 * Nirvik Bazar - Product Rendering Logic
 * এই ফাইলটি শুধুমাত্র হোমপেজে পণ্য প্রদর্শনের কাজ করবে।
 */

document.addEventListener('DOMContentLoaded', () => {
    // products.js লোড হয়েছে কিনা চেক করা
    if (typeof products !== 'undefined') {
        renderAllSections();
    } else {
        console.error("Error: products.js ফাইলে কোনো ডাটা পাওয়া যায়নি!");
    }
});

// সব সেকশন একসাথে রেন্ডার করার মেইন ফাংশন
function renderAllSections() {
    const mainGrid = document.getElementById('product-container');
    const popularGrid = document.getElementById('popular-products');
    const newGrid = document.getElementById('new-products');

    // ১. জনপ্রিয় পণ্য (Popular Products)
    if (popularGrid) {
        const popularItems = products.filter(p => p.popular === true);
        popularGrid.innerHTML = popularItems.map(product => createCardHTML(product)).join('');
    }

    // ২. নতুন পণ্য (New Arrivals)
    if (newGrid) {
        const newItems = products.filter(p => p.new === true);
        newGrid.innerHTML = newItems.map(product => createCardHTML(product)).join('');
    }

    // ৩. সকল পণ্য (All Products)
    if (mainGrid) {
        mainGrid.innerHTML = products.map(product => createCardHTML(product)).join('');
    }
}

// প্রতিটি পণ্যের জন্য HTML কার্ড তৈরি করার ফাংশন
function createCardHTML(product) {
    return `
        <div class="product-card">
            <div class="product-badge-container">
                ${product.new ? '<span class="badge-new">নতুন</span>' : ''}
            </div>
            <a href="product-details.html?id=${product.id}">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
            </a>
            <div class="product-info">
                <a href="product-details.html?id=${product.id}" class="product-title-link">
                    <h3>${product.name}</h3>
                </a>
                <div class="price-tag">৳${product.price}</div>
                <button onclick="addToCart(${product.id})" class="btn add-to-cart-btn">
                    <i class="fa fa-shopping-cart"></i> কার্টে যোগ করুন
                </button>
            </div>
        </div>
    `;
}
