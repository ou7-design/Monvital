import { Reveal } from "@/components/ui/Reveal";

export const StatsSection = () => {
  const stats = [
    { value: "15+", label: "Yillik Tajriba" },
    { value: "40+", label: "Yilgacha tajribali shifokorlar" },
    { value: "1000+", label: "Bemorlar" },
    { value: "10+", label: "Tibbiy yo'nalishlar" },
  ];

  return (
    <section className="bg-surface-container-low py-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {stats.map((stat, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <div className="hover:scale-105 transition-transform duration-300">
                <div className="text-4xl md:text-5xl font-extrabold font-headline text-primary mb-2">{stat.value}</div>
                <div className="text-xs md:text-sm font-label uppercase tracking-widest text-on-surface-variant">{stat.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
