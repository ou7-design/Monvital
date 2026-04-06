import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-surface-container-low dark:bg-[#191c1e] w-full py-20 mt-0">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-6 md:px-12 max-w-[1440px] mx-auto">
        <div className="col-span-1 md:col-span-1">
          <div className="text-xl font-bold text-on-surface dark:text-surface-bright mb-6">
            Monvital Tibbiyot Markazi
          </div>
          <p className="font-body text-sm leading-relaxed text-on-surface/60 dark:text-surface-bright/60">
            Zamonaviy tibbiyot va yuqori malakali shifokorlar yordamida aniq tashxis qo‘yish hamda samarali davolash xizmatlari
          </p>
        </div>
        <div>
          <div className="text-xs font-label uppercase tracking-widest text-primary mb-8">
            Xizmatlar
          </div>
          <ul className="space-y-4">
            <li><Link href="#services" className="text-on-surface/60 hover:text-tertiary transition-colors text-sm">LOR</Link></li>
            <li><Link href="#services" className="text-on-surface/60 hover:text-tertiary transition-colors text-sm">Kardiologiya</Link></li>
            <li><Link href="#services" className="text-on-surface/60 hover:text-tertiary transition-colors text-sm">Diagnostika</Link></li>
            <li><Link href="#services" className="text-on-surface/60 hover:text-tertiary transition-colors text-sm">Radiologiya</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-xs font-label uppercase tracking-widest text-primary mb-8">
            Ijtimoiy tarmoqlar
          </div>
          <ul className="space-y-4">
            <li><a href="https://www.instagram.com/monvital.uz/" target="_blank" rel="noopener noreferrer" className="text-on-surface/60 hover:text-tertiary transition-colors text-sm">Instagram</a></li>
            <li><a href="https://t.me/monvital_uz" target="_blank" rel="noopener noreferrer" className="text-on-surface/60 hover:text-tertiary transition-colors text-sm">Telegram</a></li>
          </ul>
        </div>
        <div>
          <div className="text-xs font-label uppercase tracking-widest text-primary mb-8">
            Aloqa
          </div>
          <ul className="space-y-4">
            <li><a href="tel:+998555070007" className="text-on-surface/60 hover:text-tertiary transition-colors text-sm">Telefon: +998 55 507 00 07</a></li>
            <li><Link href="#contact" className="text-on-surface/60 hover:text-tertiary transition-colors text-sm">Manzil: Toshkent, Yunusobod</Link></li>
            <li><span className="text-on-surface/60 text-sm">Ish vaqti: 08:00 – 17:00</span></li>
          </ul>
        </div>
      </div>
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 mt-20 pt-10 border-t border-outline-variant/10 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="font-body text-sm leading-relaxed text-on-surface/60 dark:text-surface-bright/60 text-center md:text-left">
          © {new Date().getFullYear()} Monvital Medical Center. Barcha huquqlar himoyalangan.
        </p>
      </div>
    </footer>
  );
};
