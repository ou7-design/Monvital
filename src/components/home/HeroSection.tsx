import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

export const HeroSection = () => {
  return (
    <section className="relative px-6 md:px-12 py-12 md:py-20 pb-32 max-w-[1440px] mx-auto flex flex-col md:flex-row items-center gap-16">
      <div className="w-full md:w-1/2 z-10">
        <Reveal>
          <h1 className="text-5xl md:text-6xl font-extrabold font-headline leading-[1.3] mb-6 tracking-tighter">
            Zamonaviy <span className="text-hero-gradient">Tibbiyot,</span><br/> Tajribali <span className="text-hero-gradient">Shifokorlar.</span>
          </h1>
        </Reveal>
        <Reveal delay={0.4}>
          <p className="text-xl text-on-surface-variant leading-relaxed mb-12 max-w-lg">
            Zamonaviy uskunalar va yuqori malakali shifokorlar yordamida aniq tashxis qo‘yish hamda samarali davolash xizmatlari
          </p>
        </Reveal>
        <Reveal delay={0.6}>
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <a
              href="tel:+998555070007"
              className="button-primary-gradient w-full sm:w-auto text-on-primary px-10 py-5 rounded-xl font-bold font-headline shadow-lg hover:shadow-xl hover:brightness-110 active:brightness-95 transition-all duration-300 text-center"
            >
              Qabulga Yozilish
            </a>
            <a
              href="#services"
              className="bg-transparent w-full sm:w-auto border border-outline-variant/30 text-primary px-10 py-5 rounded-xl font-bold font-headline hover:bg-surface-container-low transition-all duration-300 text-center"
            >
              Xizmatlarni ko'rish
            </a>
          </div>
        </Reveal>
      </div>

      <div className="w-full md:w-1/2 relative mt-16 md:mt-0">
        <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <Reveal delay={0.3}>
          <div className="relative rounded-full overflow-hidden aspect-[4/5] shadow-2xl shadow-surface-tint/10 border-[16px] border-surface-container-lowest">
            <Image
              src="/hero.png"
              alt="Modern high-end medical facility interior"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </Reveal>

        <Reveal delay={0.7}>
          <div className="absolute -bottom-8 -left-2 md:-left-8 bg-surface-container-lowest p-6 md:p-8 rounded-xl shadow-xl max-w-[280px] md:max-w-xs border border-surface-container-low hover:-translate-y-2 transition-transform duration-300">
            <div className="flex items-center gap-3 mb-2">
              <span className="material-symbols-outlined text-primary">verified_user</span>
              <span className="font-headline font-bold text-primary">ISO 9001 Certified</span>
            </div>
            <p className="text-sm text-on-surface-variant">Uncompromising standards in medical safety and patient hospitality.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
