export const restaurantData = {
  name: "Ramen Giant Cijerah",
  rating: "4.3",
  reviewsCount: "1.165",
  priceRange: "Rp 25.000 - Rp 50.000",
  location: "Melong, Kota Cimahi, Jawa Barat",
  mapLink: "https://maps.app.goo.gl/omrdXU8GvhQUwGTU9",
  parkingInfo: "Tersedia area parkir. Jika membawa mobil, lokasi parkir di pinggir jalan, namun petugas parkir kami siap membantu menjaga dan mengatur kendaraan Anda dengan sigap.",
  whatsappNumber: "6281234567890", // Ganti dengan nomor asli
  hours: {
    Senin: "12.00 - 22.00",
    Selasa: "12.00 - 22.00",
    Rabu: "12.00 - 22.00",
    Kamis: "12.00 - 22.00",
    Jumat: "12.00 - 22.00",
    Sabtu: "12.00 - 22.00",
    Minggu: "12.00 - 22.00",
  },
  testimonials: [
    {
      name: "hanii pahh",
      rating: 5,
      review: "Tempatnya nyaman, bersih, luas, ada 2 lantai , Aku kemarin beli yang varian Niku Soboro ramen, Gyu panko ramen & kids tory drum. Rasa enak gurih, gak hambar"
    },
    {
      name: "Mergie Decillita",
      rating: 5,
      review: "Anak anak sangat suka Rame nya mana tambah es teh nya dengan gelas jumbo lagi nambah betah dan berlama lama menikmati makanan disini,, sekarang ada rooftop nya jadi bisa makan sambil menikmati sensasi angin segar dan lampu lampu disekitarnya lokasi.. ramenya pakai motor karena parkiran mobilnya pinggir jalan agak riskan juga,, tapi mang parkirnya dengan semangat bisa bantuin jaga dan mengatur saat kita mau pulang.."
    },
    {
      name: "redi sulaeman",
      rating: 5,
      review: "Pertama kali nyoba ramen disini, tempatnya lumayan strategis.. Harganya terjangkau, tapi rasanya gak kalah dibanding ramen di mall mewah di bandung, varian ramen nya banyak dengan toping yang variatif, dan tentunya enak banget.."
    },
    {
      name: "Yuma",
      rating: 5,
      review: "Ramen Giant Cijerah adalah pilihan yang tepat buat kamu yang cari ramen enak, porsi besar, dan harga terjangkau di area Cijerah. Rasanya cenderung cocok untuk lidah lokal dengan variasi kuah dan level pedas yang bisa disesuaikan."
    },
    {
      name: "Syarianty Rengganis",
      rating: 5,
      review: "tempatnya luas,, rasanya work it dengan harganya,,lumayan banyak pilihan ramen dan topingnya"
    }
  ],
  menu: {
    "Reguler Ramen": [
      "Tofu Ramen", "Ekado Ramen", "Tentakel Ramen", "Chicken Furai Ramen",
      "Pangsit Nori Ramen", "Chicken Finger Ramen", "Fishroll Ramen", "Okina Dumpling Ramen",
      "Wonton Ramen", "Enokitake Ramen", "Beef Enoki Ramen", "Chicken Lolipop Ramen",
      "Nivaton Ramen", "Plankia Ramen", "Mr Cepen Ramen", "Karage Ramen",
      "Calamary Ramen", "Bratwurst Ramen", "Beef Ramen"
    ],
    "Bigger": [
      "Tempura Ramen", "Sea World Ramen", "Kompilasi Ramen", "Karnivor Ramen"
    ],
    "Special Yamien": [
      "Yamien Seoul", "Yamien Beef", "Yamien Katsu", "Yamien Bratwurst"
    ],
    "Kids Menu": [
      "Kids Ramen 1", "Kids Ramen 2", "Kids Ramen 3", "Kids Ramen 4", "Kids Ramen 5",
      "Kids Udon 1", "Kids Udon 2", "Kids Udon 3", "Kids Udon 4", "Kids Udon 5"
    ],
    "Rice Extra": [
      "Tebasaki Rice", "Rice Chicken Katsu", "Karage Rice", "Rice Katsu Cheese"
    ],
    "Dessert": [
      "Youghurt Lechy", "Youghurt Blueberry", "Youghurt Manggo", "Youghurt Strawberry", "Ice Durian Creamary"
    ],
    "Others": [
      "Lemon Squash", "Mineral Water", "Hot Tea", "Hot Lemon Tea", "Ocha", "Marquisa Sunshine",
      "Ice Tea", "Ice Lemon Tea", "Ice Tea Lechy", "Lime Florida", "Jungle Manggo", "Orenji",
      "Hawaii Granadine", "Manggo Lazzy", "Blue Ocean", "Red Noir Ice Cream", "Milo Shake Aisu",
      "Almond Crush", "Snow Oreo", "Gula Asem", "Thai Tea", "Green Tea Coffee", "Tea Tarik",
      "Choco Milk", "Mocca Loca", "Taro Latte", "Matcha Green Tea", "Candy Manggo", "Lechy Fizz",
      "Blue Deep", "Lechy Blazz", "Lime Blazz"
    ]
  },
  images: {
    hero: "https://images.unsplash.com/photo-1552611052-33e04de081de?q=80&w=1964&auto=format&fit=crop", // Rooftop/restaurant vibe
    ramen: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=2080&auto=format&fit=crop",
    udon: "https://images.unsplash.com/photo-1617093727343-374698b1b08d?q=80&w=2070&auto=format&fit=crop",
    dessert: "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=1964&auto=format&fit=crop"
  }
};

// Arsitektur data multi-bahasa (i18next-ready)
export const translations = {
  id: {
    translation: {
      welcome: "Selamat Datang di",
      subtitle: "Ramen Halal Terdekat dengan Sensasi Rooftop di Cimahi",
      orderNow: "Pesan Sekarang",
      menu: "Menu Kami",
      location: "Lokasi & Parkir",
      testimonials: "Kata Mereka",
      parkingNote: "Catatan Parkir",
      footerQuestion: "Tanya info lokasi dong"
    }
  },
  en: {
    translation: {
      welcome: "Welcome to",
      subtitle: "The Nearest Halal Ramen with Rooftop Sensation in Cimahi",
      orderNow: "Order Now",
      menu: "Our Menu",
      location: "Location & Parking",
      testimonials: "Testimonials",
      parkingNote: "Parking Note",
      footerQuestion: "Can I get more info about the location?"
    }
  }
};
