import React from "react";
import { IoBuild } from "react-icons/io5";
import { RxDimensions } from "react-icons/rx";
import { SiEasyeda } from "react-icons/si";

const categories = [
  {
    title: "Pileli Sineklik",
    description:
      "Katlanabilir yapısıyla özellikle dar alanlar ve balkon kapıları için ideal bir çözümdür. Kullanılmadığında kolayca toplanabilir yapısı sayesinde alan tasarrufu sağlar. Estetik görünümüyle yaşam alanlarını modernleştirirken, aynı zamanda dışarıdan gelen sinek, böcek gibi haşerelere karşı etkili bir koruma sunar. Plise sineklik sistemleri, hem konfor hem de fonksiyonellik arayanlar için mükemmel bir tercihtir.",
    image: "sineklikpile.webp",
  },
  {
    title: "Sürgülü Sineklik",
    description:
      "Geniş açıklıklara sahip sürme kapı ve pencerelerde konforlu kullanım sağlar. Yatay sürgü mekanizması sayesinde kolayca açılıp kapanabilir ve uzun ömürlüdür. Özellikle teras, veranda ve balkon kapılarında tercih edilen bu sistem, dayanıklı yapısı ve estetik görünümüyle iç ve dış mekanlarda şık bir çözüm sunar. Sürgülü sineklik modelleri, maksimum hava akışı ve görünürlük ile yaşam alanlarını ferahlatır.",
    image: "sürgüsineklik.webp",
  },
  {
    title: "Menteşeli Sineklik",
    description:
      "Ekonomik, pratik ve montajı kolay bir sineklik çözümüdür. Genellikle pencere sistemlerinde tercih edilir ve menteşe yapısı sayesinde dışa doğru açılıp kapanabilir. Temizlik ve bakım kolaylığı sunan menteşeli sineklikler, düşük maliyetli olmasının yanı sıra uzun ömürlü kullanım sağlar. Özellikle sık açılıp kapanan pencere ve kapılar için idealdir",
    image: "sineklikmenteşe.webp",
  },
];

export default function SineklikKategoriler() {
  return (
    <section className="py-10 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Hangi Sineklik Size Uygun?</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((item, index) => (
            <div key={index} className="text-center transition-transform duration-300 hover:scale-105 flex flex-col items-center">
              <div className="w-full aspect-[3/4] overflow-hidden rounded-md shadow mb-4 bg-gray-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{item.description}</p>

             
              <button className="mt-auto bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-5 rounded-full shadow transition duration-300">
                <a title="Asde İletişim" href="tel:05447824655">İletişime Geç</a>
              </button>
            </div>
          ))}
        </div>

        {/* Alt ikon açıklamaları */}
        <div className="flex flex-wrap justify-center items-center gap-6 mt-16 max-md:mt-10 text-sm text-gray-600">
          <div className="flex items-center gap-2 transition duration-200 hover:text-orange-500 max-md:text-orange-500">
            <span><IoBuild /></span> Dayanıklı
          </div>
          <div className="flex items-center gap-2 transition duration-200 hover:text-orange-500 max-md:text-orange-500 font-semibold">
            <span><RxDimensions /></span> Estetik
          </div>
          <div className="flex items-center gap-2 transition duration-200 hover:text-orange-500 max-md:text-orange-500">
            <span><SiEasyeda /></span> Kolay Temizlik
          </div>
        </div>
      </div>
    </section>
  );
}
