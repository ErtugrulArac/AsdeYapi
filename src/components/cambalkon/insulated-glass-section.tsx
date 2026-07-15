import { Check, Info } from "lucide-react";
import ConversionLink from "./conversion-link";
import { CAM_BALKON_WHATSAPP_URL } from "./data";

const comparison = [
  {
    label: "Cam yapısı",
    single: "Tek katmanlı cam yapısı",
    insulated: "Birden fazla cam katmanından oluşan ısıcam yapısı",
  },
  {
    label: "Kullanım beklentisi",
    single: "Temel kapatma ve dış ortam etkilerini azaltma beklentisi",
    insulated: "Mevsim geçişlerinde daha yüksek kullanım konforu beklentisi",
  },
  {
    label: "Konfor seviyesi",
    single: "Standart kullanım konforu",
    insulated: "Tek cama göre daha yüksek konfor sağlayabilir",
  },
  {
    label: "Sistem ağırlığı ve uygunluk",
    single: "Görece daha hafif yapı; proje yine yerinde incelenir",
    insulated: "Görece daha ağır yapı; proje uygunluğu özellikle değerlendirilir",
  },
  {
    label: "Göreceli fiyat seviyesi",
    single: "Genellikle daha erişilebilir başlangıç seviyesi",
    insulated: "Cam ve sistem yapısı nedeniyle genellikle daha yüksek seviye",
  },
] as const;

const points = [
  "Tek camlı sisteme göre kullanım konforuna daha fazla katkı sağlayabilir.",
  "Dört mevsim kullanım beklentisi olan balkonlarda değerlendirilebilir.",
  "Cam ve profil sistemi bir bütün olarak seçilmelidir.",
  "Cephe, mevcut yapı ve birleşim detayları performansı etkileyebilir.",
] as const;

export default function InsulatedGlassSection() {
  return (
    <section
      id="isicamli"
      aria-labelledby="isicamli-baslik"
      className="scroll-mt-40 bg-black px-4 py-20 text-white sm:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.24em] text-orange-400">
              Konfor beklentisini doğru değerlendirin
            </p>
            <h2 id="isicamli-baslik" className="text-3xl font-black sm:text-4xl md:text-5xl">
              Isıcamlı Cam Balkon Nedir?
            </h2>
            <p className="mt-6 text-base leading-8 text-neutral-300">
              Isıcamlı cam balkon, birden fazla cam katmanından oluşan cam yapısının uygun
              profil ve hareket sistemiyle birlikte kullanıldığı çözümdür. Sistem seçimi
              yalnızca cama göre değil, balkonun bütünü değerlendirilerek yapılır.
            </p>
            <ul className="mt-8 space-y-4">
              {points.map((point) => (
                <li key={point} className="flex gap-3 text-sm leading-6 text-neutral-200 sm:text-base">
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-orange-500 text-black">
                    <Check className="size-4" aria-hidden="true" />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
            <aside className="mt-8 flex gap-4 rounded-2xl border border-orange-400/30 bg-orange-400/10 p-5">
              <Info className="mt-1 size-5 shrink-0 text-orange-400" aria-hidden="true" />
              <p className="text-sm leading-7 text-neutral-200">
                Isıcamlı sistemler tek camlı sistemlere göre daha yüksek kullanım konforu
                sağlayabilir. Ancak cam balkon, tek başına kapalı bir odanın duvar ve pencere
                yalıtımıyla aynı sonucu garanti etmez. Performans; balkonun cephesi, birleşim
                detayları ve mevcut yapıya göre değişebilir.
              </p>
            </aside>
            <ConversionLink
              href={CAM_BALKON_WHATSAPP_URL}
              conversion="cam-balkon-quote-click"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex min-h-12 items-center justify-center rounded-xl bg-orange-600 px-6 py-3 font-bold text-white transition hover:bg-orange-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              Isıcamlı Sistem İçin Keşif Talep Et
            </ConversionLink>
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#171717] shadow-2xl">
            <div className="grid grid-cols-[0.8fr_1fr_1fr] border-b border-white/10 bg-white/5 text-sm font-bold sm:text-base">
              <div className="p-4 text-neutral-400 sm:p-5">Karşılaştırma</div>
              <div className="border-l border-white/10 p-4 sm:p-5">Tek Camlı</div>
              <div className="border-l border-white/10 bg-orange-500/10 p-4 text-orange-300 sm:p-5">Isıcamlı</div>
            </div>
            {comparison.map((row) => (
              <div
                key={row.label}
                className="grid grid-cols-[0.8fr_1fr_1fr] border-b border-white/10 text-xs leading-5 last:border-b-0 sm:text-sm sm:leading-6"
              >
                <h3 className="p-4 font-bold text-neutral-200 sm:p-5">{row.label}</h3>
                <p className="border-l border-white/10 p-4 text-neutral-400 sm:p-5">{row.single}</p>
                <p className="border-l border-white/10 bg-orange-500/5 p-4 text-neutral-200 sm:p-5">{row.insulated}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
