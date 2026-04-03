/**
 * Nirvik Bazar - Product Database
 * এই ফাইলে আপনার দোকানের সব পণ্যের তালিকা থাকবে।
 * নতুন পণ্য যোগ করতে নিচের ফরম্যাটটি কপি করে পেস্ট করুন।
 */

const products = [
    // ১. ন্যাচারাল প্রোডাক্ট (Natural Products)
    {
        id: 1,
        name: "সুন্দরবনের খাঁটি মধু (৫০০ গ্রাম)",
        price: 450,
        category: "natural",
        description: "সুন্দরবনের প্রাকৃতিক চাক থেকে সংগৃহীত ১০০% বিশুদ্ধ ও ভেজালমুক্ত মধু। সরাসরি খামারিদের থেকে সংগৃহীত।",
        image: "images/honey.jpg",
        popular: true,
        new: false
    },
    {
        id: 2,
        name: "গাওয়া ঘি - প্রিমিয়াম কোয়ালিটি",
        price: 950,
        category: "natural",
        description: "সম্পূর্ণ ঘরোয়া পদ্ধতিতে তৈরি সুগন্ধি গাওয়া ঘি। কোনো কৃত্রিম ফ্লেভার বা রং নেই।",
        image: "images/ghi.jpg",
        popular: true,
        new: true
    },

    // ২. ম্যানস ফ্যাশন (Man's Fashion)
    {
        id: 3,
        name: "প্রিমিয়াম কটন ফরমাল শার্ট",
        price: 1250,
        category: "man",
        description: "১০০% কটন কাপড়ের আরামদায়ক ফরমাল শার্ট। অফিস বা যেকোনো অনুষ্ঠানের জন্য পারফেক্ট।",
        image: "images/shirt_man.jpg",
        popular: false,
        new: true
    },
    {
        id: 4,
        name: "স্টাইলিশ পাঞ্জাবি - ঈদ কালেকশন",
        price: 1800,
        category: "man",
        description: "লিলেন কাপড়ের ওপর আধুনিক এমব্রয়ডারি করা প্রিমিয়াম পাঞ্জাবি।",
        image: "images/panjabi.jpg",
        popular: true,
        new: false
    },

    // ৩. ওমেন্স ফ্যাশন (Women's Fashion)
    {
        id: 5,
        name: "টাঙ্গাইল সিল্ক শাড়ি",
        price: 2500,
        category: "women",
        description: "ঐতিহ্যবাহী টাঙ্গাইল সিল্ক শাড়ি। আকর্ষণীয় ডিজাইন ও উন্নত মানের সুতায় তৈরি।",
        image: "images/saree.jpg",
        popular: false,
        new: true
    },

    // ৪. বেবি আইটেম (Baby Items)
    {
        id: 6,
        name: "কিডস সফট কটন ড্রেস সেট",
        price: 850,
        category: "baby",
        description: "শিশুদের ত্বকের জন্য উপযোগী নরম সুতি কাপড়ের তৈরি ড্রেস সেট।",
        image: "images/baby_dress.jpg",
        popular: true,
        new: true
    },

    // ৫. ইলেকট্রনিক্স (Electronics)
    {
        id: 7,
        name: "স্মার্ট ওয়াচ - সিরিজ ৮ ক্লোন",
        price: 2200,
        category: "electronics",
        description: "ফুল টাচ স্ক্রিন, হার্ট রেট মনিটর এবং কলিং ফিচার সমৃদ্ধ আধুনিক স্মার্ট ওয়াচ।",
        image: "images/smartwatch.jpg",
        popular: false,
        new: true
    }
];

// এই লাইনটি নিশ্চিত করে যে ডাটা অন্য ফাইল থেকে পাওয়া যাবে
console.log("Products loaded successfully: ", products.length);
