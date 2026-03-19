import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { DEFAULT_LOCALE, businessData } from './data';

const accentVariants = {
  red: {
    heading: 'text-rgcRed dark:text-rgcYellow',
    chip: 'bg-rgcRed text-white dark:bg-rgcYellow dark:text-slate-900',
    subtle: 'border-rgcRed/30 bg-rgcRed/5 dark:border-rgcYellow/30 dark:bg-rgcYellow/10',
  },
  yellow: {
    heading: 'text-amber-600 dark:text-rgcYellow',
    chip: 'bg-rgcYellow text-slate-900',
    subtle: 'border-rgcYellow/50 bg-rgcCream dark:border-rgcYellow/40 dark:bg-rgcYellow/10',
  },
  teal: {
    heading: 'text-rgcTeal dark:text-rgcTeal',
    chip: 'bg-rgcTeal text-slate-900',
    subtle: 'border-rgcTeal/50 bg-rgcTeal/10 dark:border-rgcTeal/50 dark:bg-rgcTeal/15',
  },
};

const getInitialTheme = () => {
  if (typeof window === 'undefined') return 'light';
  const savedTheme = localStorage.getItem('rgc-theme');
  if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const toWhatsAppUrl = (phone, text) => {
  const base = 'https://api.whatsapp.com/send';
  const params = new URLSearchParams({
    text: text.trim(),
  });

  if (phone) params.set('phone', phone);

  return `${base}?${params.toString()}`;
};

function App() {
  const [locale] = useState(DEFAULT_LOCALE);
  const content = businessData[locale];
  const [activeTab, setActiveTab] = useState(content.menuTabs[0].key);
  const [theme, setTheme] = useState(getInitialTheme);

  const activeMenu = useMemo(
    () => content.menuTabs.find((tab) => tab.key === activeTab) ?? content.menuTabs[0],
    [activeTab, content.menuTabs]
  );

  const accent = accentVariants[activeMenu.accent] ?? accentVariants.red;

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('rgc-theme', theme);
  }, [theme]);

  useEffect(() => {
    document.title = content.seo.title;

    const setMeta = (name, value) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', value);
    };

    setMeta('description', content.seo.description);
    setMeta('keywords', content.seo.keywords);
  }, [content]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors dark:bg-slate-950 dark:bg-night-rooftop dark:text-slate-100">
      <header className="relative isolate overflow-hidden">
        <img
          src={content.hero.image}
          alt="Rooftop view Ramen Giant Cijerah"
          className="h-[68vh] w-full object-cover brightness-[0.58]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />

        <div className="absolute right-4 top-4 z-20">
          <button
            onClick={() => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))}
            className="rounded-full border border-white/60 bg-black/35 px-4 py-2 text-sm font-semibold text-white backdrop-blur hover:bg-black/55"
          >
            {theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </button>
        </div>

        <div className="absolute inset-x-0 bottom-0 z-10 mx-auto w-full max-w-6xl px-4 pb-10 sm:px-6">
          <p className="mb-2 inline-flex rounded-full bg-rgcYellow px-3 py-1 text-xs font-bold text-slate-900">
            {content.brand.ratingText} • {content.brand.priceRange}
          </p>
          <h1 className="max-w-3xl text-3xl font-black leading-tight text-white sm:text-5xl">
            {content.hero.title}
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-slate-200 sm:text-base">{content.hero.subtitle}</p>

          {!content.contact.whatsappPhone && (
            <p className="mt-2 text-xs text-rgcYellow">⚠️ {content.contact.whatsappFallbackLabel}</p>
          )}

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={toWhatsAppUrl(content.contact.whatsappPhone, 'Halo RGC, saya mau reservasi atau pesan menu hari ini')}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-rgcRed px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-red-700"
            >
              {content.hero.ctaPrimary}
            </a>
            <a
              href={content.brand.mapLink}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-white/90 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-white"
            >
              {content.hero.ctaSecondary}
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl space-y-12 px-4 py-10 sm:px-6">
        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft dark:border-slate-800 dark:bg-slate-900">
          <h2 className="text-2xl font-extrabold text-rgcRed dark:text-rgcYellow">
            {content.ui.sectionTitleInfo}: Ramen Cijerah & Restoran Rooftop Cimahi
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
            <strong>{content.brand.name}</strong> berlokasi di <strong>{content.brand.location}</strong>,
            buka setiap hari pukul <strong>12.00 - 22.00</strong> dengan kisaran harga{' '}
            <strong>{content.brand.priceRange}</strong>.
          </p>
          <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">{content.brand.gofoodLabel}</p>
          <p className="mt-2 rounded-lg border border-rgcYellow/40 bg-rgcCream px-3 py-2 text-xs text-slate-800 dark:border-rgcTeal/40 dark:bg-slate-800 dark:text-slate-200">
            🚗 {content.brand.parkingNote}
          </p>
          <div className="mt-4 grid gap-2 text-sm text-slate-700 dark:text-slate-300 sm:grid-cols-2">
            {content.hours.map((hour) => (
              <p key={hour.day}>
                <strong>{hour.day}</strong>: {hour.open} - {hour.close}
              </p>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-extrabold">{content.ui.sectionTitleMenu}</h2>
          <div className="mb-4 flex flex-wrap gap-2">
            {content.menuTabs.map((tab) => {
              const isActive = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                    isActive
                      ? 'bg-rgcRed text-white dark:bg-rgcYellow dark:text-slate-900'
                      : 'bg-slate-200 text-slate-700 hover:bg-slate-300 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.article
              key={activeMenu.key}
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -18, scale: 0.98 }}
              transition={{ duration: 0.32, ease: 'easeOut' }}
              className={`grid gap-4 overflow-hidden rounded-2xl border bg-white p-4 shadow-soft dark:bg-slate-900 md:grid-cols-2 ${accent.subtle}`}
            >
              <img
                src={activeMenu.image}
                alt={`${activeMenu.label} Ramen Giant Cijerah`}
                className="h-56 w-full rounded-xl object-cover"
              />

              <div>
                <h3 className={`text-xl font-extrabold ${accent.heading}`}>
                  {activeMenu.label} • Ramen Cocok Untuk Pelajar
                </h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{activeMenu.description}</p>
                <ul className="mt-3 grid grid-cols-1 gap-2 text-sm sm:grid-cols-2">
                  {activeMenu.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center justify-between rounded-lg border border-slate-200 bg-white/80 px-3 py-2 dark:border-slate-700 dark:bg-slate-900/70"
                    >
                      <span>{item}</span>
                      <a
                        href={toWhatsAppUrl(
                          content.contact.whatsappPhone,
                          `${content.ui.waOrderPrefix} ${item}`
                        )}
                        target="_blank"
                        rel="noreferrer"
                        className="ml-2 text-xs font-bold text-rgcRed hover:underline dark:text-rgcTeal"
                      >
                        Pesan
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          </AnimatePresence>
        </section>

        <section className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
            <h3 className="text-lg font-bold">Rice Extra</h3>
            <ul className="mt-2 list-inside list-disc text-sm text-slate-700 dark:text-slate-300">
              {content.sideMenus.riceExtra.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-rgcTeal/40 bg-rgcTeal/10 p-4 dark:border-rgcTeal/70 dark:bg-rgcTeal/15">
            <h3 className="text-lg font-bold text-rgcTeal">Dessert & Others</h3>
            <ul className="mt-2 grid grid-cols-1 gap-1 text-sm sm:grid-cols-2">
              {content.sideMenus.others.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-extrabold">Testimoni Pelanggan Nyata</h2>
          <div className="grid gap-3 md:grid-cols-2">
            {content.testimonials.map((item) => (
              <blockquote
                key={item.name}
                className="rounded-2xl border border-slate-200 bg-white p-4 text-sm shadow-soft dark:border-slate-800 dark:bg-slate-900"
              >
                <p className="italic">“{item.quote}”</p>
                <footer className="mt-2 font-bold text-rgcRed dark:text-rgcYellow">
                  {item.name} • {'⭐'.repeat(item.stars)}
                </footer>
              </blockquote>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white/80 px-4 py-8 text-sm dark:border-slate-800 dark:bg-slate-950/80">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {content.brand.name} • {content.brand.location}
          </p>
          <a
            href={toWhatsAppUrl(content.contact.whatsappPhone, content.ui.footerWaLocationText)}
            target="_blank"
            rel="noreferrer"
            className={`w-fit rounded-lg px-4 py-2 font-semibold ${accent.chip}`}
          >
            Tanya Lokasi via WhatsApp
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
