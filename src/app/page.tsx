import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { StatsSection } from "@/components/home/StatsSection";
import { ServicesBento } from "@/components/home/ServicesBento";
import { ValuePropSection } from "@/components/home/ValuePropSection";
import { DoctorsSection } from "@/components/home/DoctorsSection";
import { ContactSection } from "@/components/home/ContactSection";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-auto pt-[72px] md:pt-24">
        <HeroSection />
        <StatsSection />
        <ServicesBento />
        <ValuePropSection />
        <DoctorsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
