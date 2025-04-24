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
PVC Pencere ve Kapı Sistemleri
Isı ve ses yalıtımında maksimum performans, uzun ömürlü kullanım ve estetik görünüm…  

  Asde Yapı ile hepsi bir arada!
Bursa’da PVC pencere ve kapı sistemleri denince akla gelen ilk isim olan Asde Yapı, modern teknoloji ile üretilen, enerji tasarrufu sağlayan ve çevre dostu sistemlerle evinizi koruma altına alır.

Her yapıya özel ölçü ve model seçenekleri, kaliteli işçilik ve profesyonel montajla hem şıklık hem dayanıklılık sunuyoruz.
    `,
        list: [
            "Isı ve ses yalıtımı sağlayan yüksek kaliteli PVC profiller",
            "Çeşitli açılım seçenekleri (çift açılım, sürme, vasistas vb.)",
            "Renk ve model çeşitliliği (beyaz, antrasit, ahşap desenli vb.)",
            "Kolay temizlenebilir, bakım gerektirmeyen yüzeylern",
            "Profesyonel ölçü alma ve montaj hizmeti",
            "Uygun Fiyat, uzun ömürlü kullanım garantisi"
        ],
        image: "fransızarka.webp"
    },
    ÖRNEKLER: {
        text: "",
        list: [],
        image: "",
        gallery: ["pvc1.webp", "pvc2.webp", "pvc3.webp",]
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
        <section id="pvc" className="bg-white scroll-mt-[100px] text-black py-16 px-6 w-full md:h-[890px] id">
            <h1 className={`${specialGothic.className} text-3xl md:text-5xl font-bold text-center text-gray-950 pb-10`}>Pvc Pencere Kapı Sistemleri </h1>
            <div className="max-w-6xl mx-auto">
                {/* {/ Tabs /} */}
                <div className="flex justify-center gap-10 border-b border-gray-800 mb-10 text-sm sm:text-base">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`pb-2 cursor-pointer tracking-widest font-semibold uppercase transition-colors duration-300 ${activeTab === tab ? "border-b-2 border-black text-gray-900" : "text-gray-950 hover:black"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* {/ Content /} */}
                {activeTab === "AÇIKLAMA" ? (



                    <div className="flex flex-col md:grid md:grid-cols-2 gap-8 items-start">

                        <div className="w-full">
                            <img
                                src={content[activeTab].image}
                                alt="Product visual"
                                className="rounded-lg w-full object-contain"
                            />
                        </div>
                        <div>
                            <p className="whitespace-pre-line leading-relaxed text-sm md:text-base">
                                {content[activeTab].text}
                            </p>
                            {content[activeTab].list.length > 0 && (
                                <ul className="mt-6 list-disc list-inside space-y-1 text-green-800">
                                    {content[activeTab].list.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            )}
                            <div className="flex pt-16 flex-col gap-4">


                                <a href="tel:05447824655">
                                    <button className="bg-[#ff7a00] hover:bg-[#ff7a00] text-white cursor-pointer font-semibold py-2 px-5 rounded-md transition-all">
                                        Hemen İletişime Geç
                                    </button>
                                    <p className="text-xs ">Butona tıklayın, ücretsiz keşif fırsatını kaçırmayın.</p>
                                </a>

                            </div>
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