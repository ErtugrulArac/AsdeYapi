import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Wp from "@/components/wp/index"
import Script from "next/script";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const GA_ID = "G-CLH0267G16"
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Asde Yapı - Bursa PVC, Cam Balkon ve Sineklik Sistemleri",
  description: "Asde Yapı olarak Bursa'da sineklik, cam balkon ve PVC sistemlerinde modern ve kaliteli çözümler sunuyoruz. Hızlı montaj, dayanıklı malzeme ve müşteri memnuniyeti ile fark yaratıyoruz.",

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
      <head>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}', {
              page_path: window.location.pathname,
            });
            gtag('config', 'AW-17029946954');
          `}
        </Script>
      </head>
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
