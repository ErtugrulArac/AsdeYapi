// pages/index.tsx
import React from "react";
import { Manrope, Dela_Gothic_One } from "next/font/google";

const specialGothic = Dela_Gothic_One({ subsets: ["latin"], weight: ["400"] });
const manrope = Manrope({ subsets: ["latin"], weight: ["400", "700", "800"] });

export default function Home() {
  return (
    <main className="min-h-screen bg-white pt-12 gap-12 flex flex-col items-center text-left">
      <h1 className={`${specialGothic.className} text-3xl md:text-5xl font-bold text-center text-[#2E2B16] mb-10`}>
        An online mockup generator for <br className="hidden md:block" /> your design needs
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl  max-md:w-[85%] max-md:m-auto">
        <div className="flex flex-col">
          <img src="kalp.webp" alt="Pillow Icon" className="w-12 h-12 mb-4" />
          <h2 className={`${manrope.className} text-2xl max-md:text-xl font-black mb-2 text-[#2E2B16]`}>Over 1,000 product mockup templates</h2>
          <p className={`${manrope.className}  text-[#585849] max-md:text-sm text-md max-w-xs`}>
            Experiment with a wide range of customizable products to match your design ideas and easily
            find the perfect mockups for your brand.
          </p>
        </div>

        <div className="flex flex-col ">
          <img src="çizgi.webp" alt="Background Icon" className="w-12 h-12 mb-4" />
          <h2 className={`${manrope.className} text-2xl max-md:text-xl font-black mb-2 text-[#2E2B16]`}>Customizable mockup backgrounds</h2>
          <p className={`${manrope.className} text-[#585849] max-md:text-sm text-md max-w-xs`}>
            Some Printify products feature customizable mockup backgrounds, empowering you to adjust
            colors and designs to match your brand. Use this flexibility to create stunning mockups that
            stand out – no complicated software necessary.
          </p>
        </div>

        <div className="flex flex-col">
          <img src="kalp.webp" alt="Check Icon" className="w-12 h-12 mb-4" />
          <h2 className={`${manrope.className} text-2xl max-md:text-xl font-black mb-2 text-[#2E2B16]`}>High-resolution mockups</h2>
          <p className={`${manrope.className} text-[#585849] max-md:text-sm text-md max-w-xs`}>
            Create professional mockups that show your products with lifelike detail, giving them a
            polished look ready for your online store or marketing materials.
          </p>
        </div>
      </div>
    </main>
  );
}