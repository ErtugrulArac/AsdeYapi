import { CONTACT } from "@/lib/contact";

export const CAM_BALKON_WHATSAPP_URL = `${CONTACT.whatsapp}?text=${encodeURIComponent(
  "Merhaba, cam balkon için keşif ve ölçü talep etmek istiyorum."
)}`;

export const CAM_BALKON_SYSTEMS = [
  {
    name: "Temperli Katlanır Cam Balkon",
    description:
      "Temperli cam panellerin katlanarak yana toplanabildiği, balkon açıklığını esnek kullanmaya yardımcı olan sistemdir.",
    suitableFor:
      "Balkonunu gerektiğinde daha geniş biçimde açmak isteyen kullanıcılar için uygundur.",
    advantage: "Panellerin bir noktada toplanabilmesi kullanım esnekliği sağlar.",
    image: "/temperli.webp",
    alt: "Temperli katlanır cam balkon sistem görünümü",
  },
  {
    name: "Isıcamlı Katlanır Cam Balkon",
    description:
      "Isıcamlı cam yapısını katlanır kullanım biçimiyle bir araya getiren, konfor beklentisi yüksek projeler için değerlendirilen sistemdir.",
    suitableFor:
      "Balkonunu farklı mevsimlerde daha konforlu kullanmayı önemseyenler için değerlendirilebilir.",
    advantage: "Tek camlı sisteme göre kullanım konforuna daha fazla katkı sağlayabilir.",
    image: "/isicamli.webp",
    alt: "Isıcamlı katlanır cam balkon sistem görünümü",
  },
  
  {
    name: "Giyotin Sistem",
    description:
      "Cam panellerin dikey hareket prensibiyle çalıştığı, proje ölçüsü ve kullanım beklentisine göre değerlendirilen sistemdir.",
    suitableFor:
      "Dikey açılım biçiminin kullanım alanına uygun olduğu projeler için değerlendirilebilir.",
    advantage: "Dikey hareket biçimi farklı açıklık ihtiyaçlarına alternatif sunar.",
    image: "/giyotin.webp",
    alt: "Giyotin cam balkon sistem görünümü",
  },
] as const;

export const CAM_BALKON_FAQS = [
  {
    question: "Cam balkon fiyatı nasıl hesaplanır?",
    answer:
      "Fiyat; balkonun en ve yükseklik ölçüleri, toplam uygulama alanı, seçilen sistem, cam ve profil tercihleri ile montaj koşulları birlikte değerlendirilerek hazırlanır.",
  },
  {
    question: "Sadece fotoğraf göndererek kesin fiyat alınabilir mi?",
    answer:
      "Hayır. Fotoğraf yalnızca balkonun genel yapısını anlamaya yardımcı olur. Kesin fiyat, yerinde ölçü ve sistem seçimi sonrasında verilir.",
  },
  {
    question: "Isıcamlı cam balkon ile tek camlı sistem arasındaki fark nedir?",
    answer:
      "Isıcamlı sistem birden fazla cam katmanından oluşur ve tek camlı sisteme göre kullanım konforuna daha fazla katkı sağlayabilir. Sonuç; profil, cephe, birleşim detayları ve mevcut yapıya göre değişir.",
  },
  {
    question: "Katlanır mı, sürme cam balkon mu tercih edilmeli?",
    answer:
      "Seçim; balkonun açıklığına, panellerin nerede toplanacağına ve kullanım alışkanlığına bağlıdır. Ölçü sonrasında iki sistemin alana uygunluğu birlikte değerlendirilir.",
  },
  {
    question: "Ölçü ve keşif süreci nasıl ilerler?",
    answer:
      "Önce kullanım ihtiyacı konuşulur; ardından yerinde en, yükseklik, köşe, dönüş ve montaj detayları ölçülür. Sistem netleştikten sonra teklif hazırlanır.",
  },
  {
    question: "Cam balkon tamamen su ve hava geçirmez mi?",
    answer:
      "Cam balkon dış ortam etkilerini azaltmaya yardımcı olabilir; ancak sıfır su veya hava geçişi ve kapalı oda yalıtımı garanti etmez. Performans, cephe ve uygulama detaylarına göre değişir.",
  },
  {
    question: "Bursa’da hangi bölgelere hizmet veriliyor?",
    answer:
      "Asde Yapı Bursa’da cam balkon hizmeti verir. Uygulama adresiniz için keşif ve montaj planlaması iletişim sırasında teyit edilir.",
  },
] as const;
