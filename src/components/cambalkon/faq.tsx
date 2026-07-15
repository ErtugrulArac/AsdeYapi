import { ChevronDown } from "lucide-react";
import { CAM_BALKON_FAQS } from "./data";

export default function CamBalkonFaq() {
  return (
    <section
      id="sss"
      aria-labelledby="sss-baslik"
      className="scroll-mt-40 bg-[#f6f3ee] px-4 py-20 sm:py-24"
    >
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.7fr_1.3fr]">
        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.24em] text-orange-600">
            Merak edilenler
          </p>
          <h2 id="sss-baslik" className="text-3xl font-black text-neutral-950 sm:text-4xl md:text-5xl">
            Sık Sorulan Sorular
          </h2>
          <p className="mt-5 max-w-md text-base leading-7 text-neutral-600">
            Cam balkon fiyatları, sistem seçimi, keşif ve uygulama süreci hakkında kısa yanıtlar.
          </p>
        </div>

        <div className="space-y-3">
          {CAM_BALKON_FAQS.map((item, index) => (
            <details
              key={item.question}
              name="cam-balkon-sss"
              className="group rounded-2xl border border-black/5 bg-white px-5 shadow-sm"
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5 text-base font-bold text-neutral-950 outline-none marker:hidden focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 sm:text-lg [&::-webkit-details-marker]:hidden">
                <span>
                  <span className="sr-only">Soru {index + 1}: </span>
                  {item.question}
                </span>
                <ChevronDown
                  className="mt-0.5 size-5 shrink-0 text-neutral-500 transition-transform duration-200 group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <p className="pr-8 pb-5 text-sm leading-7 text-neutral-600 sm:text-base">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
