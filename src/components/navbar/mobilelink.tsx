"use client";

import Image from "next/image";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import ResponsiveLink from "./responsivelink";

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setIsOpen(false));
    return () => window.cancelAnimationFrame(frame);
  }, [pathname]);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <button
          type="button"
          aria-label="Menüyü aç"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation-panel"
          className="inline-flex size-12 items-center justify-center rounded-full border border-white/15 bg-white/7 text-white transition hover:border-white/30 hover:bg-white/12 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0d0c]"
        >
          <Menu className="size-6" aria-hidden="true" />
        </button>
      </SheetTrigger>

      <SheetContent
        id="mobile-navigation-panel"
        side="right"
        className="z-[100] w-full gap-0 overflow-y-auto border-l border-white/10 bg-[#101211] p-0 text-white shadow-2xl sm:max-w-[430px] [&>button]:right-3 [&>button]:top-[max(0.75rem,env(safe-area-inset-top))] [&>button]:z-10 [&>button]:text-white"
      >
        <SheetHeader className="border-b border-white/10 px-5 pb-5 pt-[max(1.25rem,env(safe-area-inset-top))] text-left">
          <SheetTitle className="pr-12 text-white">
            <Image
              src="/asde-yapi-navbar.webp"
              alt="Asde Yapı"
              width={161}
              height={113}
              className="h-14 w-auto object-contain"
            />
          </SheetTitle>
          <SheetDescription className="sr-only">
            Asde Yapı sayfaları ve iletişim seçenekleri
          </SheetDescription>
          <p className="pt-1 text-xs font-bold uppercase tracking-[0.18em] text-white/45">
            Estetik · Dayanıklılık · Konfor
          </p>
        </SheetHeader>

        <ResponsiveLink pathname={pathname} closeMenu={() => setIsOpen(false)} />
      </SheetContent>
    </Sheet>
  );
}
