import React from "react";
import { Button } from "@/components/ui/button";

const Gecis = (
    { title, subtitle, img }: { title: string; subtitle: string; img: string }
) => {
    return (
        <div className="px-4">
            <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-8 lg:gap-14 text-white">
                {/* Yazı Alanı */}
                <div className="flex flex-col space-y-5 text-center lg:text-left max-w-xl">
                    <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold  leading-snug">
                        {title}
                    </p>

                    <p className="text-sm w-[80%] max-md:text-center max-md:w-full sm:text-base md:text-lg lg:text-xl text-gray-300">
                       
                        {subtitle}

                    </p>

                    <div className="flex justify-center lg:justify-start">
                        <Button className="bg-gradient-to-r from-orange-600 to-orange-500 text-white px-12 py-6 md:text-2xl  rounded-xl font-semibold hover:scale-105 transition cursor-pointer" variant="destructive">
                            Ücretsiz Keşif Talep Et
                        </Button>
                    </div>
                </div>

                {/* Görsel */}
                <img
                    className="w-40 sm:w-72 md:w-80 lg:w-[490px] object-contain shadow-[rgba(0,0,0,0.3)_0px_8px_24px]"
                    src={img}
                    alt="Sineklik Kapı"
                    
                />
            </div>
        </div>
    );
};

export default Gecis;
