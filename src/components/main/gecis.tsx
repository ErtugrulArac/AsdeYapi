import React from "react";
import { Button } from "@/components/ui/button";

const Gecis = () => {
  return (
    <div className="px-4">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-8 lg:gap-14 text-white">
        {/* Yazı Alanı */}
        <div className="flex flex-col space-y-5 text-center lg:text-left max-w-xl">
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            SİNEKLİK <br /> SİSTEMLERİNDE <br /> MODERN ÇÖZÜMLER
          </p>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300">
            Evlerinizde modern sineklik çözümleriyle <br />
            sinekten arındırılmış bir yaşam alanı oluşturun
          </p>

          <div className="flex justify-center lg:justify-start">
            <Button className="text-base sm:text-lg px-6 py-3" variant="destructive">
              Ücretsiz Keşif Talep Et
            </Button>
          </div>
        </div>

        {/* Görsel */}
        <img
          className="w-60 sm:w-72 md:w-80 lg:w-96 object-contain"
          src="kapımain.webp"
          alt="Sineklik Kapı"
        />
      </div>
    </div>
  );
};

export default Gecis;
