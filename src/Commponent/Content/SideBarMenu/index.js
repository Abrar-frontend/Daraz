// Side bar Man Array 
const SideBarItems = ['Health & Beauty','Mobile','Laptop','Electronics Device','Cloths','Sports']

// Sub array of side bar Array
    const healthBeautyNames = ['Makeup', 'Beauty Tools', 'Skin Care', 'Hair Care', 'Bath & Body', "Men's Care", 'Personal Care', 'Fragrances', 'Sexual Wellness', 'Medical Supplies'];

    const mobileNames = ["iPhone 13", "Samsung Galaxy S21", "Google Pixel 6", "OnePlus 9", "Xiaomi Mi 11", "Huawei P40"];
    
    const laptopNames = ["MacBook Pro", "Dell XPS", "HP Spectre x360", "Lenovo ThinkPad", "Microsoft Surface", "Asus ZenBook"];
    
    const electronicDevices = ["Smartphone", "Laptop", "Tablet", "Smartwatch", "Television", "Digital Camera", "Headphones", "Smart Speaker", "Gaming Console", "Fitness Tracker"];
    
    const clothes = ["T-shirt", "Jeans", "Dress", "Jacket", "Sneakers", "Yoga Pants", "Swimsuit"];
    
    const sportsEquipment = ["Football", "Basketball", "Tennis Racquet", "Golf Clubs", "Skateboard", "Bicycle", "Snowboard", "Helmet"];



    const skinCareProducts = [
      { imgUrl: 'https://grozar.pk/wp-content/uploads/2019/10/Fair-Lovely-is-Now-Glow-Lovely-Advanced-Multi-Vitamin-Cream-70ml.jpg', producDes: "This is a gentle cleanser suitable for all skin types." },
      { imgUrl: 'https://grozar.pk/wp-content/uploads/2019/10/Fair-Lovely-is-Now-Glow-Lovely-Advanced-Multi-Vitamin-Cream-70ml.jpg', producDes: "An anti-aging serum with hyaluronic acid and vitamin C." },
      { imgUrl: 'https://grozar.pk/wp-content/uploads/2019/10/Fair-Lovely-is-Now-Glow-Lovely-Advanced-Multi-Vitamin-Cream-70ml.jpg', producDes: "Moisturizing cream enriched with shea butter and aloe vera." }
    ];

    const makeupProducts = [
        { imgUrl: 'https://images.pexels.com/photos/1115128/pexels-photo-1115128.jpeg', producDes: "This is a makeup product." },
        { imgUrl: 'https://images.pexels.com/photos/1115128/pexels-photo-1115128.jpeg', producDes: "Another makeup product." }
      ];
      
      const beautyToolsProducts = [
        { imgUrl: 'https://images.pexels.com/photos/757889/pexels-photo-757889.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', producDes: "This is a beauty tools product." },
        { imgUrl: 'https://images.pexels.com/photos/757889/pexels-photo-757889.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', producDes: "Another beauty tools product." }
      ];
      
      const hairCareProducts = [
        { imgUrl: 'https://images.pexels.com/photos/4260099/pexels-photo-4260099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1tps://example.com/hair-care-product1.jpg', producDes: "This is a hair care product." },
        { imgUrl: 'https://ehttps://images.pexels.com/photos/4260099/pexels-photo-4260099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1xample.com/hair-care-product2.jpg', producDes: "Another hair care product." }
      ];

      const bathBodyProducts = [
        { imgUrl: 'https://images.pexels.com/photos/757889/pexels-photo-757889.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', producDes: "This is a bath & body product." },
        { imgUrl: 'https://images.pexels.com/photos/757889/pexels-photo-757889.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', producDes: "Another bath & body product." }
      ];
      
      const mensCareProducts = [
        { imgUrl: 'https://example.com/mens-care-product1.jpg', producDes: "This is a men's care product." },
        { imgUrl: 'https://example.com/mens-care-product2.jpg', producDes: "Another men's care product." }
      ];
      
      const personalCareProducts = [
        { imgUrl: 'https://example.com/personal-care-product1.jpg', producDes: "This is a personal care product." },
        { imgUrl: 'https://example.com/personal-care-product2.jpg', producDes: "Another personal care product." }
      ];
      
      const fragrancesProducts = [
        { imgUrl: 'https://example.com/fragrances-product1.jpg', producDes: "This is a fragrances product." },
        { imgUrl: 'https://example.com/fragrances-product2.jpg', producDes: "Another fragrances product." }
      ];
      
      const sexualWellnessProducts = [
        { imgUrl: 'https://example.com/sexual-wellness-product1.jpg', producDes: "This is a sexual wellness product." },
        { imgUrl: 'https://example.com/sexual-wellness-product2.jpg', producDes: "Another sexual wellness product." }
      ];
      
      const medicalSuppliesProducts = [
        { imgUrl: 'https://example.com/medical-supplies-product1.jpg', producDes: "This is a medical supplies product." },
        { imgUrl: 'https://example.com/medical-supplies-product2.jpg', producDes: "Another medical supplies product." }
      ];


      // For Mobile Array 
      const iPhone13Products = [
        { imgUrl: 'https://images.pexels.com/photos/14666017/pexels-photo-14666017.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', producDes: "This is an iPhone 13 product." },
        { imgUrl: 'https://images.pexels.com/photos/18357979/pexels-photo-18357979/free-photo-of-gentcreate-iphone-15-lizard-leather-case.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', producDes: "Another iPhone 13 product." }
      ];
      
      const samsungGalaxyS21Products = [
        { imgUrl: 'https://images.pexels.com/photos/4554696/pexels-photo-4554696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', producDes: "This is a Samsung Galaxy S21 product." },
        { imgUrl: 'https://images.pexels.com/photos/4554696/pexels-photo-4554696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', producDes: "Another Samsung Galaxy S21 product." }
      ];
      
      const googlePixel6Products = [
        { imgUrl: 'https://images.pexels.com/photos/14666017/pexels-photo-14666017.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', producDes: "This is a Google Pixel 6 product." },
        { imgUrl: 'https://images.pexels.com/photos/9403824/pexels-photo-9403824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1-pixel-6-product2.jpg', producDes: "Another Google Pixel 6 product." }
      ];
      
      const onePlus9Products = [
        { imgUrl: 'https://images.pexels.com/photos/9403824/pexels-photo-9403824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1g', producDes: "This is a OnePlus 9 product." },
        { imgUrl: 'https://images.pexels.com/photos/4554696/pexels-photo-4554696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', producDes: "Another OnePlus 9 product." }
      ];
      
      const xiaomiMi11Products = [
        { imgUrl: 'https://example.com/xiaomhttps://images.pexels.com/photos/10343714/pexels-photo-10343714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1i-mi-11-product1.jpg', producDes: "This is a Xiaomi Mi 11 product." },
        { imgUrl: 'https://images.pexels.com/photos/14666017/pexels-photo-14666017.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', producDes: "Another Xiaomi Mi 11 product." }
      ];
      
      const huaweiP40Products = [
        { imgUrl: 'https://images.pexels.com/photos/9403824/pexels-photo-9403824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1/huawei-p40-product1.jpg', producDes: "This is a Huawei P40 product." },
        { imgUrl: 'https://images.pexels.com/photos/9403824/pexels-photo-9403824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', producDes: "Another Huawei P40 product." }
      ];

    export {
        SideBarItems,

        healthBeautyNames,
        mobileNames,
        laptopNames,
        electronicDevices,
        clothes,
        sportsEquipment,

        skinCareProducts,
        hairCareProducts,
        bathBodyProducts,
        beautyToolsProducts,
        makeupProducts,

        huaweiP40Products,
        iPhone13Products,
        xiaomiMi11Products,
        onePlus9Products,
        googlePixel6Products,
        samsungGalaxyS21Products,

    }