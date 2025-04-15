import * as React from "react";
import Gecis from "@/components/main/gecis";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function CarouselDemo() {
  return (
    <div className="bg-gradient-to-r from-[#0D0D0D] to-[#1A1A1A]">
      <div className="pt-36 pb-8 flex items-center justify-center px-4">
        <div className="relative w-full max-w-7xl">
          <Carousel className="w-full">
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Gecis />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Mobilde gizli, lg ve üzeri görünür */}
            <div className="hidden md:block">
              <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 z-10" />
              <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 z-10" />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
