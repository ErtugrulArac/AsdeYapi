// components/FloatingContactButtons.tsx
"use client";

import React, { useState } from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { CONTACT } from "@/lib/contact";

type Gtag = (...args: unknown[]) => void;

export default function FloatingContactButtons() {
  const [showTooltip, setShowTooltip] = useState(true);
  const handleConversion = (url: string) => {
    const gtag = (window as Window & { gtag?: Gtag }).gtag;

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
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-3">
      {showTooltip && (
        <div className="bg-white text-black text-sm px-4 py-2 rounded-md shadow-md flex items-center gap-2">
          <span>Bize mesaj gönderin</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="ml-2 text-gray-500 hover:text-red-500 text-xs"
          >
            ✕
          </button>
        </div>
      )}

      {/* {/ WhatsApp Button /} */}
      <button
        onClick={() => handleConversion(CONTACT.whatsapp)}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center"
        aria-label="WhatsApp ile mesaj gönder"
      >
        <FaWhatsapp className="text-xl" />
      </button>

      {/* {/ Phone Button /} */}
      <button
        onClick={() => handleConversion(CONTACT.tel)}
        className="bg-[#e07e22] hover:bg-[#ff7a00] text-white p-4 rounded-full shadow-lg flex items-center justify-center"
        aria-label="Telefonla ara"
      >
        <FaPhoneAlt className="text-xl" />
      </button>
    </div>
  );
}
