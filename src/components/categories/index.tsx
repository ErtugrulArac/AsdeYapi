"use client";
import { Inter } from "next/font/google";

// Inter fontunu çağır

import * as React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { GoArrowSwitch } from "react-icons/go";
import Autoplay from "embla-carousel-autoplay"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
const inter = Inter({
    subsets: ["latin"],
    weight: ["400", "600", "700"], // İhtiyacın olan ağırlıklar
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

const KategoriKart = ({ title, imageSrc }: { title: string; imageSrc: string }) => {
    return (
        <div className="flex flex-col items-center justify-center w-36 sm:w-44 md:w-56 lg:w-64 hover:scale-105 transition cursor-pointer">
            <div className="bg-white p-4 rounded-xl shadow-lg">
                <img src={imageSrc} alt={title} className="h-28 sm:h-36 md:h-44 lg:h-52 object-contain" />
            </div>
            <span className="mt-3 text-sm sm:text-base text-white font-semibold text-center">{title}</span>
        </div>
    );
};

export default function KategoriBileseni() {
    const [aktifKategoriId, setAktifKategoriId] = useState("sineklik");

    const kategoriler: Kategori[] = [
        { id: "sineklik", title: "Sineklik", imageSrc: "/images/sineklik.png" },
        { id: "cam-balkon", title: "Cam Balkon", imageSrc: "/images/cam-balkon.png" },
        { id: "pvc", title: "PVC Sistemleri", imageSrc: "/images/pvc.png" },

    ];

    const urunler: Urun[] = [

        { id: "1", title: "Pileli Sineklik", imageSrc: "pilelisinek.webp", kategoriId: "sineklik" },


        { id: "4", title: "Cam Balkon", imageSrc: "cambalkon.webp", kategoriId: "cam-balkon" },
        { id: "5", title: "Merdiven Korkuluk", imageSrc: "merdivenkorkuluk.webp", kategoriId: "cam-balkon" },
        { id: "6", title: "Balkon Korkuluk", imageSrc: "balkonkorkuluk.webp", kategoriId: "cam-balkon" },


        { id: "9", title: "Balkon Kapısı", imageSrc: "balkonkapısı.webp", kategoriId: "pvc" },
        { id: "10", title: "WC Kapısı", imageSrc: "tuvaletkapısı.webp", kategoriId: "pvc" },
        { id: "11", title: "Fransız Pencere ", imageSrc: "fransızikili.webp", kategoriId: "pvc" },
        { id: "12", title: "Antrasit Pencere", imageSrc: "gripencere.webp", kategoriId: "pvc" },
        { id: "13", title: "Beyaz Pencere", imageSrc: "ikilipencere.webp", kategoriId: "pvc" },
        { id: "14", title: "Sürgülü Pencere", imageSrc: "sürgülükapı.webp", kategoriId: "pvc" },
        { id: "15", title: "Beyaz Pencere", imageSrc: "üçlüpencere.webp", kategoriId: "pvc" },
        { id: "16", title: "Altınmeşe Pencere", imageSrc: "ahşappencere.webp", kategoriId: "pvc" },
        { id: "17", title: "Vasistas", imageSrc: "vasistas.webp", kategoriId: "pvc" },



    ];

    const plugin = React.useRef(
        Autoplay({ delay: 1500, stopOnInteraction: true })
    );
    return (
        <section className="py-16 sm:py-20 px-4 bg-[#2C2F33] font-inter relative">
            <div className="text-center mb-10 sm:mb-12">
                <h2 className={`text-2xl sm:text-3xl md:text-4xl  text-white tracking-wide font-black ${inter.className}`}>ÜRÜN KATEGORİLERİ</h2>
                <div className={`mt-3 flex flex-wrap font-semibold justify-center gap-4 sm:gap-6 text-gray-300 text-sm ${inter.className}`}>
                    {kategoriler.map((kategori) => (
                        <span
                            key={kategori.id}
                            className={`pb-1 cursor-pointer transition border-b-2 ${aktifKategoriId === kategori.id ? "text-white border-white" : "border-transparent hover:text-white"
                                }`}
                            onClick={() => setAktifKategoriId(kategori.id)}
                        >
                            {kategori.title}
                        </span>
                    ))}
                </div>
            </div>

            <div className="w-full max-w-6xl mx-auto">
                <Carousel className="relative"
                    plugins={[plugin.current]}

                    onMouseEnter={plugin.current.stop}
                    onMouseLeave={plugin.current.reset}>

                    <CarouselContent className={`-ml-3 md:-ml-4 flex ${urunler.filter((u) => u.kategoriId === aktifKategoriId).length < 4
                        ? "justify-center"
                        : ""
                        }`}>
                        {urunler
                            .filter((urun) => urun.kategoriId === aktifKategoriId)
                            .map((urun) => (
                                <CarouselItem
                                    key={urun.id}
                                    className="pl-3 md:pl-4 basis-[90%] sm:basis-[70%] md:basis-1/3 lg:basis-1/4"
                                >
                                    <div className="p-4 h-full flex flex-col items-center  justify-between">
                                        <img
                                            src={urun.imageSrc}
                                            alt={urun.title}
                                            className="w-full  h-40 sm:h-48 md:h-56 object-contain mb-3"
                                        />
                                        <p className="text-base font-semibold text-gray-200 text-center line-clamp-2">
                                            {urun.title}
                                        </p>
                                    </div>
                                </CarouselItem>
                            ))}
                    </CarouselContent>

                    <div className="hidden md:flex absolute top-1/2 left-0 right-0 justify-between px-2 -translate-y-1/2">
                        <CarouselPrevious className="bg-white/80 hover:bg-white text-black rounded-full shadow" />
                        <CarouselNext className="bg-white/80 hover:bg-white text-black rounded-full shadow" />
                    </div>
                </Carousel>
            </div>

            {/* Mobil swipe göstergesi */}
            <div className="md:hidden mt-6 flex justify-center">
                <div className="animate-bounce text-gray-400 text-2xl">
                    <GoArrowSwitch />
                </div>
            </div>
        </section>
    );
}

// Yukarıdaki bileşen bir sayfada aşağıdaki gibi kullanılabilir:
// <KategoriBileseni />
