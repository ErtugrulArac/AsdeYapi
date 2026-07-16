import {
  Calculator,
  CircleHelp,
  Images,
  LayoutGrid,
  ListChecks,
  ThermometerSun,
} from "lucide-react";

const links = [
  { href: "#sistemler", label: "Sistemler", icon: LayoutGrid },
  { href: "#uygulamalar", label: "Uygulamalar", icon: Images },
  { href: "#fiyat", label: "Fiyatlandırma", icon: Calculator },
  { href: "#isicamli", label: "Isıcamlı Sistem", icon: ThermometerSun },
  { href: "#surec", label: "Süreç", icon: ListChecks },
  { href: "#sss", label: "Sık Sorulanlar", icon: CircleHelp },
] as const;

export default function CamBalkonQuickNav() {
  return (
    <nav
      aria-label="Cam balkon sayfası bölümleri"
      className="sticky top-20 z-40 border-b border-white/10 bg-[#111315]/95 text-white shadow-[0_12px_30px_rgba(0,0,0,0.18)] backdrop-blur-xl"
    >
      <div className="relative mx-auto max-w-7xl">
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[#111315] to-transparent md:hidden"
          aria-hidden="true"
        />
        <div className="overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <ul className="flex min-w-max items-center gap-2 py-3 pl-4 pr-12 md:justify-center md:px-4">
            {links.map(({ href, label, icon: Icon }) => (
              <li key={href}>
                <a
                  href={href}
                  className="group flex min-h-11 items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.06] px-3.5 py-2 text-sm font-semibold text-neutral-200 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-orange-400/60 hover:bg-orange-500/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#111315]"
                >
                  <span className="flex size-7 items-center justify-center rounded-lg bg-orange-500/15 text-orange-400 transition group-hover:bg-orange-500 group-hover:text-white">
                    <Icon className="size-4" aria-hidden="true" />
                  </span>
                  <span>{label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="h-px bg-gradient-to-r from-transparent via-orange-500/70 to-transparent" aria-hidden="true" />
    </nav>
  );
}
