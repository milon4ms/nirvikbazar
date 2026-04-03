/**
 * Nirvik Bazar - Product Database
 * এই ফাইলে আপনার দোকানের সব পণ্যের তালিকা থাকবে। ক্যাটাগরি গুলি এরকম mens  womens  baby electronics  herbal  others
 */

const products = [
    // ১.ন্যাচারাল প্রোডাক্ট (herbal Products)
    {
        id: 1,
        name: "চুলকানির যম নিমতেল",
        price: 500,
        category: "herbal",
        description: "মালিশের সাথে সাথে চুলকানো বন্ধ হয়
নিয়মিত ব্যবহারে খোসপাচড়া দূর হবে
চুলকানোর পরে জ্বালা ও ব্যাথা দূর করে
ব্রণ ও ফুসকুড়ি দ্রুত শুকিয়ে ফেলে
    ক্ষত, কালোদাগ, রক্তপাত দূর করে
ব্যাকটেরিয়া ও ফাঙ্গাস ধ্বংস করে
মাথায় মাখলে খুশকি ও উকুন দূর করে
এটি গায়ে মাখলে মশা কামড়ায় না
    উপাদানঃ নিম, গার্লিক, ক্যামফার, টারমেরিক
১০০% প্রাকৃতিক ও নিরাপদ
শুধু বাহ্যিক ব্যবহারের জন্য (মাখতে হবে)
ডলে ডলে মালিশ করুন, খাওয়া যাবে না।",
        image: "images/product1.jpg",
     
    },
    {
        id: 2,
        name: "গাওয়া ঘি - প্রিমিয়াম কোয়ালিটি",
        price: 950,
        category: "mens",
        description: "সম্পূর্ণ ঘরোয়া পদ্ধতিতে তৈরি সুগন্ধি গাওয়া ঘি। কোনো কৃত্রিম ফ্লেভার বা রং নেই।",
        image: "images/product2.jpg",
    
    },

    // ২. ম্যানস ফ্যাশন (Man's Fashion)  
    {
        id: 3,
        name: "প্রিমিয়াম কটন ফরমাল শার্ট",
        price: 1250,
        category: "womens",
        description: "১০০% কটন কাপড়ের আরামদায়ক ফরমাল শার্ট। অফিস বা যেকোনো অনুষ্ঠানের জন্য পারফেক্ট।",
        image: "images/product3.jpg",
      
    },
    {
        id: 4,
        name: "স্টাইলিশ পাঞ্জাবি - ঈদ কালেকশন",
        price: 1800,
        category: "womens",
        description: "লিলেন কাপড়ের ওপর আধুনিক এমব্রয়ডারি করা প্রিমিয়াম পাঞ্জাবি।",
        image: "images/product4.jpg",
     
    },

    // ৩. ওমেন্স ফ্যাশন (womens Fashion)
    {
        id: 5,
        name: "টাঙ্গাইল সিল্ক শাড়ি",
        price: 2500,
        category: "Baby",
        description: "ঐতিহ্যবাহী টাঙ্গাইল সিল্ক শাড়ি। আকর্ষণীয় ডিজাইন ও উন্নত মানের সুতায় তৈরি।",
        image: "images/product5.jpg",
    
    },
     id: 6,
        name: "টাঙ্গাইল সিল্ক শাড়ি",
        price: 2500,
        category: "Baby",
        description: "ঐতিহ্যবাহী টাঙ্গাইল সিল্ক শাড়ি। আকর্ষণীয় ডিজাইন ও উন্নত মানের সুতায় তৈরি।",
        image: "images/product6.jpg",
     
    },

    // ৪.   বেবি আইটেম (Baby Items)  
    {
        id: 7,
        name: "কিডস সফট কটন ড্রেস সেট",
        price: 850,
        category: "electronics",
        description: "শিশুদের ত্বকের জন্য উপযোগী নরম সুতি কাপড়ের তৈরি ড্রেস সেট।",
        image: "images/product6.jpg",
       
    },
 id: 8,
        name: "স্মার্ট ওয়াচ - সিরিজ ৮ ক্লোন",
        price: 2200,
        category: "electronics",
        description: "ফুল টাচ স্ক্রিন, হার্ট রেট মনিটর এবং কলিং ফিচার সমৃদ্ধ আধুনিক স্মার্ট ওয়াচ।",
        image: "images/product7.jpg",
      

    // ৫. ইলেকট্রনিক্স (electronics)   
    {
        id: 9,
        name: "স্মার্ট ওয়াচ - সিরিজ ৮ ক্লোন",
        price: 2200,
        category: "herbal",
        description: "ফুল টাচ স্ক্রিন, হার্ট রেট মনিটর এবং কলিং ফিচার সমৃদ্ধ আধুনিক স্মার্ট ওয়াচ।",
        image: "images/product7.jpg",
       
    },
    {
        id: 10,
        name: "প্রিমিয়াম হেডফোন - এক্সট্রা বাস",
        price: 1500,
        category: "herbal",
        description: "চমৎকার সাউন্ড কোয়ালিটি এবং আরামদায়ক ইয়ারপ্যাড সমৃদ্ধ হেডফোন।",
        image: "images/product8.jpg",
          
    }
 // ৬.  অনান্য প্রোডাক্ট (others Products)
    {
        id: 9,
        name: "স্মার্ট ওয়াচ - সিরিজ ৮ ক্লোন",
        price: 2200,
        category: "others",
        description: "ফুল টাচ স্ক্রিন, হার্ট রেট মনিটর এবং কলিং ফিচার সমৃদ্ধ আধুনিক স্মার্ট ওয়াচ।",
        image: "images/product7.jpg",
       
    },
    {
        id: 10,
        name: "প্রিমিয়াম হেডফোন - এক্সট্রা বাস",
        price: 1500,
        category: "others",
        description: "চমৎকার সাউন্ড কোয়ালিটি এবং আরামদায়ক ইয়ারপ্যাড সমৃদ্ধ হেডফোন।",
        image: "images/product8.jpg",
          
    }
];

// লোড হওয়ার নিশ্চয়তা পেতে কনসোল চেক
console.log("Products database updated: " + products.length + " items.");
