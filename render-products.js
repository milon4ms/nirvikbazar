function createCardHTML(product) {
    return `
        <div class="product-card">
            <a href="product-details.html?id=${product.id}">
                <img src="${product.image}" alt="${product.name}">
            </a>
            <div class="product-info">
                <a href="product-details.html?id=${product.id}" style="text-decoration:none; color:#333;">
                    <h3>${product.name}</h3>
                </a>
                <div class="price-tag">৳${product.price}</div>
                <div class="btn-group">
                    <button onclick="addToCart(${product.id})" class="btn cart-btn">
                        <i class="fa fa-shopping-cart"></i> কার্ট
                    </button>
                    <button onclick="buyNow(${product.id})" class="btn order-btn">অর্ডার</button>
                </div>
            </div>
        </div>
    `;
}

// হোমপেজে বিভিন্ন সেকশনে ডাটা দেখানোর ফাংশন
function renderAllSections() {
    const mainGrid = document.getElementById('product-container');
    const popularGrid = document.getElementById('popular-products');
    const newGrid = document.getElementById('new-products');

    if (popularGrid) popularGrid.innerHTML = products.filter(p => p.popular).map(p => createCardHTML(p)).join('');
    if (newGrid) newGrid.innerHTML = products.filter(p => p.new).map(p => createCardHTML(p)).join('');
    if (mainGrid) mainGrid.innerHTML = products.map(p => createCardHTML(p)).join('');
}

document.addEventListener('DOMContentLoaded', renderAllSections);
