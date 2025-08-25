export const SERVICE = new Map([
  [
    "storage",
    {
      searchText: "Find Nearby Storage Space for Everything",
      categories: [
        {
          t: "Warehouses",
          b: ["CCTV", "24/7", "Loading Bay"],
          description:
            "Ideal for business inventory management, order fulfilment, and shared storage spaces.",
        },
        {
          t: "Independent Rooms",
          b: ["Lockable", "Ventilated", "Safe"],
          description:
            "Private storage rooms with easy access for your convenience.",
        },
        {
          t: "Shared Spaces",
          b: ["Affordable", "Flexible", "Verified"],
          description:
            "Flexible, on-demand storage where you pay only for the space you use.",
        },
      ],
      frequentlyBookedSpaces: [
        {
          id: 1,
          title: "Imperial — Kharadi",
          type: "Storage Room",
          desc: "Clean, ventilated, secure storage with CCTV",
          badges: ["CCTV", "24/7", "Ground Floor"],
          price: 2600,
          deposit: 500,
        },
        {
          id: 2,
          title: "Your Space Doctor LLP",
          type: "Storage Room",
          desc: "Clean, ventilated, secure storage with CCTV",
          badges: ["CCTV", "24/7", "Ground Floor", "Lock and Key"],
          price: 3688,
          deposit: 700,
        },
        {
          id: 3,
          title: "Ease my Storage",
          type: "Storage Room",
          desc: "Clean, ventilated, secure storage with CCTV",
          badges: ["CCTV", "24/7", "Ground Floor"],
          price: 2581,
          deposit: 500,
        },
      ],
    },
  ],
  [
    "parking",
    {
      searchText: "Find Secure & Convenient Parking Spaces",
      categories: [
        {
          t: "Residential Parking",
          b: ["CCTV", "24/7", "Loading Bay"],
          description:
            "Ideal for those seeking nearby, hassle-free parking solutions.",
          imageUrl:
            "https://media.gettyimages.com/id/175482865/photo/a-landscape-view-of-the-exterior-of-a-new-apartment-complex.jpg?s=612x612&w=0&k=20&c=duJPUxkhxkzYubjv399fq0Bh40lzmc9jyR28YYjq58w=",
        },
        {
          t: "Commercial Parking",
          b: ["Lockable", "Ventilated", "Safe"],
          description:
            "Secure, easily accessible parking with flexible operational hours.",
          imageUrl:
            "https://media.gettyimages.com/id/1469157229/photo/city-parking-lot.jpg?s=612x612&w=0&k=20&c=qkSYfwVxkDVxOD_YZCDZA_TcGBtA-dWsgGYvfu4eSrA=",
        },
        {
          t: "Public Parking Spaces",
          b: ["Affordable", "Flexible", "Verified"],
          description:
            "Convenient and accessible parking options for all needs.",
          imageUrl:
            "https://media.gettyimages.com/id/519515713/photo/aerial-view-of-people-walking-in-parking-lot.jpg?s=612x612&w=0&k=20&c=IeWPXm2TJZnGhqx_W2Yyk4DQAZwrlEoIrWQXgp4yKiY=",
        },
      ],
      frequentlyBookedSpaces: [
        {
          id: 1,
          title: "Covered parking space in Madhav Puram, Tirupati, 517507",
          img: "https://aaxpublic.s3.ap-south-1.amazonaws.com/8a9c8258ed50115082a0aa16b8ff8f73b448e067/2300992b4ab684850009d7ef21a22d45fdd4d4536795.jpg",
          price: 259,
          unit: "₹ 259 /day/space",
          sub: "1 parkings",
          badge: "Covered Parking",
        },
        {
          id: 2,
          title: "Covered parking space in Madhav Puram, Tirupati, 517507",
          img: "https://aaxpublic.s3.ap-south-1.amazonaws.com/7d7c3a476ad4f0e384790ddd1b853799d386bce5/13551d7e408ffd6c676663dabc20f16e24beafd11389.jpg",
          price: 194,
          unit: "₹ 194 /day/space",
          sub: "1 parkings",
          badge: "Covered Parking",
        },
      ],
      howItWorksSteps: [
        {
          step: 1,
          title: "Search & Select a Parking Spot",
          description: "Browse & compare options.",
          icon: "https://aadefault.s3.ap-south-1.amazonaws.com/icons/home-landing/Search-Select-parking-spot-icon.svg",
        },
        {
          step: 2,
          title: "Book online",
          description: "Secure your parking in few clicks.",
          icon: "https://aadefault.s3.ap-south-1.amazonaws.com/icons/home-landing/Book-online-icon.svg",
        },
        {
          step: 3,
          title: "Park with Ease",
          description: "Drive in and park hassle-free.",
          icon: "https://aadefault.s3.ap-south-1.amazonaws.com/icons/home-landing/Park-with-ease-icon.svg",
        },
      ],
      whyChooseUs: [
        {
          title: "Flexible Storage Plans",
          description: "Choose short or long-term as per your needs.",
          imgUrl:
            "https://aadefault.s3.ap-south-1.amazonaws.com/icons/home-landing/Flexible-Parking-Plans-img.jpg",
        },
        {
          title: "Wide geographic presence",
          description: "Multiple cities and micro-locations.",
          imgUrl:
            "https://aadefault.s3.ap-south-1.amazonaws.com/icons/home-landing/Nearby-&-convenient-img.jpg",
        },
        {
          title: "Trusted & Verified Users",
          description: "KYC and strong safety policies.",
          imgUrl:
            "https://aadefault.s3.ap-south-1.amazonaws.com/icons/home-landing/verified-hosts-img.jpg",
        },
      ],
      totalParking: [
        {
          id: 1,
          title: "Covered parking space in Madhav Puram, Tirupati, 517507",
          img: "https://aaxpublic.s3.ap-south-1.amazonaws.com/8a9c8258ed50115082a0aa16b8ff8f73b448e067/2300992b4ab684850009d7ef21a22d45fdd4d4536795.jpg",
          price: 259,
          unit: "₹ 259 /day/space",
          sub: "1 parkings",
          badge: "Covered Parking",
        },
        {
          id: 2,
          title: "Covered parking space in Madhav Puram, Tirupati, 517507",
          img: "https://aaxpublic.s3.ap-south-1.amazonaws.com/7d7c3a476ad4f0e384790ddd1b853799d386bce5/13551d7e408ffd6c676663dabc20f16e24beafd11389.jpg",
          price: 194,
          unit: "₹ 194 /day/space",
          sub: "1 parkings",
          badge: "Covered Parking",
        },
      ],
    },
  ],
  [
    "luggage",
    {
      searchText: "Store Your Luggage Hassle-Free, Anytime, Anywhere !",
      categories: [
        {
          t: "Warehouses",
          b: ["CCTV", "24/7", "Loading Bay"],
          description:
            "Ideal for business inventory management, order fulfilment, and shared storage spaces.",
        },
        {
          t: "Independent Rooms",
          b: ["Lockable", "Ventilated", "Safe"],
          description:
            "Private storage rooms with easy access for your convenience.",
        },
        {
          t: "Shared Spaces",
          b: ["Affordable", "Flexible", "Verified"],
          description:
            "Flexible, on-demand storage where you pay only for the space you use.",
        },
      ],
      frequentlyBookedSpaces: [
        {
          id: 1,
          title: "Imperial — Kharadi",
          type: "Storage Room",
          desc: "Clean, ventilated, secure storage with CCTV",
          badges: ["CCTV", "24/7", "Ground Floor"],
          price: 2600,
          deposit: 500,
        },
        {
          id: 2,
          title: "Your Space Doctor LLP",
          type: "Storage Room",
          desc: "Clean, ventilated, secure storage with CCTV",
          badges: ["CCTV", "24/7", "Ground Floor", "Lock and Key"],
          price: 3688,
          deposit: 700,
        },
        {
          id: 3,
          title: "Ease my Storage",
          type: "Storage Room",
          desc: "Clean, ventilated, secure storage with CCTV",
          badges: ["CCTV", "24/7", "Ground Floor"],
          price: 2581,
          deposit: 500,
        },
      ],
    },
  ],
]);

export const CITIES = [
  {
    city: "Pune",
    imageUrl:
      "https://aadefault.s3.ap-south-1.amazonaws.com/icons/home-landing/Pune-book-space.png",
    totalSpace: "577",
  },
  {
    city: "Mumbai",
    imageUrl:
      "https://aadefault.s3.ap-south-1.amazonaws.com/icons/home-landing/Mumbai-book-space.png",
    totalSpace: "128",
  },
  {
    city: "Bengaluru",
    imageUrl:
      "https://aadefault.s3.ap-south-1.amazonaws.com/icons/home-landing/Bengluru-book-space.png",
    totalSpace: "186",
  },
  {
    city: "Delhi",
    imageUrl:
      "https://aadefault.s3.ap-south-1.amazonaws.com/icons/home-landing/Delhi-book-space.png",
    totalSpace: "123",
  },
  {
    city: "Chennai",
    imageUrl:
      "https://aadefault.s3.ap-south-1.amazonaws.com/icons/home-landing/Chennai-book-space.png",
    totalSpace: "140",
  },
];
