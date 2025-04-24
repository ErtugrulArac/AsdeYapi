"use client"
import * as React from "react";
import Gecis from "@/components/main/gecis";
import Autoplay from "embla-carousel-autoplay"
import { GoArrowSwitch } from "react-icons/go";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";


const gecisIcerikleri = [
    {
        title: "SİNEKLİK SİSTEMLERİNDE MODERN ÇÖZÜMLER",
        subtitle: "Evlerinizde sineklik çözümleriyle modern yaşam alanları oluşturun",
        img: "sineklik1.webp"
    },
    {
        title: "PENCERELERİNİZ ARTIK DAHA GÜVENLİ",
        subtitle: "Asde Yapı modern Pvc Pencere ve Kapı Sistemleri",
        img: "pencere1.webp"

    },
    {
        title: "CAM BALKON İLE DÖRT MEVSİM KONFOR",
        subtitle: "Asde Yapı Cam Balkon Sistemlerimiz ile Eviniz Her Mevsime Hazır",
        img: "cambalkon1.webp"

    },
    
];


export default function CarouselDemo() {

    const plugin = React.useRef(
        Autoplay({ delay: 1500, stopOnInteraction: true })
    )

    return (
        <div className="bg-gradient-to-r from-[#0D0D0D] to-[#1A1A1A]">
            <div className="pt-36 pb-8 flex flex-col items-center justify-center px-4">
                <div className="relative w-full max-w-7xl">
                    <Carousel className="w-full"

                        plugins={[plugin.current]}

                        onMouseEnter={plugin.current.stop}
                        onMouseLeave={plugin.current.reset}
                    >

                        <CarouselContent>
                            {gecisIcerikleri.map((icerik, index) => (
                                <CarouselItem className="flex items-center justify-center" key={index}>
                                    <div className="p-1">
                                        <Gecis title={icerik.title} subtitle={icerik.subtitle} img={icerik.img} />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>


                        {/* Oklar sadece md ve üstü cihazlarda görünür */}
                        <div className="hidden md:block">
                            <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/80 text-white rounded-full p-2 hover:scale-105 hover:shadow-lg transition" />
                            <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/80 text-white rounded-full p-2 hover:scale-105 hover:shadow-lg transition" />
                        </div>
                    </Carousel>
                </div>

                {/* Mobil swipe göstergesi */}
                <div className="md:hidden mt-6 absolute top-20 left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                    <div className="w-10 h-10 relative">
                        <div className="absolute left-0 top-0 animate-swipe text-gray-400 text-2xl">
                            <GoArrowSwitch />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
