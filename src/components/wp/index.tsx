// components/FloatingContactButtons.tsx
"use client";

import React, { useState } from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { CONTACT } from "@/lib/contact";

type Gtag = (...args: unknown[]) => void;

type FloatingContactButtonsProps = {
  conversionContext?: "cam-balkon";
  phoneUrl?: string;
  whatsappUrl?: string;
};

export default function FloatingContactButtons({
  conversionContext,
  phoneUrl = CONTACT.tel,
  whatsappUrl = CONTACT.whatsapp,
}: FloatingContactButtonsProps) {
  const [showTooltip, setShowTooltip] = useState(true);

  const handleConversion = (url: string, channel: "phone" | "whatsapp") => {
    const gtag = (window as Window & { gtag?: Gtag }).gtag;

    if (conversionContext === "cam-balkon") {
      gtag?.("event", `cam_balkon_${channel}_click`, {
        event_category: "cam_balkon",
        link_url: url,
      });
    }

    if (gtag) {
      gtag("event", "conversion", {
        send_to: "AW-17029946954/TTx4CKu94cEaEMq8wbg_",
        event_callback: () => {
          window.location.href = url;
        },
      });
    } else {
      window.location.href = url;
    }
  };
  

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end space-y-3 sm:bottom-6 sm:right-6">
      {showTooltip && (
        <div className="flex min-h-10 items-center gap-1 rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-black shadow-lg sm:gap-2 sm:px-4 sm:py-2 sm:text-sm">
          <span className="sm:hidden">Bize ulaşın</span>
          <span className="hidden sm:inline">Bize mesaj gönderin</span>
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            aria-label="Bize ulaşın mesajını kapat"
            className="ml-1 inline-flex size-8 items-center justify-center rounded-full text-xs text-gray-500 transition hover:bg-gray-100 hover:text-red-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 sm:ml-2"
          >
            ✕
          </button>
        </div>
      )}

      {/* {/ WhatsApp Button /} */}
      <button
        onClick={() => handleConversion(whatsappUrl, "whatsapp")}
        data-conversion={conversionContext === "cam-balkon" ? "cam-balkon-whatsapp-click" : undefined}
        className="bg-green-500 hover:bg-green-600 text-white p-3 sm:p-4 rounded-full shadow-lg flex items-center justify-center"
        aria-label="WhatsApp ile mesaj gönder"
      >
        <FaWhatsapp className="text-xl" />
      </button>

      {/* {/ Phone Button /} */}
      <button
        onClick={() => handleConversion(phoneUrl, "phone")}
        data-conversion={conversionContext === "cam-balkon" ? "cam-balkon-phone-click" : undefined}
        className="bg-[#e07e22] hover:bg-[#ff7a00] text-white p-3 sm:p-4 rounded-full shadow-lg flex items-center justify-center"
        aria-label="Telefonla ara"
      >
        <FaPhoneAlt className="text-xl" />
      </button>
    </div>
  );
}
