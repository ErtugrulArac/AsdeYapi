const links = [
  { href: "#sistemler", label: "Sistemler" },
  { href: "#uygulamalar", label: "Uygulamalar" },
  { href: "#fiyat", label: "Fiyat Nasıl Belirlenir?" },
  { href: "#isicamli", label: "Isıcamlı Sistem" },
  { href: "#surec", label: "Süreç" },
  { href: "#sss", label: "Sık Sorulanlar" },
] as const;

export default function CamBalkonQuickNav() {
  return (
    <nav
      aria-label="Cam balkon sayfası bölümleri"
      className="sticky top-20 z-40 border-b border-black/10 bg-white/95 shadow-sm backdrop-blur"
    >
      <div className="mx-auto max-w-7xl overflow-x-auto px-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <ul className="flex min-w-max items-center gap-2 py-3 md:justify-center">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block rounded-full border border-black/10 px-4 py-2 text-sm font-semibold text-neutral-700 transition hover:border-orange-500 hover:bg-orange-50 hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
