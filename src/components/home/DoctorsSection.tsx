import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
export const DoctorsSection = () => {
  const baseImages = [
    "/doctors/main-doctor.jpeg",
    "/doctors/doctor2.jpeg",
    "/doctors/doctor3.jpeg",
    "/doctors/doctorr.jpeg",
    "/doctors/doctor5.jpeg",
    "/doctors/doctor6.jpeg",
    "/doctors/doctor7.jpeg",
    "/doctors/doctor8.jpeg",
    "/doctors/doctor9.jpeg",
    "/doctors/doctor10.jpeg",
    "/doctors/doctor11.jpeg",
    "/doctors/doctor12.jpeg",
    "/doctors/doctor13.jpeg",
    "/doctors/doctor14.jpeg",
    "/doctors/doctor15.jpeg",
    "/doctors/doctor16.jpeg"
  ];

  const doctorsData = [
    { name: "Ilyasov Doniyor X.", title: "LOR shifokori | 25+yillik tajriba" },
    { name: "Axmedov Sayfulla S.", title: "LOR shifokori | 40+yillik tajriba" },
    { name: "Axmedov Laziz L.", title: "LOR shifokori | 15+yillik tajriba" },
    { name: "Nurmuxammedova Nodira A.", title: "Terapevt-Kardiolog | 25+yillik tajriba" },
    { name: "To'xtapulatov Alisher T.", title: "Travmatolog-Ortoped | 7+yillik tajriba" },
    { name: "Rahmatov Azim A.", title: "LOR shifokori" },
    { name: "Gulturayeva Shaxnoza A.", title: "Pediatr Shifokori | 30+yillik tajriba" },
    { name: "Muxamedjanova Xurshida Q.", title: "Shifokor-Laborant | 5+yillik tajriba" },
    { name: "Mirsoatova Manzura Sh.", title: "Ginekolog | 20+yillik tajriba" },
    { name: "Axrorov Usmonxo'ja F.", title: "Rentgen-Laborant | 9+yillik tajriba" },
    { name: "Qurbonov Abdulloh R.", title: "Xirurg-Proktolog |10+yillik tajriba" },
    { name: "Abidova Barno A.", title: "Ultratovush Diagnostikasi Shifokori | 20+yillik tajriba" },
    { name: "Abduraxmanova Iroda N.", title: "Ginekolog | 30+yillik tajriba" },
    { name: "Abdullayeva Zilola Z.", title: "Shifokor-Endokrinolog | 8+yillik tajriba" },
    { name: "Xoshimov O'tkir O'.", title: "Anastazeolog-Reanimatolog | 15+yillik tajriba" },
    { name: "Sa'dullayev Farhod F.", title: "Dermatovenerolog va Urolog | 20+yillik tajriba" },
  ];

  const doctors = doctorsData.map((doc, i) => ({
    ...doc,
    image: baseImages[i],
    alt: `Professional portrait of ${doc.name}`
  }));

  return (
    <section id="specialists" className="py-32 max-w-[1440px] mx-auto px-6 md:px-12">
      <Reveal>
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold font-headline mb-6 tracking-tight">Bizning Shifokorlar</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Yuqori malakali shifokorlar va tajribali mutaxassislar
          </p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {doctors.map((doctor, index) => (
          <Reveal key={index} delay={(index % 4) * 0.1}>
            <div className="h-full">
              <div className="relative overflow-hidden rounded-xl h-full aspect-[4/5] shadow-lg shadow-surface-tint/5">
                <Image
                  src={doctor.image}
                  alt={doctor.alt}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 via-black/30 to-transparent">
                  <div className="text-white font-headline font-bold text-lg mb-0.5">{doctor.name}</div>
                  <div className="text-white/75 text-sm font-medium">{doctor.title}</div>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};
