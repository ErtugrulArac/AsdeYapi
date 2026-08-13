"use client";

import type { LucideIcon } from "lucide-react";
import {
  ArrowUpRight,
  Blend,
  DoorOpen,
  Grid2X2,
  PanelsTopLeft,
  ScanLine,
  ShieldCheck,
  Sparkles,
  SunMedium,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { CONTACT } from "@/lib/contact";
import { cn } from "@/lib/utils";

const discoveryMessage = encodeURIComponent(
  "Merhaba, projem için ücretsiz keşif ve fiyat bilgisi almak istiyorum.",
);
const discoveryUrl = `${CONTACT.whatsapp}?text=${discoveryMessage}`;

type SystemLink = {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
};

const premiumSystems: SystemLink[] = [
  {
    title: "Motorlu Pergola",
    description: "Dört mevsim kontrollü açık alan konforu.",
    href: "/#premium-sistemler",
    icon: SunMedium,
  },
  {
    title: "Bioklimatik Pergola",
    description: "Ayarlanabilir lamellerle iklim kontrolü.",
    href: "/#premium-sistemler",
    icon: Blend,
  },
  {
    title: "Giyotin Cam",
    description: "Motorlu, panoramik ve güvenli cam çözümü.",
    href: "/#premium-sistemler",
    icon: PanelsTopLeft,
  },
  {
    title: "Cam Balkon",
    description: "Katlanır ve sürgülü cam balkon sistemleri.",
    href: "/cambalkon",
    icon: Grid2X2,
  },
];

const otherSystems: SystemLink[] = [
  {
    title: "Sineklik",
    description: "Pileli ve menteşeli sineklik seçenekleri.",
    href: "/sineklik",
    icon: ShieldCheck,
  },
  {
    title: "PVC",
    description: "Isı ve ses yalıtımlı pencere çözümleri.",
    href: "/pvc",
    icon: ScanLine,
  },
  {
    title: "Duşakabin",
    description: "Banyonuza özel ölçü ve cam seçenekleri.",
    href: "/dusakabin",
    icon: DoorOpen,
  },
];

const mainLinks = [
  { title: "Ana Sayfa", href: "/" },
  { title: "Projeler", href: "/#projeler" },
  { title: "Kurumsal", href: "/hakkimizda" },
  { title: "İletişim", href: "/#iletisim" },
];

const navigationLinkClass =
  "relative inline-flex min-h-11 items-center rounded-full px-3 text-[13px] font-bold tracking-[-0.01em] text-white/78 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0d0c] xl:px-4 xl:text-sm";

function isSystemRoute(pathname: string) {
  return ["/cambalkon", "/sineklik", "/pvc", "/dusakabin"].some(
    (route) => pathname === route || pathname.startsWith(`${route}/`),
  );
}

function MenuGroup({
  title,
  items,
  pathname,
}: {
  title: string;
  items: SystemLink[];
  pathname: string;
}) {
  return (
    <div>
      <p className="px-3 pb-2 text-[11px] font-black uppercase tracking-[0.2em] text-orange-600">
        {title}
      </p>
      <ul className="space-y-1">
        {items.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;

          return (
            <li key={item.title}>
              <NavigationMenuLink asChild active={active}>
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "group grid grid-cols-[auto_1fr_auto] items-center gap-3 rounded-xl p-3 text-[#1a1c1b] transition-colors hover:bg-orange-50 focus-visible:bg-orange-50",
                    active && "bg-orange-50 text-orange-800",
                  )}
                >
                  <span
                    className={cn(
                      "flex size-10 items-center justify-center rounded-xl border border-black/8 bg-[#f5f4f0] text-[#262927] transition-colors group-hover:border-orange-200 group-hover:bg-white group-hover:text-orange-600",
                      active && "border-orange-200 bg-white text-orange-600",
                    )}
                  >
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-sm font-black">{item.title}</span>
                    <span className="mt-0.5 block text-xs leading-5 text-neutral-500">
                      {item.description}
                    </span>
                  </span>
                  <ArrowUpRight
                    className="size-4 text-neutral-300 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-orange-600 motion-reduce:transform-none"
                    aria-hidden="true"
                  />
                </Link>
              </NavigationMenuLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default function DesktopNavigation() {
  const pathname = usePathname();
  const systemsActive = isSystemRoute(pathname);

  return (
    <NavigationMenu viewport={false} delayDuration={80} skipDelayDuration={250}>
      <NavigationMenuList className="gap-0.5 xl:gap-1">
        <NavigationMenuItem>
          <NavigationMenuLink asChild active={pathname === "/"}>
            <Link
              href={mainLinks[0].href}
              className={cn(
                navigationLinkClass,
                pathname === "/" && "bg-white/9 text-white",
              )}
            >
              {mainLinks[0].title}
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={cn(
              navigationLinkClass,
              "h-11 bg-transparent py-0 data-[state=open]:bg-white/9 data-[state=open]:text-white hover:bg-white/9 focus:bg-white/9 focus:text-white",
              systemsActive && "bg-white/9 text-white",
            )}
          >
            Sistemler
          </NavigationMenuTrigger>
          <NavigationMenuContent className="left-0 z-[90] mt-2 w-[590px] rounded-2xl border border-black/8 bg-white p-3 text-[#1a1c1b] shadow-[0_28px_80px_-30px_rgba(0,0,0,0.6)] md:w-[590px]">
            <div className="grid grid-cols-[1.08fr_0.92fr] gap-3">
              <MenuGroup title="Premium Sistemler" items={premiumSystems} pathname={pathname} />
              <div className="rounded-xl bg-[#f6f5f1] p-2.5">
                <MenuGroup title="Diğer Sistemler" items={otherSystems} pathname={pathname} />
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {mainLinks.slice(1).map((item) => {
          const active = item.href === "/hakkimizda" && pathname === "/hakkimizda";

          return (
            <NavigationMenuItem key={item.title}>
              <NavigationMenuLink asChild active={active}>
                <Link
                  href={item.href}
                  className={cn(navigationLinkClass, active && "bg-white/9 text-white")}
                >
                  {item.title}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          );
        })}

        <NavigationMenuItem className="ml-1.5">
          <NavigationMenuLink asChild>
            <a
              href={discoveryUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center gap-2 whitespace-nowrap rounded-full bg-orange-600 px-4 text-[13px] font-black text-white shadow-[0_12px_30px_-14px_rgba(234,88,12,0.9)] transition hover:-translate-y-0.5 hover:bg-orange-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0d0c] motion-reduce:transform-none xl:px-5 xl:text-sm"
            >
              <Sparkles className="size-4" aria-hidden="true" />
              Ücretsiz Keşif
            </a>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
