"use client";

import type { ComponentProps, MouseEvent } from "react";

type ConversionName =
  | "cam-balkon-phone-click"
  | "cam-balkon-whatsapp-click"
  | "cam-balkon-quote-click";

type Gtag = (...args: unknown[]) => void;

type ConversionLinkProps = Omit<ComponentProps<"a">, "href"> & {
  href: string;
  conversion: ConversionName;
  googleAdsConversion?: boolean;
};

const GOOGLE_ADS_CONVERSION_DESTINATION =
  "AW-17029946954/TTx4CKu94cEaEMq8wbg_";

const eventNames: Record<ConversionName, string> = {
  "cam-balkon-phone-click": "cam_balkon_phone_click",
  "cam-balkon-whatsapp-click": "cam_balkon_whatsapp_click",
  "cam-balkon-quote-click": "cam_balkon_quote_click",
};

export default function ConversionLink({
  href,
  conversion,
  googleAdsConversion = false,
  onClick,
  ...props
}: ConversionLinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);

    if (event.defaultPrevented) return;

    const gtag = (window as Window & { gtag?: Gtag }).gtag;
    gtag?.("event", eventNames[conversion], {
      event_category: "cam_balkon",
      link_url: href,
    });

    if (!googleAdsConversion || !gtag) return;

    event.preventDefault();

    let hasNavigated = false;
    const navigate = () => {
      if (hasNavigated) return;
      hasNavigated = true;

      if (props.target === "_blank") {
        window.open(href, "_blank", "noopener,noreferrer");
      } else {
        window.location.href = href;
      }
    };

    gtag("event", "conversion", {
      send_to: GOOGLE_ADS_CONVERSION_DESTINATION,
      event_callback: navigate,
      event_timeout: 1200,
    });

    window.setTimeout(navigate, 1200);
  };

  return (
    <a
      href={href}
      data-conversion={conversion}
      onClick={handleClick}
      {...props}
    />
  );
}
