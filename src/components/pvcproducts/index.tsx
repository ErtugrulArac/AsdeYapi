"use client";
import { Outfit } from "next/font/google";
import * as React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
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

const inter = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "900", "800"],
});

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

const KategoriKart = ({
  title,
  imageSrc,
}: {
  title: string;
  imageSrc: string;
}) => {
  return (
    <div className="flex flex-col items-center justify-center w-36 sm:w-44 md:w-56 lg:w-64 hover:scale-105 transition cursor-pointer">
      <div className="bg-white p-4 rounded-xl shadow-lg">
        <img
          src={imageSrc}
          alt={title}
          className="h-28 sm:h-36 md:h-44 lg:h-52 object-contain"
        />
      </div>
      <span
        className={`mt-3 text-sm ${inter.className} sm:text-base text-white font-semibold text-center`}
      >
        {title}
      </span>
    </div>
  );
};

export default function KategoriBileseni() {
  const [aktifKategoriId, setAktifKategoriId] = useState("pvc");

  const kategoriler: Kategori[] = [
    { id: "pvc", title: "PVC Kapı & Pencere", imageSrc: "/images/pvc.png" },
  ];

  const urunler: Urun[] = [
    {
      id: "1",
      title: "PVC Pencere",
      imageSrc: "fransızikili.webp",
      kategoriId: "pvc",
    },
    {
      id: "2",
      title: "Sürme Sistem",
      imageSrc: "fransızarka.webp",
      kategoriId: "pvc",
    },
    {
      id: "3",
      title: "PVC Kapı",
      imageSrc: "tuvaletkapısı.webp",
      kategoriId: "pvc",
    },
  ];

  const plugin = React.useRef(Autoplay({ delay: 1500, stopOnInteraction: true }));

  return (
    <section className="py-16 sm:py-20 px-4 bg-[#2C2F33] font-inter relative">
      <div className="text-center mb-10 sm:mb-12">
        <h2
          className={`text-2xl sm:text-3xl md:text-4xl text-white tracking-wide font-black ${inter.className}`}
        >
          PVC KAPI & PENCERE MODELLERİMİZ
        </h2>
        <div
          className={`mt-3 flex flex-wrap font-semibold justify-center gap-4 sm:gap-6 text-gray-300 text-sm ${inter.className}`}
        >
          {kategoriler.map((kategori) => (
            <span
              key={kategori.id}
              className={`pb-1 cursor-pointer transition border-b-2 ${
                aktifKategoriId === kategori.id
                  ? "text-white border-white"
                  : "border-transparent hover:text-white"
              }`}
              onClick={() => setAktifKategoriId(kategori.id)}
            >
              {kategori.title}
            </span>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="relative w-full max-w-7xl">
          <Carousel
            className=" w-full"
            plugins={[plugin.current]}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent
              className={`-ml-3 md:-ml-4 flex ${
                urunler.filter((u) => u.kategoriId === aktifKategoriId).length <=
                3
                  ? "md:justify-center"
                  : ""
              }`}
            >
              {urunler
                .filter((urun) => urun.kategoriId === aktifKategoriId)
                .map((urun) => (
                  <CarouselItem
                    key={urun.id}
                    className="pl-3 md:pl-4 basis-[90%] sm:basis-[70%] md:basis-1/3 lg:basis-1/4"
                  >
                    <div className="p-4 h-full flex flex-col items-center  justify-between">
                      <Image
                        src={`/${urun.imageSrc}`}
                        alt={urun.title}
                        className="w-full h-40 sm:h-48 md:h-56 object-contain mb-3"
                        width={600}
                        height={300}
                      />
                      <p className="text-base font-semibold text-gray-200 text-center line-clamp-2">
                        {urun.title}
                      </p>
                    </div>
                  </CarouselItem>
                ))}
            </CarouselContent>

            <div className="hidden md:block ">
              <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-black rounded-full shadow" />
              <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 z-10  bg-white/80 hover:bg-white text-black rounded-full shadow" />
            </div>
          </Carousel>
          <div className="md:hidden  mt-6 flex justify-center">
            <div className="animate-bounce text-gray-400 text-2xl">
              <GoArrowSwitch />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
