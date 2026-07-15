import { CONTACT } from "@/lib/contact";
import { CAM_BALKON_FAQS } from "./data";

export default function CamBalkonStructuredData() {
  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Bursa Cam Balkon Sistemleri",
    serviceType: "Cam balkon keşif, ölçü, imalat ve montaj hizmeti",
    url: "https://asdeyapi.com/cambalkon",
    provider: {
      "@type": "Organization",
      name: "Asde Yapı",
      url: "https://asdeyapi.com",
      telephone: `+90${CONTACT.phone.slice(1)}`,
    },
    areaServed: {
      "@type": "City",
      name: "Bursa",
    },
    description:
      "Bursa'da katlanır, sürme, temperli ve ısıcamlı cam balkon sistemleri için keşif, ölçü ve uygulama hizmeti.",
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: CAM_BALKON_FAQS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const json = JSON.stringify([service, faq]).replace(/</g, "\\u003c");

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}
