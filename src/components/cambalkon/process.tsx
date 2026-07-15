import { ClipboardCheck, Factory, MessagesSquare, Ruler } from "lucide-react";

const steps = [
  {
    title: "İhtiyacın Belirlenmesi",
    description: "Balkonun kullanım amacı ve istenen sistem konuşulur.",
    icon: MessagesSquare,
  },
  {
    title: "Yerinde Ölçü",
    description: "En, yükseklik, köşe, dönüş ve montaj detayları ölçülür.",
    icon: Ruler,
  },
  {
    title: "Sistem ve Teklif",
    description: "Cam, profil, açılım şekli ve fiyat netleştirilir.",
    icon: ClipboardCheck,
  },
  {
    title: "İmalat ve Montaj",
    description: "Onaylanan ölçü ve sisteme göre üretim ve montaj yapılır.",
    icon: Factory,
  },
] as const;

const principles = [
  "Ölçüye özel uygulama",
  "İhtiyaca uygun sistem seçimi",
  "Teklif öncesi detaylı ölçü",
  "İmalat ve montajın birlikte planlanması",
] as const;

export default function CamBalkonProcess() {
  return (
    <>
      <section aria-labelledby="prensipler-baslik" className="bg-[#f6f3ee] px-4 py-14">
        <div className="mx-auto max-w-7xl">
          <h2 id="prensipler-baslik" className="text-center text-2xl font-black text-neutral-950 sm:text-3xl">
            Uygulama Yaklaşımımız
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((principle, index) => (
              <article key={principle} className="rounded-2xl bg-white p-6 shadow-sm">
                <span className="text-sm font-black text-orange-600">0{index + 1}</span>
                <h3 className="mt-3 text-lg font-extrabold leading-6 text-neutral-900">{principle}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="surec"
        aria-labelledby="surec-baslik"
        className="scroll-mt-40 bg-white px-4 py-20 sm:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.24em] text-orange-600">
              Dört adımda uygulama
            </p>
            <h2 id="surec-baslik" className="text-3xl font-black text-neutral-950 sm:text-4xl md:text-5xl">
              Cam Balkon Çalışma Süreci
            </h2>
          </div>

          <ol className="relative grid gap-8 before:absolute before:left-6 before:top-8 before:h-[calc(100%-4rem)] before:w-px before:bg-orange-200 md:grid-cols-4 md:gap-5 md:before:left-[12.5%] md:before:right-[12.5%] md:before:top-7 md:before:h-px md:before:w-auto">
            {steps.map(({ title, description, icon: Icon }, index) => (
              <li key={title} className="relative flex gap-5 md:flex-col md:items-center md:text-center">
                <span className="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full bg-black text-white ring-8 ring-white">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <div className="rounded-2xl border border-black/5 bg-[#f6f3ee] p-5 md:min-h-44 md:w-full">
                  <span className="text-xs font-black uppercase tracking-widest text-orange-600">Adım {index + 1}</span>
                  <h3 className="mt-2 text-lg font-extrabold text-neutral-950">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-neutral-600">{description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
