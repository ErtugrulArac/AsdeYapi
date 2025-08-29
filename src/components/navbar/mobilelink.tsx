"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { GiHamburgerMenu } from "react-icons/gi";
import ResponsiveLink from "./responsivelink";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function SheetDemo() {
  const [isOpen, setIsOpen] = useState(false); // menü kontrolü

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          className="text-white max-md:text-xs py-1 px-2 font-bold border-none bg-transparent"
          variant="outline"
        >
          <GiHamburgerMenu size={22} />
        </Button>
      </SheetTrigger>

      <SheetContent className="overflow-auto" side="left">
        <SheetHeader>
          <SheetTitle className="flex items-center justify-center">
            <img className="w-32" src="/asdekarbeyaz.webp" alt="Asde Logo" />
          </SheetTitle>
          <SheetDescription className="text-center">
            Estetik, Dayanıklılık, Konfor
            <p className="font-bold">0544 782 4655</p>
          </SheetDescription>
        </SheetHeader>

        <div className="py-4 w-full">
          {/* Menü kapansın diye SheetClose içine alındı */}
          <SheetClose asChild>
            <ResponsiveLink closeMenu={() => setIsOpen(false)} />
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
}
