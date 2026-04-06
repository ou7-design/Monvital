import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

export const TestimonialsSection = () => {
  return (
    <section className="py-32 bg-surface-container-low">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <Reveal>
          <div className="bg-surface-container-lowest rounded-2xl p-12 md:p-20 flex flex-col items-center text-center shadow-sm border border-outline-variant/10 hover:shadow-lg transition-shadow duration-500">
            <span 
              className="material-symbols-outlined text-6xl text-primary/20 mb-8 transform -scale-x-100" 
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              format_quote
            </span>
            <p className="text-2xl md:text-3xl font-headline italic leading-relaxed text-on-surface mb-12 max-w-4xl">
              "Monvital doesn't feel like a medical center; it feels like a retreat where you happen to receive the most advanced medical care available today. The staff treated my recovery with incredible dignity."
            </p>
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="w-16 h-16 rounded-full overflow-hidden relative shadow-md">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfP61SQfjlyDAe7x-KTV16LGXnrQ810sUb1UZDJYBdWD9_r5E7jZD0oPVTL9f8IUgVVBslqcF4m1TBEjsmrSSWC2g2IktPdKZ9wpOYS6jaWovDTSDxuXp0aHpism0Fik9gpikfNqTs7fICSGltHnic2Sj_IcvmVroaMjxyliSwFIYDJ2HN8oMJp3HWGlOwrBx5lK_Dee0rzbKOJ9wAQNF81CBQp-f7cZFwEtPZO4XFAh7mduFhd50dWBl34BCxrUQWpZU0g67cFriY"
                  alt="Portrait of Sarah Penhaligon"
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </div>
              <div className="text-center md:text-left">
                <div className="font-bold font-headline text-lg">Sarah Penhaligon</div>
                <div className="text-sm text-on-surface-variant font-medium">Post-Cardiac Recovery Patient</div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
