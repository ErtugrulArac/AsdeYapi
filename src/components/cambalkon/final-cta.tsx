import { MessageCircle, Phone } from "lucide-react";
import { CONTACT } from "@/lib/contact";
import ConversionLink from "./conversion-link";
import { CAM_BALKON_WHATSAPP_URL } from "./data";

export default function CamBalkonFinalCta() {
  return (
    <section
      id="teklif"
      aria-labelledby="teklif-baslik"
      className="scroll-mt-40 bg-black px-4 py-20 sm:py-24"
    >
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-orange-600 to-orange-500 px-6 py-14 text-center text-white shadow-2xl sm:px-12 sm:py-16">
        <div className="absolute -right-20 -top-20 size-64 rounded-full bg-white/10" aria-hidden="true" />
        <div className="absolute -bottom-24 -left-20 size-72 rounded-full bg-black/10" aria-hidden="true" />
        <div className="relative mx-auto max-w-3xl">
          <h2 id="teklif-baslik" className="text-3xl font-black sm:text-4xl md:text-5xl">
            Balkonunuza Uygun Sistemi Birlikte Belirleyelim
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-orange-50 sm:text-lg">
            Doğru fiyat ve sistem seçimi için balkonun ölçüsünü, kullanım beklentinizi ve
            uygulama detaylarını birlikte değerlendirelim.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <ConversionLink
              href={CAM_BALKON_WHATSAPP_URL}
              conversion="cam-balkon-quote-click"
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-black px-6 py-3 font-bold text-white transition hover:bg-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-orange-500"
            >
              <MessageCircle className="size-5" aria-hidden="true" />
              Keşif ve Ölçü Talep Et
            </ConversionLink>
            <ConversionLink
              href={CONTACT.tel}
              conversion="cam-balkon-phone-click"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/70 bg-white px-6 py-3 font-bold text-black transition hover:bg-orange-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 focus-visible:ring-offset-orange-500"
              aria-label={`Asde Yapı ile telefonla görüş: ${CONTACT.displayPhone}`}
            >
              <Phone className="size-5" aria-hidden="true" />
              Telefonla Görüş
            </ConversionLink>
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-6 text-orange-50">
            Balkon fotoğrafı ön değerlendirmeye yardımcı olabilir; kesin teklif yerinde ölçü
            sonrasında hazırlanır.
          </p>
        </div>
      </div>
    </section>
  );
}
