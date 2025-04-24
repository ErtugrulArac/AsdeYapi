import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Wp from "@/components/wp/index"


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Asde Yapı - Bursa PVC, Cam Balkon ve Sineklik Sistemleri",
  description: "Asde Yapı olarak Bursa'da sineklik, cam balkon ve PVC sistemlerinde modern ve kaliteli çözümler sunuyoruz. Hızlı montaj, dayanıklı malzeme ve müşteri memnuniyeti ile fark yaratıyoruz.",
  keywords: [
    "Asde Yapı",
    "PVC sistemleri",
    "Cam balkon Bursa",
    "Sineklik montajı",
    "Modern yapı çözümleri",
    "Alüminyum pencere sinekliği",
    "Uygun fiyat cam balkon"
  ],
  authors: [{ name: "Asde Yapı", url: "https://asdeyapi.com" }],
  robots: "index, follow",
  openGraph: {
    title: "Asde Yapı - Bursa PVC, Cam Balkon ve Sineklik Sistemleri",
    description: "Bursa'da profesyonel cam balkon, PVC pencere ve sineklik çözümleri. Hızlı montaj ve uygun fiyatlarla Asde Yapı farkını keşfedin.",
    url: "https://asdeyapi.com",
    siteName: "Asde Yapı",
    images: [
      {
        url: "asdelogosiyah.webp",
        width: 1200,
        height: 630,
        alt: "Asde Yapı Bursa - Sineklik Cam Balkon PVC",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Wp />
        <Footer />


      </body>
    </html>
  );
}
