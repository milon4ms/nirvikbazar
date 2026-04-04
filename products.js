<!DOCTYPE html>
<html lang="bn">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>পণ্যের বিবরণ - নির্ভীক বাজার</title>
    <link href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    
    <style>
        :root { --primary: #00a651; --secondary: #e67e22; --dark: #333; --light: #f4f4f4; --white: #fff; }
        * { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Hind Siliguri', sans-serif; }
        body { background: var(--light); color: var(--dark); }
        .container { max-width: 1000px; margin: 20px auto; padding: 20px; background: var(--white); border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
        
        .back-btn { display: inline-block; margin-bottom: 20px; text-decoration: none; color: var(--primary); font-weight: bold; }
        .details-flex { display: flex; flex-wrap: wrap; gap: 30px; }
        .product-img { flex: 1; min-width: 300px; text-align: center; }
        .product-img img { max-width: 100%; border-radius: 10px; border: 1px solid #eee; height: auto; }
        
        .product-info { flex: 1; min-width: 300px; }
        .product-info h1 { font-size: 28px; margin-bottom: 10px; color: var(--dark); }
        .price { font-size: 24px; color: var(--secondary); font-weight: 700; margin-bottom: 15px; display: block; }
        .desc { line-height: 1.6; color: #555; margin-bottom: 25px; white-space: pre-line; }
        
        .btn-group { display: flex; gap: 15px; }
        .btn { flex: 1; padding: 15px; border: none; border-radius: 5px; cursor: pointer; font-size: 16px; font-weight: bold; text-align: center; text-decoration: none; color: white; display: inline-block; }
        .cart-btn { background: var(--primary); }
        .order-btn { background: var(--secondary); }

        @media (max-width: 600px) { .details-flex { flex-direction: column; } .btn-group { flex-direction: column; } }
    </style>
</head>
<body>

    <div class="container">
        <a href="index.html" class="back-btn"><i class="fa fa-arrow-left"></i> কেনাকাটা চালিয়ে যান</a>
        
        <div id="product-content" class="details-flex">
            <p>লোডিং হচ্ছে...</p>
        </div>
    </div>

    <script src="products.js"></script>

    <script>
        document.addEventListener('DOMContentLoaded', function() {
            // ১. ইউআরএল থেকে আইডি নেওয়া
            const urlParams = new URLSearchParams(window.location.search);
            const productId = parseInt(urlParams.get('id'));
            const content = document.getElementById('product-content');

            // চেক করা হচ্ছে products ডাটাবেজ পাওয়া যাচ্ছে কি না
            if (typeof products !== 'undefined' && productId) {
                const product = products.find(p => p.id === productId);

                if (product) {
                    content.innerHTML = `
                        <div class="product-img">
                            <img src="${product.image}" onerror="this.src='https://via.placeholder.com/400x400?text=No+Image'" alt="${product.name}">
                        </div>
                        <div class="product-info">
                            <h1>${product.name}</h1>
                            <span class="price">৳${product.price}</span>
                            <div class="desc">${product.description}</div>
                            
                            <div class="btn-group">
                                <button class="btn cart-btn" onclick="addToCart(${product.id})">কার্টে যোগ করুন</button>
                                <button class="btn order-btn" onclick="buyNow(${product.id})">অর্ডার করুন</button>
                            </div>
                        </div>
                    `;
                    document.title = product.name + " - নির্ভীক বাজার";
                } else {
                    content.innerHTML = `<h2>দুঃখিত, পণ্যটি পাওয়া যায়নি!</h2>`;
                }
            } else {
                content.innerHTML = `<h2>ডাটা লোড করতে সমস্যা হচ্ছে। products.js ফাইলটি চেক করুন।</h2>`;
            }
        });

        function addToCart(id) {
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            const p = products.find(i => i.id === id);
            const existing = cart.find(i => i.id === id);
            if(existing) { existing.quantity += 1; } 
            else { cart.push({...p, quantity: 1}); }
            localStorage.setItem('cart', JSON.stringify(cart));
            alert(p.name + " কার্টে যোগ হয়েছে!");
        }

        function buyNow(id) {
            addToCart(id);
            window.location.href = 'checkout.html';
        }
    </script>
</body>
</html>
