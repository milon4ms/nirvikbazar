/**
 * Nirvik Bazar - Product Database
 * এই ফাইলে আপনার দোকানের সব পণ্যের তালিকা থাকবে। ক্যাটাগরি গুলি এরকম mens  womens  baby electronics  herbal  others
 */

const products = [
    // ১. ন্যাচারাল প্রোডাক্ট (herbal Products)
    {
        id: 1,
        name: "সুন্দরবনের খাঁটি মধু (৫০০ গ্রাম)",
        price: 450,
        category: "herbal",
        description: "সুন্দরবনের প্রাকৃতিক চাক থেকে সংগৃহীত ১০০% বিশুদ্ধ ও ভেজালমুক্ত মধু। সরাসরি খামারিদের থেকে সংগৃহীত।",
        image: "images/product1.jpg",
        popular: true,
        new: false
    },
    {
        id: 2,
        name: "গাওয়া ঘি - প্রিমিয়াম কোয়ালিটি",
        price: 950,
        category: "herbal",
        description: "সম্পূর্ণ ঘরোয়া পদ্ধতিতে তৈরি সুগন্ধি গাওয়া ঘি। কোনো কৃত্রিম ফ্লেভার বা রং নেই।",
        image: "images/product2.jpg",
        popular: true,
        new: true
    },

    // ২. ম্যানস ফ্যাশন (Man's Fashion)
    {
        id: 3,
        name: "প্রিমিয়াম কটন ফরমাল শার্ট",
        price: 1250,
        category: "mens",
        description: "১০০% কটন কাপড়ের আরামদায়ক ফরমাল শার্ট। অফিস বা যেকোনো অনুষ্ঠানের জন্য পারফেক্ট।",
        image: "images/product3.jpg",
        popular: false,
        new: true
    },
    {
        id: 4,
        name: "স্টাইলিশ পাঞ্জাবি - ঈদ কালেকশন",
        price: 1800,
        category: "mens",
        description: "লিলেন কাপড়ের ওপর আধুনিক এমব্রয়ডারি করা প্রিমিয়াম পাঞ্জাবি।",
        image: "images/product4.jpg",
        popular: true,
        new: false
    },

    // ৩. ওমেন্স ফ্যাশন (womens Fashion)
    {
        id: 5,
        name: "টাঙ্গাইল সিল্ক শাড়ি",
        price: 2500,
        category: "womens",
        description: "ঐতিহ্যবাহী টাঙ্গাইল সিল্ক শাড়ি। আকর্ষণীয় ডিজাইন ও উন্নত মানের সুতায় তৈরি।",
        image: "images/product5.jpg",
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
        image: "images/product6.jpg",
        popular: true,
        new: true
    },

    // ৫. ইলেকট্রনিক্স (electronics)
    {
        id: 7,
        name: "স্মার্ট ওয়াচ - সিরিজ ৮ ক্লোন",
        price: 2200,
        category: "electronics",
        description: "ফুল টাচ স্ক্রিন, হার্ট রেট মনিটর এবং কলিং ফিচার সমৃদ্ধ আধুনিক স্মার্ট ওয়াচ।",
        image: "images/product7.jpg",
        popular: false,
        new: true
    },
    {
        id: 8,
        name: "প্রিমিয়াম হেডফোন - এক্সট্রা বাস",
        price: 1500,
        category: "electronics",
        description: "চমৎকার সাউন্ড কোয়ালিটি এবং আরামদায়ক ইয়ারপ্যাড সমৃদ্ধ হেডফোন।",
        image: "images/product8.jpg",
        popular: true,
        new: true
    }
];

// লোড হওয়ার নিশ্চয়তা পেতে কনসোল চেক
console.log("Products database updated: " + products.length + " items.");
