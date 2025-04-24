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
Bursa’da kaliteli sineklik çözümleri mi arıyorsunuz? Asde Yapı, uzun ömürlü, estetik ve fonksiyonel sineklik sistemleriyle yaşam alanlarınızı sinek ve haşerelere karşı koruma altına alıyor.
Pencere ya da kapı fark etmeksizin, her ölçüye ve modele özel üretilen sinekliklerimiz sayesinde yaz aylarının keyfini rahatça çıkarabilirsiniz.

Bursa sineklik sektöründe güvenilirliği ve müşteri memnuniyetini ön planda tutan Asde Yapı, uygun fiyat ve profesyonel montaj hizmetiyle fark yaratıyor.
Ev, ofis, balkon veya cam balkonlar için özel tasarladığımız sistemler ile hem estetik hem konforu bir arada sunuyoruz.
    `,
    list: [
      "PVC ve alüminyum doğramalara tam uyum",
      "Pileli, menteşeli ve sürme sineklik seçenekleri",
      "Kolay temizlenebilir, dayanıklı tül yapısı",
      "Ölçüye özel üretim ve yerinde ücretsiz keşif",
      "Uzman ekip ile profesyonel montaj",
      "Uygun fiyat, yüksek memnuniyet garantisi"
    ],
    image: "sinekliksistemleri.webp"
  },
  ÖRNEKLER: {
    text: "",
    list: [],
    image: "",
    gallery: ["sinek1.webp", "sinek2.webp",]
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
      <h1 className={`${specialGothic.className} text-3xl md:text-5xl font-bold text-center text-gray-100 pb-10`}>Sineklik Sistemleri</h1>
      <div className="max-w-6xl mx-auto">
        {/* {/ Tabs /} */}
        <div className="flex justify-center gap-10 border-b border-gray-500 mb-10 text-sm sm:text-base">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 cursor-pointer tracking-widest font-semibold uppercase transition-colors duration-300 ${activeTab === tab ? "border-b-2 border-white text-white" : "text-gray-400 hover:text-white"
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
                className="rounded-lg w-full md:size-[600px] object-contain"
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