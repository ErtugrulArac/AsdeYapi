// pages/index.tsx
import React from "react";
import { Manrope, Dela_Gothic_One } from "next/font/google";
import Image from "next/image";

const specialGothic = Dela_Gothic_One({ subsets: ["latin"], weight: ["400"] });
const manrope = Manrope({ subsets: ["latin"], weight: ["400", "700", "800"] });

export default function Home() {
  return (
    <main className="  pt-12 pb-12 gap-12 flex flex-col items-center  text-left">
      <h3 className={`${specialGothic.className} text-3xl md:text-5xl font-bold text-center text-[#2E2B16] mb-10`}>
        Neden Asde Yapı'yı  <br className="hidden md:block" /> Tercih Etmelisin
      </h3>

      <div className="grid grid-cols-1 gap-10  md:grid-cols-3 max-w-6xl  max-md:w-[85%] max-md:m-auto">
        <div className="flex flex-col">
          <Image width={48} height={48} src="/kalp.webp" alt="Pillow Icon" className="w-12 h-12 mb-4" />
          <h4 className={`${manrope.className} text-2xl max-md:text-xl font-black mb-2 text-[#2E2B16]`}>1000+ Tamamlanmış Montajla Sahadayız</h4>
          <p className={`${manrope.className}  text-[#585849] max-md:text-sm text-md max-w-xs`}>
          Asde Yapı olarak bugüne kadar 1000’den fazla montajı başarıyla tamamladık.
          Sahip olduğumuz saha deneyimi sayesinde her yapıya en uygun çözümleri sunuyoruz
          </p>
        </div>

        <div className="flex flex-col ">
          <Image width={48} height={48} src="/çizgi.webp" alt="Background Icon" className="w-12 h-12 mb-4" />
          <h4 className={`${manrope.className} text-2xl max-md:text-xl font-black mb-2 text-[#2E2B16]`}>Dayanıklı ve Kaliteli Malzemeler</h4>
          <p className={`${manrope.className} text-[#585849] max-md:text-sm text-md max-w-xs`}>
            Yalnızca uzun ömürlü ve dayanıklı profiller, aksesuarlar ve camlar kullanıyor; sağlamlık konusunda taviz vermiyoruz.
          </p>
        </div>

        <div className="flex flex-col">
          <Image width={48} height={48} src="/kalp.webp" alt="Check Icon" className="w-12 h-12 mb-4" />
          <h4 className={`${manrope.className} text-2xl max-md:text-xl font-black mb-2 text-[#2E2B16]`}>Uygun Fiyat, Şeffaf Teklif</h4>
          <p className={`${manrope.className} text-[#585849] max-md:text-sm text-md max-w-xs`}>
            Gizli masraf yok. İhtiyacınıza özel en uygun fiyat teklifini sunuyor, iş bitiminde sürprizle karşılaşmamanız için her detayı şeffaf şekilde paylaşıyoruz.
          </p>
        </div>
      </div>
    </main>
  );
}