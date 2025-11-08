"use client";
import { Outfit } from "next/font/google";
import * as React from "react";
import { useState } from "react";
import { GoArrowSwitch } from "react-icons/go";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Fonts
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800", "900"],
});

// Types
interface Kategori {
  id: string;
  title: string;
  imageSrc: string;
}

interface Urun {
  id: string;
  title: string;
  imageSrc: string;
  kategoriId: string;
}

// Presentational: Category pill
const KategoriKart = ({ title, imageSrc }: { title: string; imageSrc: string }) => {
  return (
    <div className="flex flex-col items-center justify-center w-36 sm:w-44 md:w-56 lg:w-64 hover:scale-105 transition cursor-pointer">
      <div className="bg-white p-4 rounded-xl shadow-lg">
        {/* Using next/image for performance */}
        <Image src={imageSrc} alt={title} width={220} height={180} className="h-28 sm:h-36 md:h-44 lg:h-52 w-auto object-contain" />
      </div>
      <span className={`mt-3 text-sm sm:text-base text-white font-semibold text-center ${outfit.className}`}>
        {title}
      </span>
    </div>
  );
};

export default function KategoriBileseni() {
  const [aktifKategoriId, setAktifKategoriId] = useState("pvc-tamir");

  // --- TAMİR ODAKLI İÇERİK ---
  const kategoriler: Kategori[] = [
    { id: "pvc-tamir", title: "PVC Tamiri", imageSrc: "/icons/pvc-tamir.png" },
  ];

  const urunler: Urun[] = [
    { id: "ct", title: "Conta Değişimi", imageSrc: "/tamir-conta.webp", kategoriId: "pvc-tamir" },
    { id: "cm", title: "Cam Değişimi", imageSrc: "/tamir-cam.webp", kategoriId: "pvc-tamir" },
    { id: "ay", title: "Kapı & Pencere Ayarı", imageSrc: "/tamir-ayar.webp", kategoriId: "pvc-tamir" },
    { id: "bk", title: "Mevsimlik Bakım", imageSrc: "/tamir-bakim.webp", kategoriId: "pvc-tamir" },
    { id: "kl", title: "Kilit & Barel Değişimi", imageSrc: "/tamir-kilit.webp", kategoriId: "pvc-tamir" },
  ];

  // Autoplay plugin
  const plugin = React.useRef(Autoplay({ delay: 1800, stopOnInteraction: true }));

  const aktifListe = urunler.filter((u) => u.kategoriId === aktifKategoriId);

  return (
    <section className="py-16 sm:py-20 px-4 bg-[#2C2F33] relative">
      <div className="text-center mb-10 sm:mb-12">
        <h2 className={`text-2xl sm:text-3xl md:text-4xl text-white tracking-wide font-black ${outfit.className}`}>
          PVC TAMİR HİZMETLERİ
        </h2>
        <div className={`mt-3 flex flex-wrap font-semibold justify-center gap-4 sm:gap-6 text-gray-300 text-sm ${outfit.className}`}>
          {kategoriler.map((kategori) => (
            <button
              key={kategori.id}
              className={`pb-1 cursor-pointer transition border-b-2 focus:outline-none ${
                aktifKategoriId === kategori.id ? "text-white border-white" : "border-transparent hover:text-white"
              }`}
              onClick={() => setAktifKategoriId(kategori.id)}
              aria-pressed={aktifKategoriId === kategori.id}
            >
              {kategori.title}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="relative w-full max-w-7xl">
          <Carousel
            className="w-full"
            plugins={[plugin.current]}
            onMouseEnter={() => plugin.current?.stop?.()}
            onMouseLeave={() => plugin.current?.reset?.()}
          >
            <CarouselContent className={`-ml-3 md:-ml-4 flex ${aktifListe.length <= 3 ? "md:justify-center" : ""}`}>
              {aktifListe.map((u) => (
                <CarouselItem key={u.id} className="pl-3 md:pl-4 basis-[90%] sm:basis-[70%] md:basis-1/3 lg:basis-1/4">
                  <div className="p-4 h-full flex flex-col items-center justify-between">
                    <Image
                      src={u.imageSrc}
                      alt={u.title}
                      width={600}
                      height={300}
                      className="w-full h-40 sm:h-48 md:h-56 object-contain mb-3"
                    />
                    <p className="text-base font-semibold text-gray-200 text-center line-clamp-2">{u.title}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="hidden md:block">
              <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-black rounded-full shadow" />
              <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-black rounded-full shadow" />
            </div>
          </Carousel>

          <div className="md:hidden mt-6 flex justify-center" aria-hidden>
            <div className="animate-bounce text-gray-400 text-2xl">
              <GoArrowSwitch />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
