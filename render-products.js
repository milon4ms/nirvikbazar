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
                <div class="price-tag" style="font-size: 20px; font-weight: bold; color: #e67e22; margin: 10px 0;">৳${product.price}</div>
                
                <div class="button-group" style="display: flex; gap: 8px;">
                    <button onclick="addToCart(${product.id})" class="btn" style="flex: 1; background: #27ae60; font-size: 13px; padding: 8px 2px;">
                        <i class="fa fa-shopping-cart"></i> কার্ট
                    </button>
                    <button onclick="buyNow(${product.id})" class="btn" style="flex: 1; background: #e67e22; font-size: 13px; padding: 8px 2px;">
                        অর্ডার করুন
                    </button>
                </div>
            </div>
        </div>
    `;
}
