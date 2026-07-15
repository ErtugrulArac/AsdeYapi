"use client";

import React from "react";
import Image from "next/image";
import Deneme from "@/components/deneme";
import Giftext from "@/components/gıftext";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Manrope, Dela_Gothic_One, Outfit } from "next/font/google";
import Textaw from "@/components/textaw";
import Products from "@/components/sineklikproducts";
import { ChevronDown } from "lucide-react";
import Wp from "@/components/wp/index";

const urbanist = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800", "900"],
});

const specialGothic = Dela_Gothic_One({
  subsets: ["latin"],
  weight: ["400"],
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});

export default function SineklikPage() {
  return (
    <main className="w-full font-sans bg-white">
      <Wp />

      {/* Hero Section */}
      <section className="relative h-[90vh] w-full">
        <Image
          src="/sineklikarka.webp"
          alt="Bursa sineklik sistemleri"
          fill
          className="object-cover brightness-50"
          priority
        />

        <div className="absolute inset-0 flex flex-col gap-6 items-center justify-center text-center px-6">
          <h1
            className={`${urbanist.className} text-4xl md:text-6xl md:w-[55%] font-black uppercase text-white drop-shadow-lg`}
          >
            PİLELİ, MENTEŞELİ VE SABİT SİNEKLİK ÇÖZÜMLERİ
          </h1>

          <p
            className={`${manrope.className} text-sm w-[80%] max-md:text-center max-md:w-full sm:text-base md:text-lg lg:text-xl text-gray-200`}
          >
            Asde Yapı, Bursa’da ev ve iş yerleriniz için ölçüye özel,
            estetik ve dayanıklı sineklik sistemleri sunar.
          </p>

          <div className="flex justify-center">
            <a href="tel:05447824655">
              <Button className="bg-gradient-to-r from-orange-600 to-orange-500 text-white px-12 py-6 md:text-2xl rounded-xl font-semibold hover:scale-105 transition cursor-pointer">
                Hemen Fiyat Al
              </Button>
            </a>
          </div>
        </div>

        <button
          onClick={() => {
            const el = document.getElementById("about-section");
            if (el) {
              const y = el.getBoundingClientRect().top + window.scrollY - 100;
              window.scrollTo({ top: y, behavior: "smooth" });
            }
          }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce text-white"
          aria-label="Aşağı kaydır"
        >
          <ChevronDown size={40} strokeWidth={2.5} />
        </button>
      </section>

      {/* Ürünler */}
      <div id="about-section">
        <Products />
      </div>

      {/* Açıklama Yazıları */}
      <section>
        <Textaw />
      </section>

      {/* Galeri */}
      <section>
        <div className="max-w-7xl mx-auto px-4">
          <p
            className={`${specialGothic.className} text-3xl md:text-5xl font-bold text-center text-[#2E2B16] mb-2`}
          >
            Galerimiz <br className="hidden md:block" />
          </p>

          <p className="text-center text-xs text-gray-600 mb-2">
            Sineklik uygulamalarımızı inceleyin. (Resimlere tıklayarak
            detaylara bakabilirsiniz.)
          </p>

          <section id="galeri" className="py-10">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div className="rounded-xl h-[340px] max-md:h-80 overflow-hidden transform hover:scale-105 transition-transform duration-300">
                  <img
                    src="/ps1.webp"
                    alt="Pileli sineklik uygulaması"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="rounded-xl h-[340px] max-md:h-80 overflow-hidden transform hover:scale-105 transition-transform duration-300">
                  <img
                    src="/ps2.webp"
                    alt="Menteşeli sineklik modeli"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="rounded-xl h-[340px] max-md:h-80 overflow-hidden transform hover:scale-105 transition-transform duration-300">
                  <img
                    src="/ps3.webp"
                    alt="Pencere için özel ölçü sineklik"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="rounded-xl h-[340px] max-md:h-80 overflow-hidden transform hover:scale-105 transition-transform duration-300">
                  <img
                    src="/sornek.webp"
                    alt="Kapı tipi pileli sineklik sistemi"
                    className="w-full h-full object-cover"
                  />
                </div>


              </div>
            </div>
          </section>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-10">
        <div className="flex justify-center">
          <a href="tel:05447824655">
            <Button variant="default">Ücretsiz Keşif Talep Et</Button>
          </a>
        </div>
      </section>

      {/* Neden Asde Yapı */}
      <div className="max-w-7xl mx-auto px-4">
        <Deneme />
      </div>

      {/* Sayılarla Biz */}
      <Giftext />

      {/* Yorumlar */}
      <section className=" bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <p
            className={`${specialGothic.className} text-3xl md:text-5xl font-bold text-center text-white mb-10`}
          >
            Müşteri <br className="hidden md:block" /> Yorumlarımız
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Göksel Yıldırım",
                comment: "Ölçü alımı ve montaj çok temizdi, sineklikler sorunsuz oldu.",
              },
              {
                name: "Nihat Kaya",
                comment: "Pileli sineklik gerçekten kaliteli. Hem şık hem kullanışlı.",
              },
              {
                name: "Ali Koç",
                comment: "Zamanında geldiler, hızlı montaj yaptılar. Memnun kaldık.",
              },
            ].map((item, i) => (
              <Card key={i} className="shadow-md border border-black bg-black">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-orange-400">
                    {"⭐".repeat(5)}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-50 italic">“{item.comment}”</p>
                  <p className="mt-3 font-semibold text-gray-200">– {item.name}</p>
                </CardContent>
              </Card>
            ))}

          </div>

        </div>
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Sol taraf - Görsel */}
              <div className="relative">
                <div className="overflow-hidden rounded-3xl shadow-xl">
                  <img
                    src="/salt.webp"
                    alt="Bursa pileli sineklik uygulaması"
                    className="w-full h-[500px] object-cover"
                  />
                </div>
              </div>

              {/* Sağ taraf - SEO + satış odaklı metin */}
              <div>
                <p className="text-orange-600 font-semibold uppercase tracking-wide mb-3">
                  Bursa Sineklik Sistemleri
                </p>

                <h2 className="text-3xl md:text-5xl font-bold text-[#2E2B16] leading-tight mb-6">
                  Pileli Sineklik Bursa’da <br />
                  Estetik ve Kullanışlı Çözüm
                </h2>

                <p className="text-gray-700 text-base md:text-lg leading-8 mb-5">
                  Asde Yapı olarak Bursa’da pileli sineklik, menteşeli sineklik ve sabit
                  sineklik çözümleri sunuyoruz. Ev, balkon, pencere ve kapılarınız için
                  ölçüye özel üretilen sineklik sistemlerimiz; şık görünüm, rahat kullanım
                  ve uzun ömürlü yapı ile öne çıkar.
                </p>

                <p className="text-gray-700 text-base md:text-lg leading-8 mb-5">
                  Özellikle pileli sineklik modelleri, dar alanlarda kullanım kolaylığı
                  sağlaması ve modern görünümüyle en çok tercih edilen sistemlerden biridir.
                  Bursa sineklik ihtiyaçlarınızda hem estetik hem dayanıklılık arıyorsanız,
                  yaşam alanınıza uygun profesyonel çözümler sunuyoruz.
                </p>

                <p className="text-gray-700 text-base md:text-lg leading-8 mb-8">
                  Sineklik yaptırmadan önce doğru ölçü, kaliteli profil ve temiz montaj çok
                  önemlidir. Asde Yapı, Bursa’da sineklik montajı sürecinde ölçü alımından
                  uygulamaya kadar titiz çalışır. Uygun fiyatlı, kullanışlı ve uzun ömürlü
                  sineklik sistemleri için bizimle iletişime geçebilirsiniz.
                </p>

          

                <a href="tel:05447824655">
                  <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-xl font-semibold transition">
                    Hemen Fiyat Al
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
