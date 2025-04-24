// components/ProductTabs.tsx
"use client";

import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Dela_Gothic_One } from "next/font/google";
const specialGothic = Dela_Gothic_One({ subsets: ["latin"], weight: ["400"] });


const tabs = ["AÇIKLAMA", "ÖRNEKLER"] as const;
type TabKey = typeof tabs[number];

interface TabContent {
  text: string;
  list: string[];
  image: string;
  gallery?: string[];
}

const content: Record<TabKey, TabContent> = {
  AÇIKLAMA: {
    text: `
  Cam Balkon ve Korkuluk Sistemleri
Manzaranız kapanmasın, konforunuz eksilmesin! Asde Yapı’nın modern cam balkon ve korkuluk sistemleriyle yaşam alanlarınızı daha kullanışlı ve güvenli hale getirin.

Bursa’da cam balkon çözümlerinde uzman olan Asde Yapı, estetik görünüm, yalıtım ve sağlamlıkla yaşam alanlarınıza değer katar.
Katlanır, sürgülü ya da sabit sistem seçenekleriyle balkonunuzu dört mevsim kullanışlı hale getirirken; şık ve dayanıklı alüminyum veya cam korkuluklarla güvenliğinizi de sağlıyoruz.

Ev, ofis, teras veya iş yeri fark etmeksizin her alana özel ölçü ve montaj çözümleriyle fark yaratıyoruz.
    `,
    list: [
      "Temperli güvenlik camı kullanımı",
      "Alüminyum ve cam korkuluk alternatifleri",
      "Rüzgâr, toz, yağmur ve ses yalıtımı",
      "Paslanmaz, uzun ömürlü malzeme",
      "Estetik görünüm ve modern tasarım",
      
    ],
    image: "cambalkonsistem.webp"
  },
  ÖRNEKLER: {
    text: "",
    list: [],
    image: "",
    gallery: ["sineklikmontaj.jpg", "penceremontaj.jpg", "sineklikmontaj.jpg", "penceremontaj.jpg", "sineklikmontaj.jpg", "penceremontaj.jpg"]
  }
};

export default function ProductTabs() {
  const [activeTab, setActiveTab] = useState<TabKey>("AÇIKLAMA");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (img: string) => {
    setSelectedImage(img);
    setIsOpen(true);
  };

  return (
    <section className="bg-[#1F3B2C] text-white py-16 px-6 w-full md:h-[850px]">
      <h1 className={`${specialGothic.className} text-3xl md:text-5xl font-bold text-center text-gray-100 pb-10`}>Cam Balkon Sistemleri</h1>
      <div className="max-w-6xl mx-auto">
        {/* {/ Tabs /} */}
        <div className="flex justify-center gap-10 border-b border-gray-500 mb-10 text-sm sm:text-base">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 cursor-pointer tracking-widest font-semibold uppercase transition-colors duration-300 ${
                activeTab === tab ? "border-b-2 border-white text-white" : "text-gray-400 hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* {/ Content /} */}
        {activeTab === "AÇIKLAMA" ? (
          <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-8 items-start">
            <div>
              <p className="whitespace-pre-line leading-relaxed text-sm md:text-base">
                {content[activeTab].text}
              </p>
              {content[activeTab].list.length > 0 && (
                <ul className="mt-6 list-disc list-inside space-y-1 text-green-200">
                  {content[activeTab].list.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              )}
            </div>

            <div className="w-full">
              <img
                src={content[activeTab].image}
                alt="Product visual"
                className="rounded-lg w-full object-contain"
              />
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {content["ÖRNEKLER"].gallery?.map((img, index) => (
              <button key={index} onClick={() => handleImageClick(img)}>
                <img src={img} alt="örnek" className="rounded-lg  size-[280px] object-cover cursor-pointer" />
              </button>
            ))}

            {/* {/ Popup /} */}
            <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="fixed z-50 inset-0 flex items-center justify-center">
              <div className="fixed inset-0 bg-black/70" aria-hidden="true" />
              <Dialog.Panel className="relative z-50 max-w-3xl w-full p-4">
                <img src={selectedImage || ""} alt="selected" className="w-full h-auto rounded-lg shadow-lg" />
              </Dialog.Panel>
            </Dialog>
          </div>
        )}
      </div>
    </section>
  );
}