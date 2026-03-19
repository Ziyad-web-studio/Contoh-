// --- FILE: tailwind.config.js ---
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Mendukung Dark & Light mode otomatis/manual [cite: 158]
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'rgc-red': '#E63946', // Merah pemicu selera makan 
        'rgc-yellow': '#FFB703', // Kuning kehangatan & optimisme 
        'rgc-turquoise': '#2A9D8F', // Aksentuasi khusus section Dessert 
        'rgc-dark': '#121212',
      },
      fontFamily: {
        sans: ['Inter', 'SF Pro Display', 'sans-serif'], // Tipografi ala Apple
      },
    },
  },
  plugins: [],
}

// --- FILE: src/data.js ---
// Data operasional terpusat agar mudah diupdate [cite: 163]
export const restaurantData = {
  name: "Ramen Giant Cijerah", // [cite: 2]
  rating: 4.3, // [cite: 3]
  reviewsCount: 1165, // [cite: 3]
  priceRange: "Rp. 25.000 - Rp. 50.000", // [cite: 3]
  location: {
    address: "Melong, Kota Cimahi, Jawa Barat", // [cite: 4]
    googleMaps: "https://maps.app.goo.gl/omrdXU8GvhQUwGTU9", // [cite: 5]
    parkingNote: "Parkir mobil di pinggir jalan, namun tersedia petugas parkir yang sigap membantu mengatur posisi kendaraan." // [cite: 109]
  },
  hours: "12.00 - 22.00 (Setiap Hari)", // [cite: 6-13]
  contact: {
    whatsapp: "628123456789", // Placeholder
    gofood: "#" // [cite: 14]
  },
  menu: {
    regular: [
      { id: 1, name: "Nivaton Ramen", price: "25k" }, // [cite: 47]
      { id: 2, name: "Beef Enoki Ramen", price: "32k" }, // [cite: 45]
      { id: 3, name: "Plankia Ramen", price: "28k" }, // [cite: 48]
      { id: 4, name: "Chicken Furai Ramen", price: "30k" }, // [cite: 38]
      { id: 5, name: "Tofu Ramen", price: "25k" }, // [cite: 35]
    ],
    bigger: [
      { id: 6, name: "Karnivor Ramen", price: "45k" }, // [cite: 63]
      { id: 7, name: "Sea World Ramen", price: "48k" }, // [cite: 61]
      { id: 8, name: "Kompilasi Ramen", price: "50k" }, // [cite: 62]
    ],
    yamien: [
      { id: 9, name: "Yamien Seoul", price: "28k" }, // [cite: 65]
      { id: 10, name: "Yamien Beef", price: "30k" }, // [cite: 66]
    ],
    kids: [
      { id: 11, name: "Kids Ramen 1", price: "20k" }, // [cite: 23]
      { id: 12, name: "Kids Udon 1", price: "20k" }, // [cite: 29]
    ],
    dessert: [
      { id: 13, name: "Youghurt Lechy", price: "18k" }, // [cite: 17]
      { id: 14, name: "Ice Durian Creamary", price: "22k" }, // [cite: 21]
      { id: 15, name: "Lechy Fizz", price: "15k" }, // [cite: 98]
    ]
  },
  testimonials: [
    { name: "Hanii Pahh", star: 5, text: "Tempatnya nyaman, bersih, luas, ada 2 lantai. Rasa enak gurih, gak hambar." }, // [cite: 103-106]
    { name: "Mergie Decillita", star: 5, text: "Anak-anak sangat suka. Sekarang ada rooftop-nya jadi bisa makan sambil menikmati angin segar." }, // [cite: 107-109]
    { name: "Redi Sulaeman", star: 5, text: "Harganya terjangkau, tapi rasanya gak kalah dibanding ramen di mall mewah." } // [cite: 110-113]
  ]
};

// --- FILE: src/App.js ---
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Animasi premium 
import { restaurantData } from './data';

const App = () => {
  const [activeTab, setActiveTab] = useState('regular');
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle Dark Mode Otomatis/Manual [cite: 158]
  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) setIsDarkMode(true);
  }, []);

  const getWAUrl = (type, itemName = "") => {
    const base = `https://wa.me/${restaurantData.contact.whatsapp}?text=`;
    if (type === 'order') return `${base}${encodeURIComponent(`Halo RGC, saya mau pesan ${itemName}`)}`; // [cite: 171]
    return `${base}${encodeURIComponent("Halo RGC, tanya info lokasi dong")}`; // [cite: 177]
  };

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <main className="min-h-screen bg-white dark:bg-rgc-dark text-slate-900 dark:text-white transition-colors duration-500">
        
        {/* SEO Injection: H1 Header Hidden for Accessibility but Crawlable [cite: 137, 220] */}
        <h1 className="sr-only">Ramen Giant Cijerah - Ramen Cimahi Halal Terdekat & Restoran Rooftop Cimahi</h1>

        {/* HERO SECTION - Rooftop Experience [cite: 189] */}
        <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&q=80&w=1600" 
            alt="Ramen Giant Cijerah Rooftop View"
            className="absolute inset-0 w-full h-full object-cover brightness-50"
          />
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            className="relative z-10 text-center px-4"
          >
            <span className="bg-rgc-red text-white px-4 py-1 rounded-full text-sm font-bold mb-4 inline-block tracking-widest">
              RATING {restaurantData.rating} ⭐ [cite: 3]
            </span>
            <h2 className="text-5xl md:text-7xl font-black mb-4 uppercase">Ramen Giant <span className="text-rgc-yellow text-outline">Cijerah</span></h2>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Menikmati ramen porsi besar dengan sensasi rooftop angin segar di Kota Cimahi. [cite: 109, 118]
            </p>
            <div className="flex gap-4 justify-center">
              <a href={getWAUrl('footer')} className="bg-rgc-red hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold transition-transform active:scale-95">
                Pesan Sekarang [cite: 175]
              </a>
              <button onClick={() => setIsDarkMode(!isDarkMode)} className="bg-white/10 backdrop-blur-md border border-white/20 px-6 py-4 rounded-xl font-bold">
                {isDarkMode ? '🌙 Dark' : '☀️ Light'}
              </button>
            </div>
          </motion.div>
        </section>

        {/* INTERACTIVE MENU TABS  */}
        <section className="py-20 max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-2">Daftar Menu Kami</h3>
            <p className="text-slate-500 dark:text-slate-400">Ramen porsi kenyang, harga ramah di kantong pelajar. [cite: 120]</p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-10 sticky top-4 z-40 bg-white/80 dark:bg-rgc-dark/80 backdrop-blur-lg p-2 rounded-2xl border border-slate-200 dark:border-white/10">
            {Object.keys(restaurantData.menu).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                  activeTab === cat 
                  ? (cat === 'dessert' ? 'bg-rgc-turquoise text-white' : 'bg-rgc-yellow text-black') 
                  : 'hover:bg-slate-100 dark:hover:bg-white/5'
                }`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Menu Items Grid [cite: 138] */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {restaurantData.menu[activeTab].map((item) => (
                <div key={item.id} className="group p-6 rounded-3xl bg-slate-50 dark:bg-white/5 border border-transparent hover:border-rgc-yellow transition-all">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-xl font-bold group-hover:text-rgc-yellow transition-colors">{item.name}</h4>
                    <span className="text-rgc-red font-black tracking-tighter">{item.price}</span>
                  </div>
                  <button 
                    onClick={() => window.open(getWAUrl('order', item.name))}
                    className="w-full py-2 bg-white dark:bg-white/10 rounded-xl text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    Pilih Menu Ini [cite: 171]
                  </button>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </section>

        {/* LOCAL SEO & PARKING INFO [cite: 165, 211] */}
        <section className="bg-slate-100 dark:bg-white/5 py-20 px-4">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Lokasi Strategis di Cimahi [cite: 112]</h3>
              <p className="mb-4 leading-relaxed">{restaurantData.location.address}</p>
              <div className="p-4 bg-rgc-yellow/20 border-l-4 border-rgc-yellow rounded-r-xl mb-6">
                <p className="text-sm font-medium italic">"Note: {restaurantData.location.parkingNote}"</p> [cite: 109]
              </div>
              <div className="space-y-2 text-sm opacity-80">
                <p>⏰ Buka: {restaurantData.hours}</p> [cite: 6]
                <p>💰 Harga: {restaurantData.priceRange}</p> [cite: 3]
              </div>
            </div>
            <div className="h-64 rounded-3xl overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all">
              <iframe 
                title="Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126748.56347862248!2d107.5451!3d-6.89!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNTMnMjQuMCJTIDEwN8KwMzInNDIuNCJF!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
                className="w-full h-full border-0"
              [cite_start]/> [cite: 167]
            </div>
          </div>
        </section>

        {/* TESTIMONIALS [cite: 184] */}
        <section className="py-20 px-4 overflow-hidden">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-center text-3xl font-bold mb-16 underline decoration-rgc-red underline-offset-8">Apa Kata Mereka?</h3>
            <div className="flex flex-nowrap gap-6 overflow-x-auto pb-8 scrollbar-hide">
              {restaurantData.testimonials.map((testi, i) => (
                <div key={i} className="min-w-[300px] md:min-w-[400px] p-8 rounded-[40px] bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-xl">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testi.star)].map((_, s) => <span key={s} className="text-rgc-yellow">★</span>)}
                  </div>
                  <p className="text-lg italic mb-6 leading-relaxed">"{testi.text}"</p>
                  <p className="font-bold text-rgc-red">— {testi.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FOOTER - CTA [cite: 166, 175] */}
        <footer className="py-10 border-t border-slate-200 dark:border-white/10 text-center px-4">
          <p className="font-bold text-xl mb-6">Ramen Giant Cijerah</p>
          <div className="flex justify-center gap-8 mb-8 text-sm opacity-60">
            <a href="#menu" className="hover:text-rgc-red">MENU</a>
            <a href="#lokasi" className="hover:text-rgc-red">LOKASI</a>
            <a href="#reservasi" className="hover:text-rgc-red">KONTAK</a>
          </div>
          <p className="text-xs opacity-40 italic mb-4">© 2026 Ramen Giant Cijerah. Ramen Murah Cimahi & Ramen Anak Cimahi.</p>
          <a href={getWAUrl('footer')} className="inline-block px-6 py-2 bg-slate-200 dark:bg-white/10 rounded-full text-xs font-bold hover:bg-rgc-red hover:text-white transition-colors">
            Tanya Info Lokasi & Promo [cite: 195]
          </a>
        </footer>

      </main>
    </div>
  );
};

export default App;
