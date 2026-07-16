"use client";

import * as React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ConversionLink from "./conversion-link";
import { CAM_BALKON_SYSTEMS } from "./data";

export default function CamBalkonSystems() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const autoplay = React.useRef(
    Autoplay({
      delay: 3600,
      playOnInit: false,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );

  React.useEffect(() => {
    if (!api) return;

    const updateSelectedIndex = () => setSelectedIndex(api.selectedScrollSnap());
    updateSelectedIndex();
    api.on("select", updateSelectedIndex);
    api.on("reInit", updateSelectedIndex);

    const motionQuery = window.matchMedia(
      "(max-width: 767px) and (prefers-reduced-motion: no-preference)"
    );
    const updateAutoplay = () => {
      if (motionQuery.matches) autoplay.current.play();
      else autoplay.current.stop();
    };

    updateAutoplay();
    motionQuery.addEventListener("change", updateAutoplay);

    return () => {
      api.off("select", updateSelectedIndex);
      api.off("reInit", updateSelectedIndex);
      motionQuery.removeEventListener("change", updateAutoplay);
      autoplay.current.stop();
    };
  }, [api]);

  return (
    <section
      id="sistemler"
      aria-labelledby="sistemler-baslik"
      className="scroll-mt-40 overflow-hidden bg-[#272a2e] px-4 py-20 text-white sm:py-24"
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

        <Carousel
          setApi={setApi}
          plugins={[autoplay.current]}
          opts={{
            align: "start",
            loop: true,
            slidesToScroll: 1,
            breakpoints: {
              "(min-width: 768px)": { active: false },
            },
          }}
          aria-label="Cam balkon sistemleri"
          className="mx-auto w-full"
        >
          <CarouselContent className="md:ml-0 md:grid md:grid-cols-2 md:gap-6 xl:grid-cols-4">
            {CAM_BALKON_SYSTEMS.map((system, index) => (
              <CarouselItem
                key={system.name}
                className="flex basis-[88%] sm:basis-[60%] md:basis-auto md:pl-0"
                aria-label={`${index + 1} / ${CAM_BALKON_SYSTEMS.length}`}
              >
                <article className="group flex h-full w-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-black/30 shadow-xl">
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-white/5">
                    <Image
                      src={system.image}
                      alt={system.alt}
                      fill
                      sizes="(max-width: 639px) 88vw, (max-width: 767px) 60vw, (max-width: 1279px) 50vw, 25vw"
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
                        <CheckCircle2
                          className="mt-1 size-4 shrink-0 text-orange-400"
                          aria-hidden="true"
                        />
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
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious
            className="left-2 z-20 border-white/20 bg-black/75 text-white shadow-lg hover:bg-orange-600 hover:text-white md:hidden"
            aria-label="Önceki cam balkon sistemi"
          />
          <CarouselNext
            className="right-2 z-20 border-white/20 bg-black/75 text-white shadow-lg hover:bg-orange-600 hover:text-white md:hidden"
            aria-label="Sonraki cam balkon sistemi"
          />
        </Carousel>

        <div className="mt-7 flex flex-col items-center gap-3 md:hidden">
          <div className="flex items-center gap-2" aria-label={`${selectedIndex + 1}. sistem gösteriliyor`}>
            {CAM_BALKON_SYSTEMS.map((system, index) => (
              <button
                key={system.name}
                type="button"
                onClick={() => api?.scrollTo(index)}
                aria-label={`${system.name} sistemini göster`}
                aria-current={selectedIndex === index ? "true" : undefined}
                className={`h-2.5 rounded-full transition-all ${
                  selectedIndex === index
                    ? "w-8 bg-orange-500"
                    : "w-2.5 bg-white/30 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
          <p className="text-center text-xs font-medium tracking-wide text-neutral-400">
            Otomatik geçiş · Parmağınızla sağa veya sola kaydırabilirsiniz
          </p>
        </div>
      </div>
    </section>
  );
}
