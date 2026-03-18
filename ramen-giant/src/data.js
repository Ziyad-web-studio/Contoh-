// data.js
export const SITE_DATA = {
  name: "Ramen Giant Cijerah",
  rating: "4.3 (1.165 ulasan)",
  priceRange: "Rp 25.000 - Rp 50.000",
  whatsapp: "6285179605683", // GANTI DENGAN NOMOR WA KLIEN
  location: "Melong, Kota Cimahi, Jawa Barat",
  mapLink: "https://maps.app.goo.gl/omrdXU8GvhQUwGTU9",
  hours: "12.00 - 22.00 (Setiap Hari)",
  seo: ["Ramen Cimahi", "Ramen Halal", "Rooftop Cimahi", "Ramen Murah"]
};

export const MENU = {
  id: {
    categories: [
      { id: 'reguler', label: 'Reguler Ramen' },
      { id: 'bigger', label: 'Bigger' },
      { id: 'kids', label: 'Kids Menu' },
      { id: 'dessert', label: 'Dessert' }
    ],
    items: [
      { id: 1, cat: 'reguler', name: 'Beef Enoki Ramen', price: '35rb', img: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&q=80&w=800' },
      { id: 2, cat: 'dessert', name: 'Ice Durian Creamary', price: '18rb', img: 'https://images.unsplash.com/photo-1505394033343-430c7b132e31?auto=format&fit=crop&q=80&w=800' },
      { id: 3, cat: 'bigger', name: 'Karnivor Ramen', price: '45rb', img: 'https://images.unsplash.com/photo-1591814448473-b46764b8448d?auto=format&fit=crop&q=80&w=800' }
    ]
  },
  en: {
    categories: [
      { id: 'reguler', label: 'Regular Ramen' },
      { id: 'bigger', label: 'Jumbo Size' },
      { id: 'kids', label: 'Kids Meal' },
      { id: 'dessert', label: 'Sweets' }
    ]
  }
};

// App.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const App = () => {
  const [activeTab, setActiveTab] = useState('reguler');
  const [isDark, setIsDark] = useState(false);
  const [lang, setLang] = useState('id');

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) setIsDark(true);
  }, []);

  const getWaLink = (type, itemName = "") => {
    const text = type === 'order' 
      ? `Halo RGC, saya mau pesan ${itemName}...` 
      : `Halo RGC, boleh tanya lokasi tepatnya?`;
    return `https://wa.me/${SITE_DATA.whatsapp}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-white transition-all">
        
        {/* NAV & HERO */}
        <header className="fixed top-0 w-full z-50 bg-red-600 dark:bg-red-900 p-4 flex justify-between items-center shadow-lg">
          <h1 className="font-black text-white uppercase tracking-tighter">RGC Cijerah</h1>
          <div className="flex gap-2">
            <button onClick={() => setLang(lang === 'id' ? 'en' : 'id')} className="bg-white/20 px-2 py-1 rounded text-xs text-white">
              {lang === 'id' ? '🇮🇩' : '🇺🇸'}
            </button>
            <button onClick={() => setIsDark(!isDark)} className="p-2 bg-yellow-400 rounded-full">{isDark ? '☀️' : '🌙'}</button>
          </div>
        </header>

        <section className="pt-24 pb-12 px-6 text-center bg-slate-50 dark:bg-slate-800">
          <motion.h2 initial={{y:20, opacity:0}} animate={{y:0, opacity:1}} className="text-4xl font-extrabold text-red-600 mb-2">
            {lang === 'id' ? 'Selamat Datang di Ramen Giant Cijerah' : 'Welcome to Ramen Giant Cijerah'}
          </motion.h2>
          <p className="text-lg italic opacity-80">"Ramen Halal Terdekat dengan Sensasi Rooftop di Cimahi"</p>
          <div className="mt-4 flex justify-center items-center gap-1 text-yellow-500">
            <span>⭐⭐⭐⭐★</span> <span className="text-slate-400 text-sm">{SITE_DATA.rating}</span>
          </div>
        </section>

        {/* TABBING MENU */}
        <section className="py-12 px-4 container mx-auto">
          <div className="flex overflow-x-auto gap-2 mb-8 justify-center no-scrollbar">
            {MENU[lang].categories.map(cat => (
              <button 
                key={cat.id} 
                onClick={() => setActiveTab(cat.id)}
                className={`px-6 py-2 rounded-full font-bold whitespace-nowrap transition-all ${activeTab === cat.id ? 'bg-red-600 text-white shadow-md scale-105' : 'bg-slate-200 dark:bg-slate-700'}`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <motion.div layout className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <AnimatePresence mode="wait">
              {MENU.id.items.filter(i => i.cat === activeTab).map(item => (
                <motion.div 
                  key={item.id} layout initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}
                  className="bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-xl border dark:border-slate-700"
                >
                  <img src={item.img} className="h-48 w-full object-cover" alt={item.name} />
                  <div className="p-5 flex justify-between items-center">
                    <div>
                      <h4 className="font-bold text-lg">{item.name}</h4>
                      <p className="text-red-600 font-black">{item.price}</p>
                    </div>
                    <a href={getWaLink('order', item.name)} className="bg-green-500 p-3 rounded-full text-white">📞</a>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </section>

        {/* LOKASI & PARKIR */}
        <footer className="bg-slate-100 dark:bg-slate-900 p-8 border-t dark:border-slate-800">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-red-600 mb-4">Lokasi & Parkir</h3>
              <p className="text-sm mb-4">{SITE_DATA.location}</p>
              <div className="bg-yellow-100 dark:bg-yellow-900/30 p-4 rounded-xl text-xs leading-relaxed border-l-4 border-yellow-500">
                <strong>Catatan Parkir:</strong> Tersedia area parkir. Jika membawa mobil, petugas parkir kami yang semangat siap membantu menjaga dan mengatur kendaraan Anda agar aman.
              </div>
            </div>
            <div className="bg-slate-300 dark:bg-slate-700 rounded-2xl h-48 flex items-center justify-center">
              <a href={SITE_DATA.mapLink} className="bg-red-600 text-white px-6 py-2 rounded-full font-bold">Buka Google Maps</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;