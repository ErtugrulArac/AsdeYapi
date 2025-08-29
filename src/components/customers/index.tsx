   import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card"

const index = () => {
  return (
    <section className="py-16 bg-white px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">
        Müşteri Yorumları
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {[
          {
            name: "Göksel Yıldırım",
            comment: "Kaliteli ve güvenilir hizmet aldık. Teşekkürler!",
          },
          {
            name: "Nihat Kaya",
            comment: "Zamanında teslimat, mükemmel işçilik.",
          },
          {
            name: "Ali Koç",
            comment: "Kesinlikle tavsiye ederim.",
          },
        ].map((item, i) => (
          <Card key={i} className="shadow-md border border-gray-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-yellow-500">
                {"⭐".repeat(5)}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 italic">"{item.comment}"</p>
              <p className="mt-3 font-semibold text-gray-900">– {item.name}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default index


