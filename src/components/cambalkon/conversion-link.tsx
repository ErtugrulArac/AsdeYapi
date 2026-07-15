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
};

const eventNames: Record<ConversionName, string> = {
  "cam-balkon-phone-click": "cam_balkon_phone_click",
  "cam-balkon-whatsapp-click": "cam_balkon_whatsapp_click",
  "cam-balkon-quote-click": "cam_balkon_quote_click",
};

export default function ConversionLink({
  href,
  conversion,
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
