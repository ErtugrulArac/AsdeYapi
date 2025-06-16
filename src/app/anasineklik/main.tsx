import React from "react";
import { FaCheck } from "react-icons/fa";
import Link from "next/link";

export default function SineklikAvantajlari() {
    const images = [
        "avantaj1.webp",
        "avantaj2.webp",
        "avantaj3.webp",
        "avantaj4.webp",
    ];

    return (
        <section className="py-20 max-md:pt-7 max-md:py-8  bg-white text-gray-800">
            <div className="max-w-7xl  mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Sol içerik */}
                <div>
                    <h2 className="text-2xl w-[90%] md:text-4xl font-bold mb-6 leading-snug">
                        Neden Asde Yapı<br />Sineklik Sistemlerini<br />Tercih Etmelisiniz?
                    </h2>

                    <ul className="space-y-4 text-xl max-md:text-sm mb-8">
                        <li className="flex items-start gap-3">
                            <FaCheck className="text-orange-500 mt-1" />
                            <span>Yüksek kaliteli alüminyum ve tül malzeme</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <FaCheck className="text-orange-500 mt-1" />
                            <span>Yerinde kesit ve ölçü hizmeti</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <FaCheck className="text-orange-500 mt-1" />
                            <span>Uygun fiyat, garantili montaj</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <FaCheck className="text-orange-500 mt-1" />
                            <span>Renk uyumu ve estetik görünüm</span>
                        </li>
                    </ul>

                    <Link
                         href="https://wa.me/905447824655" target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-orange-500 text-white px-6 py-3 max-md:px-3 max-md:py-1 rounded-md hover:bg-orange-800 transition"
                    >
                        Daha Fazla Bilgi Al
                        <span className="text-xl">≡</span>
                    </Link>
                </div>

                {/* Sağ görseller */}
                <div className="grid grid-cols-2 gap-4">
                    {images.map((src, i) => (
                        <div key={i} className="aspect-[4/3] rounded-xl overflow-hidden shadow">
                            <img
                                src={src}
                                alt={`sineklik avantaj ${i + 1}`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
