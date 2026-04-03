/* Nirvik Bazar - Professional Stylesheet 
    Developer: Md. Ashaduzzaman Milon
*/

/* --- ১. গ্লোবাল স্টাইলস --- */
:root {
    --primary-color: #004a99; /* লোগোর নীল রঙের সাথে সামঞ্জস্যপূর্ণ */
    --secondary-color: #ffd700; /* সোনালী ঢালের কালার */
    --text-color: #333;
    --light-bg: #f8f9fa;
    --white: #ffffff;
    --shadow: 0 4px 15px rgba(0,0,0,0.1);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Hind Siliguri', Arial, sans-serif; /* বাংলা ফন্টের জন্য সেরা */
}

body {
    background-color: var(--light-bg);
    color: var(--text-color);
    line-height: 1.6;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* --- ২. হেডার ও নেভিগেশন --- */
.main-header {
    background: var(--white);
    padding: 15px 0;
    box-shadow: 0 2px 5px rgba(0,0,0,0.05);
    position: sticky;
    top: 0;
    z-index: 1000;
}

.header-flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo img {
    height: 65px; /* লোগো এবং লেখার উচ্চতা সমান রাখা হয়েছে */
    width: auto;
}

.search-bar {
    display: flex;
    flex: 0 1 400px;
}

.search-bar input {
    width: 100%;
    padding: 10px 15px;
    border: 1px solid #ddd;
    border-radius: 5px 0 0 5px;
    outline: none;
}

.search-bar button {
    padding: 10px 20px;
    background: var(--primary-color);
    color: white;
    border: none;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
}

.cart-icon {
    position: relative;
    font-size: 24px;
    color: var(--primary-color);
    text-decoration: none;
}

.badge {
    position: absolute;
    top: -10px;
    right: -10px;
    background: red;
    color: white;
    font-size: 12px;
    padding: 2px 6px;
    border-radius: 50%;
}

/* নেভিগেশন মেনু */
.navbar {
    background: #222;
}

.nav-links {
    display: flex;
    list-style: none;
}

.nav-links li {
    position: relative;
}

.nav-links a {
    color: white;
    text-decoration: none;
    padding: 15px 20px;
    display: block;
    font-size: 15px;
    transition: 0.3s;
}

.nav-links a:hover, .nav-links a.active {
    background: var(--primary-color);
}

/* ড্রপডাউন মেনু */
.dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    background: white;
    box-shadow: var(--shadow);
    display: none;
    min-width: 180px;
}

.dropdown:hover .dropdown-menu {
    display: block;
}

.dropdown-menu li a {
    color: #333;
    padding: 10px 20px;
}

.dropdown-menu li a:hover {
    background: #f0f0f0;
    color: var(--primary-color);
}

/* --- ৩. প্রোডাক্ট গ্রিড ও কার্ড --- */
.section-title {
    margin: 40px 0 25px;
    font-size: 24px;
    border-left: 5px solid var(--primary-color);
    padding-left: 15px;
}

.product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 25px;
}

.product-card {
    background: var(--white);
    border-radius: 10px;
    overflow: hidden;
    transition: transform 0.3s, box-shadow 0.3s;
    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
    text-align: center;
}

.product-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow);
}

.product-card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.product-info {
    padding: 15px;
}

.product-info h3 {
    font-size: 17px;
    margin-bottom: 10px;
    height: 48px; /* ২ লাইনের জন্য ফিক্সড হাইট */
    overflow: hidden;
}

.price {
    font-size: 20px;
    font-weight: bold;
    color: #e67e22;
    margin-bottom: 15px;
}

.btn {
    display: inline-block;
    background: var(--primary-color);
    color: white;
    padding: 10px 20px;
    text-decoration: none;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    transition: 0.3s;
}

.btn:hover {
    background: #003366;
}

/* --- ৪. প্রোডাক্ট ডিটেইলস পেজ --- */
.details-flex {
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    background: white;
    padding: 30px;
    border-radius: 10px;
}

.details-img {
    flex: 1 1 400px;
}

.details-info {
    flex: 1 1 400px;
}

/* --- ৫. ফুটার স্টাইল --- */
.main-footer {
    background: #1a1a1a;
    color: #ccc;
    padding: 60px 0 20px;
    margin-top: 80px;
}

.footer-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 40px;
}

.footer-item h3, .footer-item h4 {
    color: white;
    margin-bottom: 20px;
}

.footer-item ul {
    list-style: none;
}

.footer-item ul li {
    margin-bottom: 10px;
}

.footer-item a {
    color: #ccc;
    text-decoration: none;
    transition: 0.3s;
}

.footer-item a:hover {
    color: var(--secondary-color);
}

.social-links a {
    font-size: 20px;
    margin-right: 15px;
}

.footer-bottom {
    text-align: center;
    border-top: 1px solid #333;
    margin-top: 40px;
    padding-top: 20px;
    font-size: 14px;
}

/* --- ৬. রেসপন্সিভ ডিজাইন --- */
@media (max-width: 768px) {
    .header-flex {
        flex-direction: column;
        gap: 15px;
    }
    
    .search-bar {
        width: 100%;
    }
    
    .nav-links {
        overflow-x: auto;
        white-space: nowrap;
    }
    
    .hero-section h1 {
        font-size: 2rem;
    }
}
