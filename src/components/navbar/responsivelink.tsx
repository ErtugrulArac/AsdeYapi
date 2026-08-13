"use client";

import { ArrowUpRight, ChevronRight, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";

import { CONTACT } from "@/lib/contact";
import { cn } from "@/lib/utils";

interface ResponsiveLinkProps {
  pathname: string;
  closeMenu: () => void;
}

const mobileLinks = [
  { title: "Ana Sayfa", href: "/" },
  { title: "Motorlu Pergola", href: "/#premium-sistemler" },
  { title: "Bioklimatik Pergola", href: "/#premium-sistemler" },
  { title: "Giyotin Cam", href: "/#premium-sistemler" },
  { title: "Cam Balkon", href: "/cambalkon" },
  { title: "Projeler", href: "/#projeler" },
  { title: "Sineklik Sistemleri", href: "/sineklik" },
  { title: "Diğer hizmetler", href: "/#diger-hizmetler" },
  { title: "İletişim", href: "/#iletisim" },
];

const mobileMessage = encodeURIComponent(
  "Merhaba, projem için ücretsiz keşif ve fiyat bilgisi almak istiyorum.",
);
const mobileWhatsappUrl = `${CONTACT.whatsapp}?text=${mobileMessage}`;

export default function ResponsiveLink({ pathname, closeMenu }: ResponsiveLinkProps) {
  return (
    <div className="flex flex-1 flex-col px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-3">
      <nav aria-label="Mobil ana menü">
        <ol className="divide-y divide-white/7">
          {mobileLinks.map((item, index) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : !item.href.includes("#") && pathname === item.href;

            return (
              <li key={`${item.title}-${index}`}>
                <Link
                  href={item.href}
                  onClick={closeMenu}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "group grid min-h-13 grid-cols-[2rem_1fr_auto] items-center gap-2 rounded-xl px-2.5 py-2 text-[15px] font-bold text-white/78 transition hover:bg-white/7 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400",
                    isActive && "bg-white/8 text-white",
                  )}
                >
                  <span
                    className={cn(
                      "text-[11px] font-black tabular-nums text-white/28",
                      isActive && "text-orange-400",
                    )}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{item.title}</span>
                  <ChevronRight
                    className="size-4 text-white/25 transition-transform group-hover:translate-x-0.5 group-hover:text-orange-400 motion-reduce:transform-none"
                    aria-hidden="true"
                  />
                </Link>
              </li>
            );
          })}
        </ol>
      </nav>

      <div className="mt-auto grid gap-3 border-t border-white/10 pt-5 sm:grid-cols-2">
        <a
          href={mobileWhatsappUrl}
          target="_blank"
          rel="noreferrer"
          onClick={closeMenu}
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-orange-600 px-4 text-sm font-black text-white transition hover:bg-orange-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#101211]"
        >
          <MessageCircle className="size-4" aria-hidden="true" />
          WhatsApp’tan Teklif Al
          <ArrowUpRight className="size-3.5" aria-hidden="true" />
        </a>
        <a
          href={CONTACT.tel}
          onClick={closeMenu}
          aria-label={`Asde Yapı’yı ara: ${CONTACT.displayPhone}`}
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/18 bg-white/7 px-4 text-sm font-black text-white transition hover:border-white/35 hover:bg-white/12 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#101211]"
        >
          <Phone className="size-4" aria-hidden="true" />
          Hemen Ara
        </a>
      </div>
      <p className="py-3 text-center text-xs font-semibold text-white/38">
        {CONTACT.displayPhone}
      </p>
    </div>
  );
}
