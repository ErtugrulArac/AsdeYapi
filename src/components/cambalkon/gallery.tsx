import Image from "next/image";

const images = [
  { src: "/gal1.webp", alt: "Bursa’da uygulanmış katlanır cam balkon iç görünümü" },
  { src: "/gal2.webp", alt: "Siyah profilli cam balkon uygulaması" },
  { src: "/gal3.webp", alt: "Bina cephesinde tamamlanmış cam balkon uygulamaları" },
  { src: "/gal4.webp", alt: "Manzara açıklığını koruyan geniş cam balkon uygulaması" },
  { src: "/gal5.webp", alt: "Bahçeli evde camla kapatılmış yaşam alanı uygulaması" },
] as const;

export default function CamBalkonGallery() {
  return (
    <section
      id="uygulamalar"
      aria-labelledby="uygulamalar-baslik"
      className="scroll-mt-40 bg-white px-4 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.24em] text-orange-600">
            Mevcut uygulamalar
          </p>
          <h2 id="uygulamalar-baslik" className="text-3xl font-black text-neutral-950 sm:text-4xl md:text-5xl">
            Cam Balkon Uygulama Örnekleri
          </h2>
          <p className="mt-5 text-base leading-7 text-neutral-600">
            Farklı cephe, açıklık ve kullanım ihtiyaçlarında tamamlanan cam balkon
            uygulamalarını inceleyin.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {images.map((item, index) => (
            <figure
              key={item.src}
              className={`group relative overflow-hidden rounded-3xl bg-neutral-100 shadow-sm ${
                index < 2 ? "aspect-[4/3] lg:col-span-3" : "aspect-[4/3] lg:col-span-2"
              }`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes={index < 2 ? "(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 50vw" : "(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"}
                className="object-cover transition duration-500 group-hover:scale-[1.03]"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
