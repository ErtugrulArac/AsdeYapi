"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Deneme from "@/components/deneme";
import Giftext from "@/components/gıftext";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Manrope, Dela_Gothic_One } from "next/font/google";
import { Outfit } from "next/font/google"
import Textaw from "@/components/textaw";
import Products from "@/components/cambalkonproducts";
import { ChevronDown } from "lucide-react";
import Wp from "@/components/wp/index";

const urbanist = Outfit({ subsets: ["latin"], weight: ["300", "400", "600", "700", "900", "800"] })

const specialGothic = Dela_Gothic_One({ subsets: ["latin"], weight: ["400"] });
const manrope = Manrope({ subsets: ["latin"], weight: ["400", "700", "800"] });

export default function CamBalkonPage() {
  return (
    <main className="w-full font-sans bg-white ">
              <Wp />
      
      {/* Hero Section */}
      <section className="relative h-[90vh] w-full">
        <Image
          src="/cambalkon-hero.jpg"
          alt="Cam Balkon Bursa"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 flex flex-col gap-6 items-center justify-center text-center px-6">
          <h1 className={`${urbanist.className} text-4xl md:text-6xl md:w-[40%] font-black uppercase text-white drop-shadow-lg`}>
            CAM BALKONLA DÖRT MEVSİM KEYİF
          </h1>
          <p className={`text-sm w-[80%] max-md:text-center max-md:w-full sm:text-base md:text-lg lg:text-xl text-gray-300`}>
            Asde Yapı dayanıklı, estetik ve garantili cam balkon çözümleri sunar.
          </p>
          <div className="flex justify-center lg:justify-start">
            <a href="tel:05447824655">
              <Button className="bg-gradient-to-r from-orange-600 to-orange-500 text-white px-12 py-6 md:text-2xl  rounded-xl font-semibold hover:scale-105 transition cursor-pointer" variant="destructive">
                Hemen Fiyat Al
              </Button>
            </a>
          </div>
        </div>

        {/* Aşağı kaydır ikonu */}
        <button
          onClick={() => {
            const el = document.getElementById("about-section");
            if (el) {
              const y = el.getBoundingClientRect().top + window.scrollY - 100; // 100px offset
              window.scrollTo({ top: y, behavior: "smooth" });
            }
          }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce text-white"
        >
          <ChevronDown size={40} strokeWidth={2.5} />
        </button>

      </section>

      {/* Ürünler */}
      <div id="about-section">
        <Products />
      </div>


      {/* Yazılar */}

      <section>
        <Textaw />
      </section>


      {/* Galery */}
      {/* galeri kısmı değişecek */}

      <section>
        <div className="max-w-7xl mx-auto px-4  ">
          <h1 className={`${specialGothic.className} text-3xl md:text-5xl font-bold text-center text-[#2E2B16] mb-2`}>
            Galerimiz <br className="hidden md:block" />
          </h1>
          <p className="text-center text-xs text-gray-600 mb-2">Cam balkon projelerimizi keşfedin. (Resimlere tıklayarak inceleyebilirsiniz.)</p>
          <section id="galeri" className="py-10 ">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div className="rounded-xl h-[340px] max-md:h-80 overflow-hidden transform hover:scale-105 transition-transform duration-300">
                  <img
                    src="gal1.webp"
                    alt="[Cam korkuluk]"
                    className="w-full h-auto object-contain"
                  />
                </div>
                <div className="rounded-xl h-[340px] max-md:h-80 overflow-hidden  transform hover:scale-105 transition-transform duration-300">
                  <img
                    src="gal2.webp"
                    alt="[Bursa ısıcamlı cam balkon]"
                    className="w-full h-auto object-contain"
                  />
                </div>
                <div className="rounded-xl h-[340px] max-md:h-80 overflow-hidden transform hover:scale-105 transition-transform duration-300">
                  <img
                    src="gal3.webp"
                    alt="[Profesyonel cam balkon ekibini gösteren bir fotoğraf]"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="rounded-xl h-[340px] max-md:h-80 overflow-hidden transform hover:scale-105 transition-transform duration-300">
                  <img
                    src="gal4.webp"
                    alt="[Deniz manzaralı cam balkon]"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="rounded-xl h-[340px] max-md:h-80 overflow-hidden transform hover:scale-105 transition-transform duration-300">
                  <img
                    src="gal5.webp"
                    alt="[Kış bahçesi]"
                    className="w-full h-auto object-cover"
                  />
                </div>

              </div>
            </div>
          </section>

        </div>
      </section>

      {/* CTA button */}

      <section>
        <div className="flex justify-center ">
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





      {/* Referanslar */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className={`${specialGothic.className} text-3xl md:text-5xl font-bold text-center text-[white] mb-10`}>
            Müşteri <br className="hidden md:block" /> Yorumlarımız
          </h1>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Göksel Yıldırım",
                comment: "Kaliteli ve güvenilir hizmet aldık. Teşekkürler!",
              },
              {
                name: "Nihat Kaya",
                comment: "Zamanında teslimat, mükemmel işçilik.",
              },
              {
                name: "Ali Koç",
                comment: "Kesinlikle tavsiye ederim.",
              },
            ].map((item, i) => (
              <Card key={i} className="shadow-md border border-black bg-black">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-orange-400">
                    {"⭐".repeat(5)}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-50 italic">"{item.comment}"</p>
                  <p className="mt-3 font-semibold text-gray-200">– {item.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>




    </main>
  );
}
