<!DOCTYPE html>
<html lang="bn">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>নির্বিক বাজার | প্রিমিয়াম অনলাইন শপিং</title>
    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <link rel="stylesheet" href="styles.css">
    
    <style>
        /* লোগোর জন্য বিশেষ স্টাইল */
        .logo img {
            height: 60px; /* লোগোর উচ্চতা আপনার সিম্বলের সমান রাখা হয়েছে */
            vertical-align: middle;
        }
        .hero-section {
            background: linear-gradient(rgba(255,255,255,0.8), rgba(255,255,255,0.8)), url('images/hero_banner.png');
            background-size: cover;
            background-position: center;
            padding: 80px 0;
            text-align: center;
        }
    </style>
</head>
<body>

    <header class="main-header">
        <div class="container header-flex">
            <div class="logo">
                <a href="index.html">
                    <img src="images/logo.png" alt="Nirvik Bazar Logo">
                </a>
            </div>
            
            <div class="search-bar">
                <input type="text" placeholder="পণ্য খুঁজুন...">
                <button aria-label="Search"><i class="fa fa-search"></i></button>
            </div>
            
            <div class="header-icons">
                <a href="checkout.html" class="cart-icon">
                    <i class="fa fa-shopping-cart"></i>
                    <span class="badge" id="cart-count">0</span>
                </a>
            </div>
        </div>
    </header>

    <nav class="navbar">
        <div class="container">
            <ul class="nav-links">
                <li><a href="index.html" class="active">হোম</a></li>
                <li class="dropdown">
                    <a href="#">ম্যানস ফ্যাশন <i class="fa fa-chevron-down"></i></a>
                    <ul class="dropdown-menu">
                        <li><a href="#">শার্ট</a></li>
                        <li><a href="#">প্যান্ট</a></li>
                        <li><a href="#">পাঞ্জাবি</a></li>
                    </ul>
                </li>
                <li class="dropdown">
                    <a href="#">ওমেন্স ফ্যাশন <i class="fa fa-chevron-down"></i></a>
                    <ul class="dropdown-menu">
                        <li><a href="#">শাড়ি</a></li>
                        <li><a href="#">থ্রি-পিস</a></li>
                        <li><a href="#">গহনা</a></li>
                    </ul>
                </li>
                <li class="dropdown">
                    <a href="#">বেবি আইটেম <i class="fa fa-chevron-down"></i></a>
                    <ul class="dropdown-menu">
                        <li><a href="#">খেলনা</a></li>
                        <li><a href="#">ডায়াপার</a></li>
                    </ul>
                </li>
                <li class="dropdown">
                    <a href="#">ন্যাচারাল প্রোডাক্ট <i class="fa fa-chevron-down"></i></a>
                    <ul class="dropdown-menu">
                        <li><a href="#">খাঁটি মধু</a></li>
                        <li><a href="#">ঘি ও অয়েল</a></li>
                    </ul>
                </li>
                <li><a href="#">ইলেকট্রনিক্স</a></li>
                <li><a href="checkout.html">চেকআউট</a></li>
            </ul>
        </div>
    </nav>

    <section class="hero-section">
        <div class="container">
            <h1 style="font-size: 3rem; color: #1a1a1a; margin-bottom: 20px;">সেরা দামে সেরা পণ্য</h1>
            <p style="font-size: 1.2rem; color: #444; margin-bottom: 30px;">আপনার প্রতিদিনের প্রয়োজনীয় সবকিছু এক জায়গায় নিশ্চিত বিশুদ্ধতায়।</p>
            <a href="#main-grid" class="btn" style="padding: 15px 40px; font-size: 1.1rem; border-radius: 50px;">কেনাকাটা শুরু করুন</a>
        </div>
    </section>

    <main class="container" id="main-grid" style="margin-top: 50px;">
        
        <h2 class="section-title">জনপ্রিয় প্রোডাক্ট</h2>
        <div class="product-grid" id="popular-products">
            </div>

        <hr style="margin: 60px 0; border: 0; border-top: 1px solid #eee;">

        <h2 class="section-title">নতুন প্রোডাক্ট</h2>
        <div class="product-grid" id="new-products">
            </div>

        <hr style="margin: 60px 0; border: 0; border-top: 1px solid #eee;">

        <h2 class="section-title">সকল পণ্যসমূহ</h2>
        <div class="product-grid" id="product-container">
            </div>
    </main>

    <footer class="main-footer">
        <div class="container footer-grid">
            <div class="footer-item">
                <h3>🌿 নির্বিক বাজার</h3>
                <p>আমরা দিচ্ছি বিশুদ্ধ ও প্রিমিয়াম পণ্যের নিশ্চয়তা। আপনার সুস্থতা ও সঠিক কেনাকাটাই আমাদের লক্ষ্য।</p>
                <div class="social-links">
                    <a href="#"><i class="fab fa-facebook"></i></a>
                    <a href="#"><i class="fab fa-youtube"></i></a>
                    <a href="#"><i class="fab fa-whatsapp"></i></a>
                </div>
            </div>

            <div class="footer-item">
                <h4>প্রয়োজনীয় লিংক</h4>
                <ul>
                    <li><a href="#">আমাদের সম্পর্কে</a></li>
                    <li><a href="#">রিটার্ন পলিসি</a></li>
                    <li><a href="#">যোগাযোগ</a></li>
                </ul>
            </div>

            <div class="footer-item">
                <h4>যোগাযোগ</h4>
                <p><i class="fa fa-map-marker-alt"></i> কুড়িগ্রাম, রংপুর, বাংলাদেশ</p>
                <p><i class="fa fa-phone"></i> +৮৮০ ১৭০০-০০۰۰০০</p>
                <p><i class="fa fa-envelope"></i> info@nirvikbazar.com</p>
            </div>

            <div class="footer-item">
                <h4>পেমেন্ট মেথড</h4>
                <div class="payment-icons" style="display: flex; gap: 10px; margin-top: 10px;">
                    <img src="https://img.icons8.com/color/38/000000/visa.png" alt="Visa">
                    <img src="https://img.icons8.com/color/38/000000/mastercard.png" alt="Mastercard">
                    <img src="https://img.icons8.com/color/38/000000/bkash.png" alt="bKash">
                </div>
                <p style="font-size: 12px; margin-top: 10px; color: #666;">ক্যাশ অন ডেলিভারি সহজলভ্য</p>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; ২০২৬ নির্বিক বাজার | ডিজাইন ও ডেভেলপমেন্ট: মোঃ আসাদুজ্জামান মিলন</p>
        </div>
    </footer>

    <script src="public/secrets.js"></script>
    <script src="products.js"></script>
    <script src="script.js"></script>
    <script src="save-order.js"></script>

</body>
</html>
