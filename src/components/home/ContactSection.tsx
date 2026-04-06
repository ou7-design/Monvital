"use client";

import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

export const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const inquiry = formData.get("inquiry") as string;
    const message = formData.get("message") as string;
    
    const text = `Yangi murojaat:%0A%0AIsm: ${name}%0ATelefon: ${phone}%0AXizmat: ${inquiry}%0AMuammo: ${message}`;
    window.open(`https://t.me/Monvital_clinic?text=${text}`, "_blank");
  };

  return (
    <section id="contact" className="pt-32 pb-16 max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-20">
      <div>
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-extrabold font-headline mb-8 tracking-tight">Biz bilan bog‘laning</h2>
          <p className="text-on-surface-variant mb-12 text-lg">
            Qabulga yozilish yoki savollaringiz bo‘yicha bizga yozing. Operatorlarimiz sizga tez orada javob beradi.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="group">
              <label className="block text-xs font-label uppercase tracking-widest text-on-surface-variant mb-2 group-focus-within:text-primary transition-colors">Ismingizni kiriting</label>
              <input 
                name="name"
                className="w-full border-0 border-b border-outline-variant/30 bg-transparent py-4 px-0 focus:ring-0 focus:border-primary transition-colors placeholder:text-outline-variant outline-none" 
                placeholder="Aziz Azizov" 
                type="text" 
                required
              />
            </div>
            <div className="group">
              <label className="block text-xs font-label uppercase tracking-widest text-on-surface-variant mb-2 group-focus-within:text-primary transition-colors">Telefon raqamingiz</label>
              <input 
                name="phone"
                className="w-full border-0 border-b border-outline-variant/30 bg-transparent py-4 px-0 focus:ring-0 focus:border-primary transition-colors placeholder:text-outline-variant outline-none" 
                placeholder="+998 90 123 45 67" 
                type="tel" 
                required
              />
            </div>
            <div className="group">
              <label className="block text-xs font-label uppercase tracking-widest text-on-surface-variant mb-2 group-focus-within:text-primary transition-colors">Qaysi xizmat kerak?</label>
              <select name="inquiry" className="w-full border-0 border-b border-outline-variant/30 bg-transparent py-4 px-0 focus:ring-0 focus:border-primary transition-colors outline-none text-on-surface appearance-none cursor-pointer">
                <option>LOR</option>
                <option>Kardiologiya</option>
                <option>Nevrologiya</option>
                <option>Pediatriya</option>
                <option>Diagnostika</option>
                <option>Boshqa</option>
              </select>
            </div>
            <div className="group">
              <label className="block text-xs font-label uppercase tracking-widest text-on-surface-variant mb-2 group-focus-within:text-primary transition-colors">Qanday muammo bor?</label>
              <textarea 
                name="message"
                className="w-full border-0 border-b border-outline-variant/30 bg-transparent py-4 px-0 focus:ring-0 focus:border-primary transition-colors h-32 resize-none outline-none placeholder:text-outline-variant" 
                placeholder="Qisqacha yozing (masalan: tomoq og‘rig‘i, bosh aylanishi...)"
                required
              ></textarea>
            </div>
            <button 
              type="submit"
              className="button-primary-gradient text-on-primary px-12 py-5 rounded-xl font-bold font-headline w-full shadow-lg hover:shadow-xl hover:brightness-110 active:brightness-95 transition-all duration-300"
            >
              Yuborish
            </button>
          </form>
        </Reveal>
      </div>

      <div className="h-full min-h-[400px] md:min-h-[500px] rounded-2xl overflow-hidden shadow-2xl relative group">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.9089417193177!2d69.2866525!3d41.3543329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef3086db60e1d%3A0x8ccdfee535197d57!2sMonvital%20medical%20center!5e0!3m2!1sen!2sus!4v1712242000000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0"
          ></iframe>
          
          <a href="https://maps.app.goo.gl/rgnjv3aUxFXMWGQm9" target="_blank" rel="noopener noreferrer" className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10 bg-surface-container-lowest/90 backdrop-blur-md p-6 md:p-8 rounded-xl shadow-2xl border border-surface-container-low hover:bg-surface-container-lowest transition-colors cursor-pointer text-on-surface">
            <div className="flex gap-4 items-start">
              <div className="bg-primary/10 p-3 rounded-full mt-1">
                <span className="material-symbols-outlined text-primary">location_on</span>
              </div>
              <div>
                <h4 className="font-bold font-headline mb-1 text-lg">Monvital Medical Center</h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">Tashkent, Uzbekistan<br/>Tap to open in Google Maps</p>
              </div>
            </div>
          </a>
        </div>
    </section>
  );
};
