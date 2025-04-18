// pages/whyus/index.tsx
import React from "react";
import { Manrope, Dela_Gothic_One } from "next/font/google";

const specialGothic = Dela_Gothic_One({ subsets: ["latin"], weight: ["400"] });
const manrope = Manrope({ subsets: ["latin"], weight: ["400", "700"] });

export default function WhyUs() {
  return (
    <main className="bg-white md:p-6 pt-14 flex flex-col items-center">
      <div className="w-full max-w-7xl  grid grid-cols-1 lg:grid-cols-2 md:gap-10 items-center">
        <div className="text-left max-md:pl-6 max-md:pr-6 space-y-10 px-4">
          <h2 className={`${specialGothic.className} text-3xl md:text-4xl font-bold text-[#2E2B16]`}>
            Why Printify rocks?
          </h2>
          <div className={`space-y-6 ${manrope.className}`}>
            <div className="flex gap-4 items-start">
              <span className="text-xl">🔺</span>
              <div>
                <p className="font-black text-lg text-[#2E2B16]">Beginner-friendly</p>
                <p className="text-sm text-[#585849]">Our AI Mockup Generator offers simple design tools to make beautiful custom mockups.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <span className="text-xl">📦</span>
              <div>
                <p className="font-black text-lg text-[#2E2B16]">No order minimums</p>
                <p className="text-sm text-[#585849]">Start creating and selling products without any order restrictions.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <span className="text-xl">🎨</span>
              <div>
                <p className="font-black text-lg text-[#2E2B16]">Quality prints</p>
                <p className="text-sm text-[#585849]">Achieve vibrant, professional-quality prints that spotlight your designs perfectly on the final product.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <span className="text-xl">🚚</span>
              <div>
                <p className="font-black text-lg text-[#2E2B16]">Fast shipping</p>
                <p className="text-sm text-[#585849]">Enjoy quick global delivery, perfect for selling custom products internationally.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <span className="text-xl">🌍</span>
              <div>
                <p className="font-black text-lg text-[#2E2B16]">Connect to every major marketplace</p>
                <p className="text-sm text-[#585849]">Sell your designs across various website builders and eCommerce platforms effortlessly.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center max-md:pt-8 w-full">
          <img
            src="gifcam.gif"
            alt="Smiling man at table"
            className="md:rounded-xl object-cover w-[460] max-md:w-full max-md:h-[600px] h-auto px-0 md:px-4"
          />
        </div>
      </div>
    </main>
  );
}