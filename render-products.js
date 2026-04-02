// render-products.js - products UI renderer

document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('.product-grid');
  if (!grid) return console.warn('.product-grid পাওয়া যায়নি');

  const items = window.products && Array.isArray(window.products) ? window.products : [];
  if (items.length === 0) {
    grid.innerHTML = '<p class="small">কোনো পণ্য নেই।</p>';
    return;
  }

  grid.innerHTML = items.map(p => renderCard(p)).join('\n');

  // attach event listeners to add buttons
  grid.querySelectorAll('.add-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const pid = e.currentTarget.dataset.id;
      const name = e.currentTarget.dataset.name;
      const price = e.currentTarget.dataset.price;
      // call global addToCart
      if (typeof addToCart === 'function') addToCart(pid, name, Number(price));
      else alert('Cart function not available');
    });
  });
});

function renderCard(p) {
  return `
    <article class="product-item card" role="article" aria-labelledby="p${p.id}-name">
      <div class="product-image">
        <img src="${escapeHtml(p.image || 'https://via.placeholder.com/300x300?text=No+Image')}" alt="${escapeHtml(p.name)}" />
      </div>
      <div class="product-info">
        <h3 id="p${p.id}-name" class="product-name">${escapeHtml(p.name)}</h3>
        <p class="product-desc">${escapeHtml(p.description || '')}</p>
        <div class="price-row">
          <span class="price">৳${p.price}</span>
          ${p.originalPrice ? `<span class="original-price">৳${p.originalPrice}</span>` : ''}
        </div>
        <div class="prod-actions">
          <button class="add-btn" data-id="${p.id}" data-name="${escapeAttr(p.name)}" data-price="${p.price}">Add to cart</button>
        </div>
      </div>
    </article>
  `;
}

// helpers
function escapeHtml(s){ if(!s) return ''; return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
function escapeAttr(s){ if(!s) return ''; return String(s).replace(/"/g,'&quot;').replace(/'/g,'&#039;'); }
