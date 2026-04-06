import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

export const ServicesBento = () => {
  return (
    <section id="services" className="py-32 max-w-[1440px] mx-auto px-6 md:px-12">
      <Reveal>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold font-headline tracking-tight">Tibbiy Xizmatlar</h2>
          </div>
          <p className="max-w-md text-on-surface-variant leading-relaxed">
            Monvital Medical Center’da turli yo‘nalishlarda malakali shifokorlar tomonidan sifatli tibbiy xizmatlar ko‘rsatiladi.
          </p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:h-[700px] auto-rows-min md:auto-rows-auto">
        <div className="md:col-span-8 bg-surface-container-lowest rounded-xl p-8 md:p-10 flex flex-col justify-between overflow-hidden relative shadow-lg shadow-surface-tint/5 group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 min-h-[300px]">
          <div className="z-10">
            <span className="material-symbols-outlined text-4xl text-primary mb-6">hearing</span>
            <h3 className="text-3xl font-bold font-headline mb-4">LOR</h3>
            <p className="text-on-surface-variant max-w-sm">Quloq, burun va tomoq kasalliklarini davolash bo'yicha yuqori malakali shifokorlar.</p>
          </div>
          <div className="mt-8 z-10 w-fit">
            <button className="text-primary font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
              Ko'proq o'qish <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
          <span className="absolute -right-4 -bottom-4 text-[12rem] material-symbols-outlined text-primary/5 pointer-events-none select-none group-hover:scale-110 transition-transform duration-500">hearing</span>
        </div>

        {/* Surgery */}
        <div className="md:col-span-4 bg-primary text-on-primary rounded-xl p-8 md:p-10 flex flex-col justify-between shadow-2xl shadow-primary/20 hover:-translate-y-1 transition-transform duration-300 min-h-[300px]">
          <div>
            <span className="material-symbols-outlined text-4xl text-on-primary mb-6">local_hospital</span>
            <h3 className="text-2xl font-bold font-headline mb-4 leading-tight">Jarrohlik va statsionar davolash</h3>
            <p className="text-on-primary/70">Zamonaviy jarrohlik usullari va qulay statsionar sharoitlar.</p>
          </div>
          <button className="mt-8 border border-on-primary/30 w-fit px-6 py-3 rounded-xl font-bold hover:bg-on-primary hover:text-primary transition-colors active:scale-95 text-sm">
            Bo'limni ko'rish
          </button>
        </div>

        {/* Radiology */}
        <div className="md:col-span-4 bg-surface-container-low rounded-xl p-8 md:p-10 flex flex-col justify-between hover:bg-surface-container transition-colors duration-300 min-h-[250px]">
          <div>
            <span className="material-symbols-outlined text-4xl text-primary mb-6">radiology</span>
            <h3 className="text-2xl font-bold font-headline mb-4">Tibbiy radiologiya</h3>
            <p className="text-on-surface-variant">Ichki a’zolarni tekshirish uchun zamonaviy radiologik xizmatlar.</p>
          </div>
          <span className="material-symbols-outlined self-end text-outline-variant hover:text-primary cursor-pointer transition-colors">arrow_circle_right</span>
        </div>

        {/* Diagnostics */}
        <div className="md:col-span-8 bg-surface-container-lowest rounded-xl p-8 md:p-10 flex items-center justify-between shadow-lg shadow-surface-tint/5 border border-surface-container-low hover:shadow-xl hover:-translate-y-1 transition-all duration-300 min-h-[250px] group">
          <div className="max-w-md">
            <span className="material-symbols-outlined text-4xl text-primary mb-6">biotech</span>
            <h3 className="text-3xl font-bold font-headline mb-4">Laboratoriya diagnostikasi</h3>
            <p className="text-on-surface-variant">Tahlillar va laborator tekshiruvlar asosida aniq tashxis.</p>
          </div>
          <div className="hidden md:flex w-48 h-48 rounded-full bg-surface-container-low items-center justify-center group-hover:scale-105 transition-transform duration-500">
            <span className="material-symbols-outlined text-6xl text-primary/20">science</span>
          </div>
        </div>
      </div>
    </section>
  );
};
