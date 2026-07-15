import Image from "next/image";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import ConversionLink from "./conversion-link";
import { CAM_BALKON_SYSTEMS } from "./data";

export default function CamBalkonSystems() {
  return (
    <section
      id="sistemler"
      aria-labelledby="sistemler-baslik"
      className="scroll-mt-40 bg-[#272a2e] px-4 py-20 text-white sm:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.24em] text-orange-400">
            Sistemi ihtiyaca göre seçin
          </p>
          <h2 id="sistemler-baslik" className="text-3xl font-black sm:text-4xl md:text-5xl">
            Cam Balkon Sistemleri
          </h2>
          <p className="mt-5 text-base leading-7 text-neutral-300 sm:text-lg">
            Katlanır, sürme, ısıcamlı ve giyotin seçenekleri; balkonun ölçüsü,
            kullanım amacı ve mevcut yapıyla birlikte değerlendirilir.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {CAM_BALKON_SYSTEMS.map((system) => (
            <article
              key={system.name}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-black/30 shadow-xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-white/5">
                <Image
                  src={system.image}
                  alt={system.alt}
                  fill
                  sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 25vw"
                  className="object-contain p-4 transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-extrabold text-white">{system.name}</h3>
                <p className="mt-3 text-sm leading-6 text-neutral-300">{system.description}</p>
                <div className="mt-5 space-y-3 border-t border-white/10 pt-5 text-sm leading-6 text-neutral-200">
                  <p>
                    <span className="font-bold text-orange-400">Kimler için?</span>{" "}
                    {system.suitableFor}
                  </p>
                  <p className="flex gap-2">
                    <CheckCircle2 className="mt-1 size-4 shrink-0 text-orange-400" aria-hidden="true" />
                    <span>{system.advantage}</span>
                  </p>
                </div>
                <ConversionLink
                  href="#teklif"
                  conversion="cam-balkon-quote-click"
                  className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-orange-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-orange-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900"
                  aria-label={`${system.name} için bilgi ve teklif al`}
                >
                  Bilgi ve Teklif Al
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </ConversionLink>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
