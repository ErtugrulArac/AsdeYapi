"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

import Linkler from "./linkler";
import MobileLink from "./mobilelink";

export default function Navbar() {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const updateNavbar = () => setHasScrolled(window.scrollY > 18);

    updateNavbar();
    window.addEventListener("scroll", updateNavbar, { passive: true });

    return () => window.removeEventListener("scroll", updateNavbar);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-[80] h-20 border-b border-white/10 bg-[#0b0d0c]/82 text-white backdrop-blur-xl transition-[height,background-color,box-shadow] duration-300 motion-reduce:transition-none",
        hasScrolled &&
          "h-16 bg-[#0b0d0c]/96 shadow-[0_14px_38px_-22px_rgba(0,0,0,0.95)]",
      )}
    >
      <div className="mx-auto flex h-full w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-5 xl:px-6">
        <Link
          href="/"
          title="Asde Yapı Ana Sayfa"
          aria-label="Asde Yapı ana sayfasına git"
          className="flex min-h-11 shrink-0 items-center rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-4 focus-visible:ring-offset-[#0b0d0c]"
        >
          <span className="text-xl font-black tracking-[-0.04em] sm:text-2xl">
            Asde<span className="text-orange-500">Yapı</span>
          </span>
        </Link>

        <div className="hidden min-w-0 items-center justify-end lg:flex">
          <Linkler />
        </div>

        <div className="flex items-center lg:hidden">
          <MobileLink />
        </div>
      </div>
    </header>
  );
}
