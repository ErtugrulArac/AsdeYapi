import {
  Blocks,
  Building2,
  Component,
  Frame,
  Maximize2,
  Palette,
  Ruler,
  Waypoints,
} from "lucide-react";
import ConversionLink from "./conversion-link";

const factors = [
  { label: "Balkonun en ve yükseklik ölçüleri", icon: Ruler },
  { label: "Toplam uygulama alanı", icon: Maximize2 },
  { label: "Katlanır, sürme veya ısıcamlı sistem seçimi", icon: Component },
  { label: "Cam tipi ve sistem özellikleri", icon: Frame },
  { label: "Profil rengi ve tercih edilen detaylar", icon: Palette },
  { label: "Köşe, dönüş ve birleşim sayısı", icon: Waypoints },
  { label: "Mermer, korkuluk, zemin ve montaj koşulları", icon: Blocks },
  { label: "Uygulama alanına erişim ve proje detayları", icon: Building2 },
] as const;

export default function CamBalkonPricingFactors() {
  return (
    <section
      id="fiyat"
      aria-labelledby="fiyat-baslik"
      className="scroll-mt-40 bg-[#f6f3ee] px-4 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="lg:sticky lg:top-40">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.24em] text-orange-600">
              Şeffaf teklif süreci
            </p>
            <h2 id="fiyat-baslik" className="text-3xl font-black text-neutral-950 sm:text-4xl md:text-5xl">
              Cam Balkon Fiyatı Nasıl Belirlenir?
            </h2>
            <p className="mt-6 text-base leading-8 text-neutral-700">
              Cam balkon fiyatı yalnızca bir balkon fotoğrafına bakılarak kesin olarak
              hesaplanamaz. Fotoğraf ön değerlendirmeye yardımcı olabilir; net teklif için
              balkonun ölçüsü, seçilen sistem ve uygulama detayları belirlenmelidir.
            </p>
            <ConversionLink
              href="#teklif"
              conversion="cam-balkon-quote-click"
              className="mt-8 inline-flex min-h-12 items-center justify-center rounded-xl bg-black px-6 py-3 font-bold text-white transition hover:bg-orange-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
            >
              Ölçü ve Teklif İçin İletişime Geç
            </ConversionLink>
          </div>

          <div>
            <div className="grid gap-4 sm:grid-cols-2">
              {factors.map(({ label, icon: Icon }) => (
                <article
                  key={label}
                  className="flex min-h-32 items-start gap-4 rounded-2xl border border-black/5 bg-white p-5 shadow-sm"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-orange-700">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="pt-1 text-base font-bold leading-6 text-neutral-900">{label}</h3>
                </article>
              ))}
            </div>
            <aside className="mt-6 rounded-2xl border-l-4 border-orange-500 bg-black p-6 text-white shadow-xl">
              <p className="text-base font-semibold leading-7">
                Fotoğraf, balkonun genel yapısını anlamamıza yardımcı olur. Kesin fiyat,
                yerinde ölçü ve sistem seçimi sonrasında hazırlanır.
              </p>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
