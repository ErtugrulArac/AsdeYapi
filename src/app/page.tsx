import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import PremiumHome from "@/components/home/premium-home";
import Wp from "@/components/wp/index";

const outfit = Outfit({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Bursa Pergola, Giyotin Cam ve Cam Balkon Sistemleri | Asde Yapı",
  description:
    "Bursa’da motorlu tenteli pergola, bioklimatik pergola, motorlu giyotin cam ve cam balkon sistemleri. Villa, kafe ve ticari projeler için ücretsiz keşif alın.",
  alternates: {
    canonical: "https://asdeyapi.com/",
  },
  keywords: [
    "Bursa pergola",
    "bioklimatik pergola Bursa",
    "motorlu giyotin cam",
    "Bursa cam balkon",
    "motorlu tenteli pergola",
  ],
  openGraph: {
    title: "Bursa Pergola, Giyotin Cam ve Cam Balkon Sistemleri | Asde Yapı",
    description:
      "Villa, kafe, restoran ve ticari projeler için ölçüye özel pergola, giyotin cam ve cam balkon çözümleri.",
    url: "https://asdeyapi.com/",
    siteName: "Asde Yapı",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "/images/home/hero-bioklimatik-pergola.webp",
        width: 1376,
        height: 768,
        alt: "Asde Yapı bioklimatik pergola uygulaması",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bursa Pergola, Giyotin Cam ve Cam Balkon Sistemleri | Asde Yapı",
    description:
      "Ölçüye özel pergola, giyotin cam ve cam balkon sistemleri için ücretsiz keşif alın.",
    images: ["/images/home/hero-bioklimatik-pergola.webp"],
  },
};

export default function Home() {
  return (
    <main className={outfit.className}>
      <Wp />
      <PremiumHome />
    </main>
  );
}
