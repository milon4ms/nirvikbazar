// Sample Data (Real system will use LocalStorage or Database)
let orders = JSON.parse(localStorage.getItem('all_orders')) || [
    { id: 'ORD-1001', customer: 'করিম হোসেন', mobile: '01712345678', total: 2500, status: 'পেন্ডিং' }
];

const products_stock = [
    { name: "ম্যানস শার্ট", category: "Man Fashion", price: 1200, stock: 25 },
    { name: "জৈব মধু", category: "Natural", price: 900, stock: 15 },
    { name: "স্মার্ট ওয়াচ", category: "Electronics", price: 2500, stock: 10 }
];

function showSection(sectionId) {
    document.querySelectorAll('.admin-section').forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';

    // Update active menu
    document.querySelectorAll('.sidebar-menu li').forEach(li => li.classList.remove('active'));
    event.currentTarget.classList.add('active');
}

function loadDashboard() {
    document.getElementById('total-orders').innerText = orders.length;
    let totalSales = orders.reduce((acc, obj) => acc + obj.total, 0);
    document.getElementById('total-sales').innerText = `৳${totalSales}`;
}

function loadOrders() {
    const ordersBody = document.getElementById('orders-body');
    ordersBody.innerHTML = orders.map(order => `
        <tr>
            <td>${order.id}</td>
            <td>${order.customer}</td>
            <td>${order.mobile}</td>
            <td>৳${order.total}</td>
            <td><span class="status-badge">${order.status}</span></td>
            <td><button class="update-btn">সম্পন্ন</button></td>
        </tr>
    `).join('');
}

function loadInventory() {
    const stockBody = document.getElementById('stock-body');
    stockBody.innerHTML = products_stock.map(item => `
        <tr>
            <td>${item.name}</td>
            <td>${item.category}</td>
            <td>৳${item.price}</td>
            <td><strong>${item.stock}</strong> পিস</td>
            <td><button class="update-btn">এডিট</button></td>
        </tr>
    `).join('');
}

// Initial Load
document.addEventListener('DOMContentLoaded', () => {
    loadDashboard();
    loadOrders();
    loadInventory();
});
