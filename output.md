Berikut adalah struktur kode lengkap dan terpadu untuk website "Ramen Giant Cijerah" yang dibangun dengan React.js, Tailwind CSS, Framer Motion, dan siap dihosting di Vercel.

Sesuai instruksi, di bawah ini merupakan arsitektur yang 100% responsif (Mobile-First), menggunakan skema warna Merah/Kuning/Toska, dan memiliki semua fitur operasional, UX Premium (tabbing instan, dark/light mode), fitur bisnis (Smart WhatsApp Link, Info Parkir, Multi-Bahasa), serta injeksi lokal SEO.

### 1. File Data Operasional & Multi-bahasa (`src/data.js`)
File ini dibuat secara modular sehingga Anda (klien) dapat dengan mudah mengganti data operasional, menu, dan testimoni.

```javascript
export const restaurantData = {
  name: "Ramen Giant Cijerah",
  rating: "4.3",
  reviewsCount: "1.165",
  priceRange: "Rp 25.000 - Rp 50.000",
  location: "Melong, Kota Cimahi, Jawa Barat",
  mapLink: "https://maps.app.goo.gl/omrdXU8GvhQUwGTU9",
  parkingInfo: "Tersedia area parkir. Jika membawa mobil, lokasi parkir di pinggir jalan, namun petugas parkir kami siap membantu menjaga dan mengatur kendaraan Anda dengan sigap.",
  whatsappNumber: "6281234567890", // Ganti dengan nomor WhatsApp asli
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
    hero: "https://images.unsplash.com/photo-1552611052-33e04de081de?q=80&w=1964&auto=format&fit=crop",
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
```

### 2. Komponen Utama React (`src/App.jsx`)
File ini menggabungkan rendering antarmuka, tabbing interaktif dengan animasi Framer Motion, toggle Dark/Light Mode, dan pembuatan Link WhatsApp dinamis. Injeksi SEO lokal ditaruh menggunakan elemen dengan `sr-only`.

```jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaMapMarkerAlt, FaStar, FaMoon, FaSun, FaCar } from "react-icons/fa";
import { restaurantData, translations } from "./data";
import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";

// Konfigurasi i18next
i18n.use(initReactI18next).init({
  resources: translations,
  lng: "id", // Default language
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

function App() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("Reguler Ramen");
  const [darkMode, setDarkMode] = useState(false);

  // Efek Dark Mode Otomatis berdasar preferensi sistem, bisa di-toggle manual
  useEffect(() => {
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  // Dynamic WA Link Generator
  const createWaLink = (message) => {
    return `https://wa.me/${restaurantData.whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  const menuCategories = Object.keys(restaurantData.menu);

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'}`}>

      {/* Header / Navbar */}
      <header className={`fixed w-full z-50 transition-colors duration-300 shadow-md ${darkMode ? 'bg-gray-900/90' : 'bg-white/90'} backdrop-blur-md`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-red-600 tracking-tight">
            {restaurantData.name}
          </h1>
          <div className="flex items-center gap-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-600" />}
            </button>
            <a
              href={createWaLink(`Halo RGC, saya mau pesan makanan.`)}
              target="_blank" rel="noreferrer"
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-2 px-4 rounded-full shadow-lg transition transform hover:scale-105"
            >
              {t('orderNow')}
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-24 pb-12 lg:pt-32 lg:pb-24">
        <div className="absolute inset-0 z-0">
          <img
            src={restaurantData.images.hero}
            alt="Rooftop View Ramen Giant Cijerah"
            className="w-full h-full object-cover opacity-30 dark:opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50 dark:to-gray-900"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-extrabold text-red-600 mb-4 drop-shadow-sm">
              {t('welcome')} {restaurantData.name}
            </h2>
            <p className="text-xl md:text-2xl mb-8 font-medium">
              {t('subtitle')}
            </p>
            <div className="flex justify-center gap-2 mb-8 text-yellow-500 text-xl">
               <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar className="text-yellow-500/50" />
               <span className="text-gray-600 dark:text-gray-300 text-lg ml-2">
                 {restaurantData.rating} ({restaurantData.reviewsCount} Ulasan)
               </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SEO Section: Hidden but important for local SEO H2/H3s */}
      <section className="sr-only">
        <h2>Ramen Cimahi, Ramen Halal Terdekat</h2>
        <h3>Restoran Rooftop Cimahi - Ramen Cijerah</h3>
        <h3>Ramen Murah, Ramen Anak, Ramen Cocok Untuk Pelajar</h3>
      </section>

      {/* Interactive Menu Section */}
      <section className="py-12 container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-red-600 mb-2">{t('menu')}</h2>
          <p className="text-gray-500 dark:text-gray-400">Harga: {restaurantData.priceRange}</p>
        </div>

        {/* Tabbing */}
        <div className="flex overflow-x-auto pb-4 mb-8 hide-scrollbar justify-start md:justify-center gap-2">
          {menuCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`whitespace-nowrap px-6 py-3 rounded-full font-semibold transition-all shadow-sm ${
                activeTab === category
                  ? category === 'Dessert'
                    ? 'bg-tosca-500 text-white scale-105'
                    : 'bg-red-600 text-white scale-105'
                  : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Items Grid with Framer Motion */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {restaurantData.menu[activeTab].map((item, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700 flex justify-between items-center transition hover:shadow-lg ${
                  activeTab === 'Dessert' ? 'bg-teal-50 dark:bg-gray-800' : 'bg-white dark:bg-gray-800'
                }`}
              >
                <span className="font-bold text-lg">{item}</span>
                <a
                  href={createWaLink(`Halo RGC, saya mau pesan ${item}.`)}
                  target="_blank" rel="noreferrer"
                  className="text-red-600 hover:text-red-700 dark:text-yellow-400 dark:hover:text-yellow-300"
                  aria-label={`Pesan ${item}`}
                >
                  <FaWhatsapp className="text-2xl" />
                </a>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Testimonials Section */}
      <section className={`py-16 ${darkMode ? 'bg-gray-800' : 'bg-red-50'}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-red-600 mb-10">{t('testimonials')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {restaurantData.testimonials.slice(0, 3).map((testi, i) => (
              <div key={i} className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow">
                <div className="flex text-yellow-400 mb-3">
                  {[...Array(testi.rating)].map((_, j) => <FaStar key={j} />)}
                </div>
                <p className="italic text-gray-600 dark:text-gray-300 mb-4">"{testi.review}"</p>
                <p className="font-bold text-sm">- {testi.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Parking Section */}
      <section className="py-16 container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-red-600 mb-6">{t('location')}</h2>
            <p className="text-lg mb-2 flex items-center gap-2">
              <FaMapMarkerAlt className="text-red-600" /> {restaurantData.location}
            </p>
            <div className="bg-yellow-100 dark:bg-yellow-900/30 p-4 rounded-xl mt-6 border border-yellow-200 dark:border-yellow-700">
              <h3 className="font-bold flex items-center gap-2 mb-2 text-yellow-800 dark:text-yellow-400">
                <FaCar /> {t('parkingNote')}
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                {restaurantData.parkingInfo}
              </p>
            </div>

            <div className="mt-8">
              <h3 className="font-bold mb-3">Jam Operasional:</h3>
              <ul className="grid grid-cols-2 gap-2 text-sm">
                {Object.entries(restaurantData.hours).map(([day, hours]) => (
                  <li key={day} className="flex justify-between border-b border-gray-200 dark:border-gray-700 py-1">
                    <span>{day}</span>
                    <span className="font-medium">{hours}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="lg:w-1/2 w-full h-80 rounded-2xl overflow-hidden shadow-lg">
             {/* Map Placeholder, using mapLink from data */}
            <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex flex-col items-center justify-center p-6 text-center">
                <FaMapMarkerAlt className="text-4xl text-red-600 mb-4" />
                <p className="mb-4">Lihat lokasi akurat di Google Maps</p>
                <a
                  href={restaurantData.mapLink}
                  target="_blank" rel="noreferrer"
                  className="bg-red-600 text-white px-6 py-2 rounded-full font-bold hover:bg-red-700 transition"
                >
                  Buka Google Maps
                </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-red-500 mb-4">{restaurantData.name}</h2>
          <p className="text-gray-400 mb-6 max-w-md mx-auto">
            Nikmati sensasi ramen lezat dengan harga bersahabat dan pemandangan rooftop terbaik di Cimahi.
          </p>
          <a
            href={createWaLink(`Halo RGC, ${t('footerQuestion')}`)}
            target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transition"
          >
            <FaWhatsapp className="text-xl" /> Hubungi Kami via WA
          </a>
          <p className="text-gray-500 text-sm mt-10">
            &copy; {new Date().getFullYear()} {restaurantData.name}. All rights reserved.
          </p>
        </div>
      </footer>

    </div>
  );
}

export default App;
```

### 3. Konfigurasi Tailwind CSS (`tailwind.config.js`)
Sesuai panduan psikologi warna di dokumen sumber, kita menginjeksi custom color Merah, Kuning, dan Tosca (Teal) ke dalam environment Tailwind.

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        // Red (Appetite stimulation, primary)
        red: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
          950: '#450a0a',
        },
        // Yellow (Happiness, warmth, secondary)
        yellow: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#eab308',
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
          950: '#422006',
        },
        // Tosca/Teal (Dessert accent)
        tosca: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6', // Primary Tosca
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
          950: '#042f2e',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
```

### Setup Tambahan (Sembunyikan Scrollbar di Tabbing):
Tambahkan ini di file `src/index.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer utilities {
  .hide-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .hide-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
}
```
