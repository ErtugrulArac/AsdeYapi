import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  FileText,
  Hammer,
  Headphones,
  MessageCircle,
  PackageCheck,
  Phone,
  Ruler,
} from "lucide-react";
import { CONTACT } from "@/lib/contact";

const HOME_WHATSAPP_URL = `${CONTACT.whatsapp}?text=${encodeURIComponent(
  "Merhaba, pergola, giyotin cam veya cam balkon projem için ücretsiz keşif talep etmek istiyorum.",
)}`;

const premiumSystems = [
  {
    number: "01",
    eyebrow: "Motorlu gölgelendirme",
    title: "Motorlu Tenteli Pergola",
    description:
      "Açılır kapanır tente yapısıyla güneş kontrolünü ve açık alan konforunu tek sistemde buluşturur.",
    image: "/images/home/motorlu-tenteli-pergola.webp",
    imagePosition: "object-[52%_50%]",
    href: "/cambalkon#teklif",
  },
  {
    number: "02",
    eyebrow: "Dört mevsim dış mekân",
    title: "Bioklimatik Pergola",
    description:
      "Hareketli alüminyum lamellerle ışık, gölge ve doğal hava akışını ihtiyacınıza göre yönetir.",
    image: "/images/home/bioklimatik-pergola.webp",
    imagePosition: "object-[50%_50%]",
    href: "/cambalkon#teklif",
  },
  {
    number: "03",
    eyebrow: "Kesintisiz cephe görünümü",
    title: "Motorlu Giyotin Cam",
    description:
      "Dikey hareketli cam modülleriyle manzarayı korurken mekânı hava koşullarına göre dönüştürür.",
    image: "/images/home/motorlu-giyotin-cam.webp",
    imagePosition: "object-[54%_50%]",
    href: "/cambalkon#teklif",
  },
  {
    number: "04",
    eyebrow: "Ölçüye özel cam sistemleri",
    title: "Cam Balkon Sistemleri",
    description:
      "Katlanır, sürme ve ısıcamlı seçeneklerle balkonları daha korunaklı ve kullanışlı hâle getirir.",
    image: "/images/home/cam-balkon-sistemleri.webp",
    imagePosition: "object-[50%_52%]",
    href: "/cambalkon",
  },
] as const;

const projects = [
  {
    title: "Ticari Alanlarda Giyotin Cam",
    category: "Kafe ve restoran çözümleri",
    image: "/images/home/motorlu-giyotin-cam-ticari.webp",
    imagePosition: "object-[50%_52%]",
  },
  {
    title: "Pergole Sürme Uygulaması",
    category: "Mimariyle bütünleşen kapatma",
    image: "/images/home/proje-villa-cam-balkon.webp",
    imagePosition: "object-[50%_50%]",
  },
  {
    title: "Cam Balkon",
    category: "Kesintisiz görüş ve koruma",
    image: "/images/home/proje-manzarali-cam-balkon.webp",
    imagePosition: "object-[58%_50%]",
  },
  {
    title: "Isıcamlı Cambalkon Uygulaması",
    category: "Dikey açılır cam sistemi",
    image: "/images/home/proje-giyotin-cam.webp",
    imagePosition: "object-[50%_46%]",
  },
] as const;

const trustItems = [
  {
    title: "Ölçüye özel proje",
    description: "Sistemi hazır kalıba değil, alanın ölçüsüne ve kullanım ihtiyacına göre planlarız.",
    icon: Ruler,
  },
  {
    title: "Kaliteli malzeme",
    description: "Profil, cam, mekanizma ve aksesuarları birbiriyle uyumlu bir bütün olarak seçeriz.",
    icon: PackageCheck,
  },
  {
    title: "Profesyonel montaj",
    description: "Uygulama detaylarını sahada kontrol eder, temiz ve düzenli montaja önem veririz.",
    icon: Hammer,
  },
  {
    title: "Şeffaf teklif",
    description: "Sistem kapsamını, uygulama detaylarını ve fiyatı işe başlamadan önce netleştiririz.",
    icon: FileText,
  },
  {
    title: "Satış sonrası destek",
    description: "Montaj sonrasında kullanım ve ihtiyaç duyulan teknik konularda ulaşılabilir kalırız.",
    icon: Headphones,
  },
] as const;

const otherServices = [
  {
    title: "Sineklik Sistemleri",
    description: "Pencere ve kapılar için pileli, menteşeli ve sabit çözümler.",
    href: "/sineklik",
  },
  {
    title: "PVC Kapı ve Pencere",
    description: "Isı ve ses yalıtımına katkı sağlayan ölçüye özel doğrama sistemleri.",
    href: "/pvc",
  },
  {
    title: "PVC Tamir ve Bakım",
    description: "Ayar, conta, kilit, cam ve mekanizma ihtiyaçlarına yerinde müdahale.",
    href: "/pvctamir",
  },
  {
    title: "Duşakabin Sistemleri",
    description: "Banyo ölçüsüne uygun, sade ve kullanışlı cam kabin seçenekleri.",
    href: "/dusakabin",
  },
] as const;

export default function PremiumHome() {
  return (
    <div className="overflow-x-clip bg-[#f5f2ec] text-[#171716]">
      <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden px-4 pb-10 pt-32 sm:px-6 sm:pb-14 lg:min-h-[780px] lg:items-center lg:px-10 lg:pb-16 lg:pt-36">
        <Image
          src="/images/home/hero-bioklimatik-pergola.webp"
          alt="Modern villada bioklimatik pergola uygulaması"
          fill
          priority
          quality={82}
          sizes="100vw"
          className="object-cover object-[42%_50%] sm:object-center"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/30 to-black/90 lg:bg-gradient-to-r lg:from-black/90 lg:via-black/55 lg:to-black/10"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08)_0%,rgba(0,0,0,0)_42%,rgba(0,0,0,0.38)_100%)]"
          aria-hidden="true"
        />

        <div className="relative mx-auto w-full max-w-7xl">
          <div className="max-w-3xl text-white">
            <p className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-orange-300 sm:text-sm">
              <span className="h-px w-8 bg-orange-400" aria-hidden="true" />
              Bursa’da ölçüye özel mimari sistemler
            </p>
            <h1 className="max-w-3xl text-[2.55rem] font-black leading-[1.03] tracking-[-0.045em] drop-shadow-xl sm:text-6xl lg:text-7xl xl:text-[5.25rem]">
              Yaşam Alanlarını Mimari Sistemlerle Dönüştürüyoruz
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/85 sm:text-lg sm:leading-8 lg:text-xl">
              Villa, kafe, restoran ve ticari projeler için ölçüye özel, estetik ve dayanıklı
              pergola, giyotin cam ve cam balkon çözümleri.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={HOME_WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-orange-600 px-6 py-3.5 text-base font-extrabold text-white shadow-[0_18px_45px_-20px_rgba(234,88,12,0.9)] transition hover:-translate-y-0.5 hover:bg-orange-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black motion-reduce:transform-none motion-reduce:transition-none"
              >
                <MessageCircle className="size-5" aria-hidden="true" />
                Ücretsiz Keşif Al
              </a>
              <a
                href="#premium-sistemler"
                className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full border border-white/45 bg-black/25 px-6 py-3.5 text-base font-extrabold text-white backdrop-blur-md transition hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black motion-reduce:transform-none motion-reduce:transition-none"
              >
                Projeleri İncele
                <ArrowRight className="size-5" aria-hidden="true" />
              </a>
            </div>

            <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-xs font-semibold text-white/80 sm:text-sm">
              {["Ücretsiz keşif", "Ölçüye özel planlama", "Profesyonel montaj"].map((item) => (
                <li key={item} className="flex items-center gap-1.5">
                  <CheckCircle2 className="size-4 text-orange-400" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="premium-sistemler" className="scroll-mt-20 bg-[#111312] px-4 py-20 text-white sm:px-6 sm:py-24 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 border-b border-white/10 pb-10 lg:grid-cols-[0.7fr_1fr] lg:items-end lg:gap-16">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-orange-400 sm:text-sm">
                Premium sistemler
              </p>
              <h2 className="mt-4 text-4xl font-black leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                Dış mekânı gerçek bir yaşam alanına çevirin
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-7 text-neutral-400 sm:text-lg sm:leading-8 lg:justify-self-end">
              Bursa’da pergola, bioklimatik pergola, motorlu giyotin cam ve cam balkon
              sistemlerini alanın mimarisiyle birlikte değerlendiriyor; konut ve ticari projelere
              ölçüye özel çözümler geliştiriyoruz.
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-12">
            {premiumSystems.map((system, index) => (
              <Link
                key={system.title}
                href={system.href}
                className={`group relative isolate min-h-[430px] overflow-hidden rounded-[1.75rem] border border-white/10 bg-neutral-900 shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-4 focus-visible:ring-offset-[#111312] sm:min-h-[500px] ${
                  index === 0 || index === 3 ? "lg:col-span-7" : "lg:col-span-5"
                }`}
              >
                <Image
                  src={system.image}
                  alt={`${system.title} uygulaması`}
                  fill
                  quality={80}
                  sizes="(max-width: 1023px) 100vw, 58vw"
                  className={`object-cover transition duration-700 group-hover:scale-[1.035] motion-reduce:transform-none motion-reduce:transition-none ${system.imagePosition}`}
                />
                <div
                  className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/5 to-black/95"
                  aria-hidden="true"
                />
                <span className="absolute left-5 top-5 rounded-full border border-white/20 bg-black/30 px-3 py-1.5 text-xs font-bold tracking-[0.18em] text-white/90 backdrop-blur-md sm:left-7 sm:top-7">
                  {system.number}
                </span>
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-300">
                    {system.eyebrow}
                  </p>
                  <h3 className="mt-3 text-3xl font-black tracking-[-0.03em] sm:text-4xl">
                    {system.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-sm leading-6 text-white/75 sm:text-base sm:leading-7">
                    {system.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-white">
                    Sistemi İncele
                    <ArrowRight
                      className="size-4 transition-transform group-hover:translate-x-1 motion-reduce:transform-none"
                      aria-hidden="true"
                    />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="projeler" className="scroll-mt-20 px-4 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-orange-600 sm:text-sm">
                Uygulamalarımız
              </p>
              <h2 className="mt-3 max-w-3xl text-4xl font-black leading-[1.06] tracking-[-0.04em] text-[#171716] sm:text-5xl lg:text-6xl">
                Projelerden ilham alan çözümler
              </h2>
            </div>
            <Link
              href="/cambalkon"
              className="inline-flex min-h-11 w-fit items-center gap-2 rounded-full border border-black/15 px-5 py-2.5 text-sm font-black transition hover:border-black hover:bg-black hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-600 focus-visible:ring-offset-2"
            >
              Cam balkon projeleri
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="-mx-4 mt-9 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:-mx-6 sm:px-6 lg:mx-0 lg:grid lg:grid-cols-12 lg:gap-5 lg:overflow-visible lg:px-0 lg:pb-0">
            {projects.map((project, index) => (
              <Link
                key={project.title}
                href="/cambalkon"
                className={`group relative isolate min-h-[430px] min-w-[84%] snap-center overflow-hidden rounded-[1.6rem] bg-neutral-900 shadow-[0_25px_70px_-35px_rgba(0,0,0,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-600 focus-visible:ring-offset-4 sm:min-w-[58%] lg:min-w-0 ${
                  index === 0 || index === 3 ? "lg:col-span-7" : "lg:col-span-5"
                }`}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  quality={78}
                  sizes="(max-width: 639px) 84vw, (max-width: 1023px) 58vw, 58vw"
                  className={`object-cover transition duration-700 group-hover:scale-[1.035] motion-reduce:transform-none motion-reduce:transition-none ${project.imagePosition}`}
                />
                <div
                  className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-black/90"
                  aria-hidden="true"
                />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange-300">
                    {project.category}
                  </p>
                  <h3 className="mt-2 text-2xl font-black text-white sm:text-3xl">{project.title}</h3>
                </div>
              </Link>
            ))}
          </div>
          <p className="mt-2 flex items-center gap-2 text-xs font-semibold text-neutral-500 lg:hidden">
            <ArrowRight className="size-4" aria-hidden="true" />
            Projeleri görmek için yana kaydırın
          </p>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-7 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <p className="text-xs font-black uppercase tracking-[0.24em] text-orange-600 sm:text-sm">
                Neden Asde Yapı?
              </p>
              <h2 className="mt-4 text-4xl font-black leading-[1.06] tracking-[-0.04em] sm:text-5xl">
                Projeyi ölçüden montaja birlikte yönetiyoruz
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
                Doğru sistemi yalnızca görsele göre değil; alanın ölçüsü, cephe koşulları ve
                kullanım beklentisiyle birlikte belirliyoruz.
              </p>
            </div>

            <div className="divide-y divide-black/10 border-y border-black/10">
              {trustItems.map((item, index) => {
                const Icon = item.icon;

                return (
                  <article key={item.title} className="grid grid-cols-[auto_1fr] gap-4 py-6 sm:gap-6 sm:py-8">
                    <span className="flex size-11 items-center justify-center rounded-2xl bg-orange-50 text-orange-600 sm:size-12">
                      <Icon className="size-5 sm:size-6" aria-hidden="true" />
                    </span>
                    <div className="grid gap-2 sm:grid-cols-[0.72fr_1.28fr] sm:gap-6">
                      <h3 className="text-lg font-black sm:text-xl">
                        <span className="mr-2 text-xs font-bold text-orange-600">0{index + 1}</span>
                        {item.title}
                      </h3>
                      <p className="text-sm leading-6 text-neutral-600 sm:text-base sm:leading-7">
                        {item.description}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="iletisim" className="relative isolate scroll-mt-20 overflow-hidden bg-[#111312] px-4 py-20 text-white sm:px-6 sm:py-24 lg:px-10">
        <Image
          src="/images/home/hero-bioklimatik-pergola.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/45" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl gap-9 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-orange-400 sm:text-sm">
              Birlikte planlayalım
            </p>
            <h2 className="mt-4 max-w-4xl text-4xl font-black leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              Projeniz İçin Ücretsiz Keşif Planlayalım
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-neutral-300 sm:text-lg sm:leading-8">
              Alanınızı, kullanım beklentinizi ve tercih ettiğiniz sistemi konuşalım; yerinde
              ölçü sonrasında size özel çözümü netleştirelim.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <a
              href={HOME_WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-orange-600 px-6 py-3.5 font-black text-white transition hover:bg-orange-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              <MessageCircle className="size-5" aria-hidden="true" />
              WhatsApp’tan Teklif Al
            </a>
            <a
              href={CONTACT.tel}
              aria-label={`Asde Yapı’yı ara: ${CONTACT.displayPhone}`}
              className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full border border-white/35 bg-white/10 px-6 py-3.5 font-black text-white backdrop-blur transition hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              <Phone className="size-5" aria-hidden="true" />
              Hemen Ara
            </a>
          </div>
        </div>
      </section>

      <section id="diger-hizmetler" className="scroll-mt-20 px-4 py-16 sm:px-6 sm:py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-orange-600">
              Diğer hizmetler
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.035em] sm:text-4xl">
              Diğer Çözümlerimiz
            </h2>
            <p className="mt-4 text-sm leading-6 text-neutral-600 sm:text-base sm:leading-7">
              Ana mimari sistemlerin yanında ev ve iş yerleri için tamamlayıcı uygulamalar da
              sunuyoruz.
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {otherServices.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group flex min-h-48 flex-col justify-between rounded-3xl border border-black/10 bg-white p-6 shadow-[0_18px_50px_-38px_rgba(0,0,0,0.5)] transition hover:-translate-y-1 hover:border-orange-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-600 focus-visible:ring-offset-2 motion-reduce:transform-none motion-reduce:transition-none"
              >
                <div>
                  <h3 className="text-xl font-black">{service.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-neutral-600">{service.description}</p>
                </div>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-black text-orange-600">
                  Detayları İncele
                  <ArrowRight
                    className="size-4 transition-transform group-hover:translate-x-1 motion-reduce:transform-none"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
