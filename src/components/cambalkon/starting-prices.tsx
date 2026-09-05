import { CheckCircle2, MessageCircle } from "lucide-react";
import ConversionLink from "./conversion-link";
import { CAM_BALKON_WHATSAPP_URL } from "./data";

const prices = [
  { name: "8 mm Temperli Katlanır Cam Balkon", price: "3.700" },
  { name: "Isıcamlı Katlanır Cam Balkon", price: "5.600" },
  { name: "Sürme Cam Balkon", price: "5.600" },
] as const;

export default function CamBalkonStartingPrices() {
  return (
    <section
      id="baslangic-fiyatlari"
      aria-labelledby="baslangic-fiyatlari-baslik"
      className="scroll-mt-40 bg-white px-4 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <h2 id="baslangic-fiyatlari-baslik" className="mx-auto max-w-4xl text-center text-3xl font-black text-neutral-950 sm:text-4xl md:text-5xl">
          Üreticiden Cam Balkon Başlangıç Fiyatları
        </h2>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {prices.map((item) => (
            <article key={item.name} className="flex min-w-0 flex-col rounded-3xl border border-black/5 bg-[#f6f3ee] p-6 shadow-sm sm:p-8">
              <h3 className="text-xl font-extrabold leading-7 text-neutral-950">{item.name}</h3>
              <p className="mt-6 text-neutral-950 lg:mt-auto lg:pt-6">
                <span className="text-4xl font-black text-orange-600">{item.price}</span>{" "}
                <span className="whitespace-nowrap text-xl font-bold">TL/m²’den</span>{" "}
                <span className="mt-1 block text-sm text-neutral-600">başlayan fiyatlarla</span>
              </p>
              <p className="mt-5 flex items-center gap-2 border-t border-black/10 pt-5 text-sm font-bold text-neutral-800">
                <CheckCircle2 className="size-5 shrink-0 text-orange-600" aria-hidden="true" />
                Montaj dahil
              </p>
            </article>
          ))}
        </div>
        <div className="mx-auto mt-8 max-w-3xl text-center">
          <p className="text-sm leading-7 text-neutral-600 sm:text-base">
            Fiyatlar montaj dahil başlangıç fiyatlarıdır. Balkonun ölçüsü, seçilen sistem ve
            uygulama koşullarına göre değişebilir. Net fiyat, Bursa içindeki ücretsiz keşif
            ve ölçümden sonra belirlenir.
          </p>
          <ConversionLink
            href={CAM_BALKON_WHATSAPP_URL}
            conversion="cam-balkon-quote-click"
            target="_blank"
            rel="noreferrer"
            className="mt-7 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-orange-600 px-6 py-3 font-bold text-white shadow-lg transition hover:bg-orange-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 sm:w-auto"
          >
            <MessageCircle className="size-5 shrink-0" aria-hidden="true" />
            Ücretsiz Keşif ve Net Fiyat Al
          </ConversionLink>
        </div>
        <p className="mt-10 border-t border-black/10 pt-6 text-center text-sm font-semibold leading-7 text-neutral-700">
          Bursa İçi Ücretsiz Keşif · Aksesuarlarda 2 Yıl Garanti · Ortalama 2 Haftada Üretim ve Montaj
        </p>
      </div>
    </section>
  );
}
