import type { Metadata } from "next";
import Image from "next/image";
import { ArrowDown, Phone } from "lucide-react";
import { Outfit } from "next/font/google";
import Wp from "@/components/wp";
import CamBalkonFaq from "@/components/cambalkon/faq";
import CamBalkonFinalCta from "@/components/cambalkon/final-cta";
import CamBalkonGallery from "@/components/cambalkon/gallery";
import InsulatedGlassSection from "@/components/cambalkon/insulated-glass-section";
import CamBalkonPricingFactors from "@/components/cambalkon/pricing-factors";
import CamBalkonProcess from "@/components/cambalkon/process";
import CamBalkonQuickNav from "@/components/cambalkon/quick-nav";
import CamBalkonStructuredData from "@/components/cambalkon/structured-data";
import CamBalkonSystems from "@/components/cambalkon/systems";
import ConversionLink from "@/components/cambalkon/conversion-link";
import { CONTACT } from "@/lib/contact";

const outfit = Outfit({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Bursa Cam Balkon Sistemleri ve Fiyatları | Asde Yapı",
  description:
    "Bursa’da katlanır, sürme ve ısıcamlı cam balkon sistemleri. Cam balkon fiyatını etkileyen unsurları inceleyin, keşif ve ölçü talep edin.",
  alternates: {
    canonical: "https://asdeyapi.com/cambalkon",
  },
  keywords: [
    "Bursa cam balkon",
    "cam balkon fiyatları",
    "ısıcamlı cam balkon",
    "katlanır cam balkon",
    "sürme cam balkon",
  ],
  openGraph: {
    title: "Bursa Cam Balkon Sistemleri ve Fiyatları | Asde Yapı",
    description:
      "Bursa’da katlanır, sürme ve ısıcamlı cam balkon sistemlerini inceleyin; keşif ve ölçü talep edin.",
    url: "https://asdeyapi.com/cambalkon",
    siteName: "Asde Yapı",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "https://asdeyapi.com/cambalkon-hero.jpg",
        width: 1536,
        height: 1024,
        alt: "Bursa cam balkon sistemleri",
      },
    ],
  },
};

export default function CamBalkonPage() {
  return (
    <main className={`${outfit.className} w-full overflow-x-clip bg-white`}>
      <CamBalkonStructuredData />
      <Wp conversionContext="cam-balkon" />

      <section className="relative flex min-h-[680px] items-center justify-center overflow-hidden px-4 pb-20 pt-36 text-center sm:min-h-[760px]">
        <Image
          src="/cambalkon-hero.jpg"
          alt="Bursa’da cam balkon uygulaması"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black/80" aria-hidden="true" />
        <div className="relative mx-auto max-w-5xl text-white">
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.28em] text-orange-400 sm:text-base">
            Bursa’da ölçüye özel çözümler
          </p>
          <h1 className="text-4xl font-black leading-tight drop-shadow-xl sm:text-5xl md:text-6xl lg:text-7xl">
            Bursa Cam Balkon Sistemleri
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-neutral-200 sm:text-lg sm:leading-8 md:text-xl">
            Katlanır, sürme, temperli ve ısıcamlı cam balkon çözümleri. Doğru sistem ve net
            fiyat için balkonun ölçüsü, kullanım ihtiyacı ve uygulama detayları birlikte
            değerlendirilir.
          </p>
          <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <ConversionLink
              href={CONTACT.tel}
              conversion="cam-balkon-phone-click"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-orange-600 px-7 py-3 font-bold text-white shadow-lg transition hover:bg-orange-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              <Phone className="size-5" aria-hidden="true" />
              Keşif ve Ölçü Talep Et
            </ConversionLink>
            <a
              href="#sistemler"
              className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/60 bg-white/10 px-7 py-3 font-bold text-white backdrop-blur transition hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              Sistemleri İncele
            </a>
          </div>
        </div>
        <a
          href="#sistemler"
          aria-label="Cam balkon sistemlerine ilerle"
          className="absolute bottom-7 left-1/2 flex size-11 -translate-x-1/2 animate-bounce items-center justify-center rounded-full border border-white/40 bg-black/20 text-white backdrop-blur focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
        >
          <ArrowDown className="size-5" aria-hidden="true" />
        </a>
      </section>

      <CamBalkonQuickNav />
      <CamBalkonGallery />
      <CamBalkonSystems />
      <CamBalkonPricingFactors />
      <InsulatedGlassSection />
      <CamBalkonProcess />
      <CamBalkonFaq />
      <CamBalkonFinalCta />
    </main>
  );
}
