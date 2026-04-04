/**
 * Nirvik Bazar - Product Database
 * এই ফাইলে আপনার দোকানের সব পণ্যের তালিকা থাকবে। ক্যাটাগরি গুলি এরকম mens womens baby electronics herbal others
 */

const products = [
    // ১. ন্যাচারাল প্রোডাক্ট (Herbal Products)
    {
        id: 1,
        name: "চুলকানির যম নিমতেল",
        price: 500,
        category: "herbal",
        description: "মালিশের সাথে সাথে চুলকানো বন্ধ হয়। নিয়মিত ব্যবহারে খোসপাচড়া দূর হবে। ব্রণ ও ফুসকুড়ি দ্রুত শুকিয়ে ফেলে। এটি গায়ে মাখলে মশা কামড়ায় না। ১০০% প্রাকৃতিক ও নিরাপদ। পরিমান ২০০ মিলি",
        image: "images/product1.jpg"
    },
    {
        id: 2,
        name: "নির্ভীক পাইলস কেয়ার",
        price: 880,
        category: "herbal",
        description: "পাইলসের ব্যথা, জ্বালা ও রক্তপাত কমাতে বিশেষভাবে কার্যকর। এটি ধীরে ধীরে ভেতর থেকে কাজ করে পাইলস দূর করে। কোষ্ঠকাঠিন্য কমিয়ে স্বাভাবিক মলত্যাগে সহায়তা করে,কোনো পার্শ্বপ্রতিক্রিয়া ছাড়াই দীর্ঘমেয়াদে ব্যবহারযোগ্য।", // <-- এখানে কমাটি দেওয়া হয়েছে
        image: "images/product2.jpg"
    },

    // ২. ম্যানস ফ্যাশন (Man's Fashion)
    {
        id: 3,
        name: "প্রিমিয়াম কটন ফরমাল শার্ট",
        price: 1250,
        category: "mens",
        description: "১০০% কটন কাপড়ের আরামদায়ক ফরমাল শার্ট। অফিস বা যেকোনো অনুষ্ঠানের জন্য পারফেক্ট।",
        image: "images/product3.jpg"
    },
    {
        id: 4,
        name: "স্টাইলিশ পাঞ্জাবি - ঈদ কালেকশন",
        price: 1800,
        category: "mens",
        description: "লিলেন কাপড়ের ওপর আধুনিক এমব্রয়ডারি করা প্রিমিয়াম পাঞ্জাবি।",
        image: "images/product4.jpg"
    },

    // ৩. ওমেন্স ফ্যাশন (Womens Fashion)
    {
        id: 5,
        name: "টাঙ্গাইল সিল্ক শাড়ি",
        price: 2500,
        category: "womens",
        description: "ঐতিহ্যবাহী টাঙ্গাইল সিল্ক শাড়ি। আকর্ষণীয় ডিজাইন ও উন্নত মানের সুতায় তৈরি।",
        image: "images/product5.jpg"
    },
    {
        id: 6,
        name: "জমকালো কাতান শাড়ি",
        price: 3200,
        category: "womens", 
        description: "বিশেষ অনুষ্ঠানের জন্য উন্নত মানের কাতান শাড়ি।",
        image: "images/product6.jpg"
    },

    // ৪. বেবি আইটেম (Baby Items)
    {
        id: 7,
        name: "কিডস সফট কটন ড্রেস সেট",
        price: 850,
        category: "kids",
        description: "শিশুদের ত্বকের জন্য উপযোগী নরম সুতি কাপড়ের তৈরি ড্রেস সেট।",
        image: "images/product7.jpg"
    },

    // ৫. ইলেকট্রনিক্স (Electronics)
    {
        id: 8,
        name: "স্মার্ট ওয়াচ - সিরিজ ৮ ক্লোন",
        price: 2200,
        category: "electronics",
        description: "ফুল টাচ স্ক্রিন, হার্ট রেট মনিটর এবং কলিং ফিচার সমৃদ্ধ আধুনিক স্মার্ট ওয়াচ।",
        image: "images/product8.jpg"
    },
    {
        id: 9,
        name: "প্রিমিয়াম হেডফোন - এক্সট্রা বাস",
        price: 1500,
        category: "electronics",
        description: "চমৎকার সাউন্ড কোয়ালিটি এবং আরামদায়ক ইয়ারপ্যাড সমৃদ্ধ হেডফোন।",
        image: "images/product9.jpg"
    },

    // ৬. অনান্য প্রোডাক্ট (Others Products)
    {
        id: 10,
        name: "ট্রাভেল ব্যাকপ্যাক",
        price: 1800,
        category: "others",
        description: "ওয়াটারপ্রুফ এবং মজবুত ট্রাভেল ব্যাগ।",
        image: "images/product10.jpg"
    }
];

// লোড হওয়ার নিশ্চয়তা পেতে কনসোল চেক
console.log("Products database updated: " + products.length + " items.");
