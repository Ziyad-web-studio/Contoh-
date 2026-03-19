export const businessData = {
  id: {
    seo: {
      title: 'Ramen Giant Cijerah | Ramen Cimahi & Restoran Rooftop Cimahi',
      description:
        'Ramen Giant Cijerah di Melong, Cimahi. Ramen Halal Terdekat dengan harga 25rb-50rb, cocok untuk pelajar, keluarga, dan pencinta ramen anak.',
      keywords:
        'Ramen Cimahi, Ramen Halal Terdekat, Restoran Rooftop Cimahi, Ramen Cijerah, Ramen Murah, Ramen Anak, Ramen Cocok Untuk Pelajar',
    },
    brand: {
      name: 'Ramen Giant Cijerah',
      type: 'Restoran ramen',
      ratingText: 'Rating 4,3 (1.165 ulasan)',
      priceRange: 'Rp25rb-50rb',
      location: 'Melong, Kota Cimahi, Jawa Barat',
      mapLink: 'https://maps.app.goo.gl/omrdXU8GvhQUwGTU9',
      gofoodLabel: 'Bisa pesan lewat WhatsApp dan GoFood',
      parkingNote:
        'Parkiran mobil memang di pinggir jalan, tetapi petugas parkir dengan semangat membantu menjaga dan mengatur saat pelanggan mau pulang.',
    },
    contact: {
      whatsappPhone: '',
      whatsappFallbackLabel: 'Silakan isi nomor WA bisnis di data.js',
    },
    hours: [
      { day: 'Senin', open: '12.00', close: '22.00' },
      { day: 'Selasa', open: '12.00', close: '22.00' },
      { day: 'Rabu', open: '12.00', close: '22.00' },
      { day: 'Kamis', open: '12.00', close: '22.00' },
      { day: 'Jumat', open: '12.00', close: '22.00' },
      { day: 'Sabtu', open: '12.00', close: '22.00' },
      { day: 'Minggu', open: '12.00', close: '22.00' },
    ],
    hero: {
      title: 'Ramen Cimahi, Ramen Halal Terdekat, dan Ramen Cijerah Favorit Pelajar',
      subtitle:
        'Nikmati Restoran Rooftop Cimahi dengan nuansa malam hangat, ramen murah, dan pilihan ramen anak untuk keluarga.',
      image:
        'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1600',
      ctaPrimary: 'Pesan via WhatsApp',
      ctaSecondary: 'Buka Google Maps',
    },
    menuTabs: [
      {
        key: 'ramen-reguler',
        label: 'Ramen Reguler',
        description: 'Varian ramen reguler paling lengkap.',
        accent: 'red',
        image:
          'https://images.unsplash.com/photo-1618841557871-b4664fbf0cb3?auto=format&fit=crop&w=1200&q=80',
        items: [
          'Tofu Ramen',
          'Ekado Ramen',
          'Tentakel Ramen',
          'Chicken Furai Ramen',
          'Pangsit Nori Ramen',
          'Chicken Finger Ramen',
          'Fishroll Ramen',
          'Okina Dumpling Ramen',
          'Wonton Ramen',
          'Enokitake Ramen',
          'Beef Enoki Ramen',
          'Chicken Lolipop Ramen',
          'Nivaton Ramen',
          'Plankia Ramen',
          'Mr Cepen Ramen',
          'Karage Ramen',
          'Calamary Ramen',
          'Bratwurst Ramen',
          'Beef Ramen',
        ],
      },
      {
        key: 'bigger',
        label: 'Bigger',
        description: 'Porsi lebih besar untuk yang ingin lebih puas.',
        accent: 'yellow',
        image:
          'https://images.unsplash.com/photo-1623341214825-9f4f963727da?auto=format&fit=crop&w=1200&q=80',
        items: ['Tempura Ramen', 'Sea World Ramen', 'Kompilasi Ramen', 'Karnivor Ramen'],
      },
      {
        key: 'yamien',
        label: 'Yamien',
        description: 'Kategori Special Yamien.',
        accent: 'red',
        image:
          'https://images.unsplash.com/photo-1557872943-16a5ac26437e?auto=format&fit=crop&w=1200&q=80',
        items: ['Yamien Seoul', 'Yamien Beef', 'Yamien Katsu', 'Yamien Bratwurst'],
      },
      {
        key: 'kids-menu',
        label: 'Kids Menu (Ramen & Udon)',
        description: 'Pilihan ramen anak dan udon anak dalam satu tab.',
        accent: 'yellow',
        image:
          'https://images.unsplash.com/photo-1555126634-323283e090fa?auto=format&fit=crop&w=1200&q=80',
        items: [
          'Kids Ramen 1',
          'Kids Ramen 2',
          'Kids Ramen 3',
          'Kids Ramen 4',
          'Kids Ramen 5',
          'Kids Udon 1',
          'Kids Udon 2',
          'Kids Udon 3',
          'Kids Udon 4',
          'Kids Udon 5',
        ],
      },
      {
        key: 'dessert',
        label: 'Dessert',
        description: 'Aksen toska khusus menu penutup.',
        accent: 'teal',
        image:
          'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=1200&q=80',
        items: [
          'Youghurt Lechy',
          'Youghurt Blueberry',
          'Youghurt Manggo',
          'Youghurt Strawberry',
          'Ice Durian Creamary',
        ],
      },
    ],
    sideMenus: {
      riceExtra: ['Tebasaki Rice', 'Rice Chicken Katsu', 'Karage Rice', 'Rice Katsu Cheese'],
      others: [
        'Lemon Squash',
        'Mineral Water',
        'Hot Tea',
        'Hot Lemon Tea',
        'Ocha',
        'Marquisa Sunshine',
        'Ice Tea',
        'Ice Lemon Tea',
        'Ice Tea Lechy',
        'Lime Florida',
        'Jungle Manggo',
        'Orenji',
        'Hawaii Granadine',
        'Manggo Lazzy',
        'Blue Ocean',
        'Red Noir Ice Cream',
        'Milo Shake Aisu',
        'Almond Crush',
        'Snow Oreo',
        'Gula Asem',
        'Thai Tea',
        'Green Tea Coffee',
        'Tea Tarik',
        'Choco Milk',
        'Mocca Loca',
        'Taro Latte',
        'Matcha Green Tea',
        'Candy Manggo',
        'Lechy Fizz',
        'Blue Deep',
        'Lechy Blazz',
        'Lime Blazz',
      ],
    },
    testimonials: [
      {
        name: 'hanii pahh',
        stars: 5,
        quote:
          'Tempatnya nyaman, bersih, luas, ada 2 lantai, Aku kemarin beli yang varian Niku Soboro ramen, Gyu panko ramen & kids tory drum, rasa enak gurih, gak hambar.',
      },
      {
        name: 'Mergie Decillita',
        stars: 5,
        quote:
          'Anak anak sangat suka ramenya, sekarang ada rooftop jadi bisa makan sambil menikmati sensasi angin segar dan lampu lampu disekitarnya lokasi.',
      },
      {
        name: 'redi sulaeman',
        stars: 5,
        quote:
          'Harganya terjangkau, rasanya gak kalah dibanding ramen di mall mewah, varian ramen banyak dengan toping variatif, dessert dan minumannya beneran enak.',
      },
      {
        name: 'Yuma',
        stars: 5,
        quote:
          'Ramen Giant Cijerah adalah pilihan tepat buat yang cari ramen enak, porsi besar, dan harga terjangkau di area Cijerah. Singkatnya: kenyang, terjangkau, dan memuaskan.',
      },
      {
        name: 'Syarianty Rengganis',
        stars: 5,
        quote:
          'tempatnya luas,, rasanya work it dengan harganya,,lumayan banyak pilihan ramen dan topingnya',
      },
    ],
    ui: {
      sectionTitleMenu: 'Menu Ramen Murah & Ramen Anak',
      sectionTitleInfo: 'Info Lokasi dan Jam Operasional',
      footerWaLocationText: 'Halo RGC, tanya info lokasi dong',
      waOrderPrefix: 'Halo RGC, saya mau pesan',
    },
  },
  en: {
    seo: {
      title: 'Ramen Giant Cijerah | Cimahi Ramen & Rooftop Spot',
      description:
        'Ramen Giant Cijerah in Melong, Cimahi with affordable ramen, kids menu, and rooftop atmosphere.',
      keywords:
        'Ramen Cimahi, Halal Ramen Nearby, Rooftop Restaurant Cimahi, Ramen Cijerah, Affordable Ramen, Kids Ramen, Student-Friendly Ramen',
    },
    brand: {
      name: 'Ramen Giant Cijerah',
      type: 'Ramen restaurant',
      ratingText: 'Rating 4.3 (1,165 reviews)',
      priceRange: 'IDR 25K-50K',
      location: 'Melong, Cimahi City, West Java',
      mapLink: 'https://maps.app.goo.gl/omrdXU8GvhQUwGTU9',
      gofoodLabel: 'Available on WhatsApp and GoFood',
      parkingNote:
        'Car visitors are supported by parking attendants for vehicle arrangement and safety.',
    },
    contact: {
      whatsappPhone: '',
      whatsappFallbackLabel: 'Please set business WhatsApp number in data.js',
    },
    ui: {
      sectionTitleMenu: 'Menu',
      sectionTitleInfo: 'Location & Hours',
      footerWaLocationText: 'Hi RGC, can I ask for your location info?',
      waOrderPrefix: 'Hi RGC, I want to order',
    },
  },
};

export const DEFAULT_LOCALE = 'id';
