import React from "react";
import { Button } from "@/components/ui/button";

const Gecis = () => {
  return (
    <div className="px-4">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-8 lg:gap-14 text-white">
        {/* Yazı Alanı */}
        <div className="flex flex-col space-y-5 text-center lg:text-left max-w-xl">
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold  leading-snug">
            SİNEKLİK <br /> SİSTEMLERİNDE <br /> MODERN ÇÖZÜMLER
          </p>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300">
            Evlerinizde modern sineklik çözümleriyle <br />
            sinekten arındırılmış bir yaşam alanı oluşturun
          </p>

          <div className="flex justify-center lg:justify-start">
            <Button className="bg-gradient-to-r from-red-600 to-red-500 text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition cursor-pointer" variant="destructive">
              Ücretsiz Keşif Talep Et
            </Button>
          </div>
        </div>

        {/* Görsel */}
        <img
          className="w-40 sm:w-72 md:w-80 lg:w-96 object-contain shadow-[rgba(0,0,0,0.3)_0px_8px_24px]"
          src="kapımain.webp"
          alt="Sineklik Kapı"
        />
      </div>
    </div>
  );
};

export default Gecis;
