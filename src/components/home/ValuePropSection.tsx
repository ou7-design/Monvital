import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

export const ValuePropSection = () => {
  return (
    <section id="about" className="py-32 bg-surface text-on-surface overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
        <Reveal>
          <div className="relative isolate">
            <div className="relative rounded-xl overflow-hidden aspect-square shadow-2xl scale-100 md:scale-110 -rotate-2 hover:rotate-0 transition-all duration-700">
              <Image
                src="/about.png"
                alt="Doctor walking down a bright clinic hallway"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] md:w-[120%] h-[110%] md:h-[120%] border border-primary/20 rounded-full pointer-events-none -z-10 animate-[spin_60s_linear_infinite]"></div>
          </div>
        </Reveal>

        <div>
          <Reveal delay={0.2}>
            <h2 className="text-4xl md:text-5xl font-extrabold font-headline mb-12 leading-tight">
              Nega aynan <span className="text-hero-gradient">Monvital</span> ?
            </h2>
          </Reveal>
          
          <ul className="space-y-10">
            {[
              {
                icon: "hotel_class",
                title: "Tajribali shifokorlar",
                desc: "Tajribali shifokorlarimiz sizga eng yuqori sifatli tibbiy xizmatni ko'rsatishga tayyor."
              },
              {
                icon: "speed",
                title: "Zamonaviy uskunalar",
                desc: "Eng so'nggi texnologiyalar va uskunalar yordamida biz sizga eng samarali davolash usullarini taklif etamiz."
              },
              {
                icon: "hub",
                title: "Individual yondashuv",
                desc: "Har bir bemorga individual yondashuv asosida davolash rejalari ishlab chiqiladi."
              }
            ].map((item, index) => (
              <Reveal key={index} delay={0.3 + index * 0.1}>
                <li className="flex gap-6 group">
                  <div className="bg-primary/5 p-4 rounded-xl h-fit border border-primary/10">
                    <span className="material-symbols-outlined text-primary">{item.icon}</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold font-headline mb-2">{item.title}</h4>
                    <p className="text-on-surface-variant leading-relaxed">{item.desc}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
