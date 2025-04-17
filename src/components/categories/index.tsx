"use client"
import * as React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

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
        <div className="flex flex-col items-center justify-center w-32 sm:w-40 md:w-48 lg:w-52 hover:scale-105 transition cursor-pointer">
            <div className="bg-white p-3 sm:p-4 rounded-lg shadow-md">
                <img src={imageSrc} alt={title} className="h-24 sm:h-28 md:h-32 object-contain" />
            </div>
            <span className="mt-2 text-xs sm:text-sm text-white font-medium text-center">{title}</span>
        </div>
    );
};

export default function KategoriBileseni() {
    const [aktifKategoriId, setAktifKategoriId] = useState("cam-balkon");

    const kategoriler: Kategori[] = [
        { id: "cam-balkon", title: "Cam Balkon", imageSrc: "/images/cam-balkon.png" },
        { id: "pvc", title: "PVC Sistemleri", imageSrc: "/images/pvc.png" },
        { id: "sineklik", title: "Sineklik", imageSrc: "/images/sineklik.png" },
    ];

    const urunler: Urun[] = [
        { id: "1", title: "Cam 1", imageSrc: "pencere1.webp", kategoriId: "cam-balkon" },
        { id: "2", title: "Cam 2", imageSrc: "/images/cam2.png", kategoriId: "cam-balkon" },
        { id: "3", title: "Cam 3", imageSrc: "/images/cam3.png", kategoriId: "cam-balkon" },

        { id: "4", title: "PVC 1", imageSrc: "/images/pvc1.png", kategoriId: "pvc" },
        { id: "5", title: "PVC 2", imageSrc: "/images/pvc2.png", kategoriId: "pvc" },
        { id: "6", title: "PVC 3", imageSrc: "/images/pvc3.png", kategoriId: "pvc" },

        { id: "7", title: "Sineklik 1", imageSrc: "/images/sineklik1.png", kategoriId: "sineklik" },
        { id: "8", title: "Sineklik 2", imageSrc: "/images/sineklik2.png", kategoriId: "sineklik" },
        { id: "9", title: "Sineklik 3", imageSrc: "/images/sineklik3.png", kategoriId: "sineklik" },
    ];

    return (
        <section className="py-16 sm:py-20 px-4 bg-[#2C2F33] font-inter">
            <div className="text-center mb-10 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-wide">ÜRÜN KATEGORİLERİ</h2>
                <div className="mt-3 flex flex-wrap justify-center gap-4 sm:gap-6 text-gray-300 text-sm">
                    {kategoriler.map((kategori) => (
                        <span
                            key={kategori.id}
                            className={`pb-1 cursor-pointer transition border-b-2 ${aktifKategoriId === kategori.id ? "text-white border-white" : "border-transparent hover:text-white"}`}
                            onClick={() => setAktifKategoriId(kategori.id)}
                        >
                            {kategori.title}
                        </span>
                    ))}
                </div>
            </div>

            <div className="w-full max-w-6xl mx-auto">
                <Carousel>
                    <CarouselContent>
                        {urunler
                            .filter((urun) => urun.kategoriId === aktifKategoriId)
                            .map((urun) => (
                                <CarouselItem
                                    key={urun.id}
                                    className="basis-[80%] sm:basis-1/2 md:basis-1/3 lg:basis-1/4 px-2"
                                >
                                    <div className="p-4  rounded-lg flex flex-col items-center">
                                        <img src={urun.imageSrc} alt={urun.title} className="h-24 sm:h-28 md:h-32 object-contain mb-2" />
                                        <p className="text-sm font-medium text-gray-200 text-center">{urun.title}</p>
                                    </div>
                                </CarouselItem>
                            ))}
                    </CarouselContent>
                    <div className="max-md:hidden">
                        <CarouselPrevious />
                        <CarouselNext />
                    </div>
                </Carousel>
            </div>
        </section>
    );
}