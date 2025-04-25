"use client";

import React from "react";

export default function AboutSection() {
    return (
        <section className="bg-white py-28 pb-3  px-6 md:px-12 font-sans">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-black text-gray-800 mb-6">
                    Hakkımızda
                </h2>
                <div className="text-gray-600 text-lg leading-relaxed space-y-6">
                    <p>
                        Asdem Yapı, 10 yılı aşkın süredir yapı sektöründe faaliyet gösteren, kalite ve müşteri memnuniyetini ön planda tutan köklü bir kuruluştur. Her biri alanında uzman ekip arkadaşlarımızla, PVC doğrama, cam balkon, sineklik ve benzeri uygulamalarda güvenilir ve yenilikçi çözümler sunuyoruz. Yıllar içinde edindiğimiz tecrübe sayesinde, müşterilerimizin ihtiyaçlarını en doğru şekilde analiz ederek, projelere özel çözümler geliştiriyoruz.
                    </p>
                    <p>
                        Misyonumuz; yaşam alanlarını daha konforlu, estetik ve güvenli hale getirerek, müşteri beklentilerinin ötesine geçmektir. Her projeye titizlikle yaklaşarak, malzeme seçiminden montaj aşamasına kadar tüm süreci profesyonelce yürütüyoruz. Sahip olduğumuz ileri teknoloji ekipmanlar ve yenilikçi uygulamalar sayesinde sektörde fark yaratıyoruz.
                    </p>
                    <p>
                        Müşteri memnuniyetini daima önceliğimiz olarak görmekteyiz. Geniş hizmet ağımız ve çözüm odaklı yaklaşımımız sayesinde, bugüne kadar yüzlerce başarılı projeye imza attık. Asdem Yapı olarak, sadece bugünün değil geleceğin yapısını inşa etmeye devam ediyoruz.
                    </p>
                    <p>
                        Ekibimiz, alanında uzman mühendisler ve uygulayıcılardan oluşmaktadır. Sürekli gelişen sektörel teknolojileri yakından takip ederek, projelerimizde modern çözümler sunmaya özen gösteriyoruz. Böylece hem görsel hem de işlevsel açıdan üstün hizmet kalitesi sağlıyoruz.
                    </p>
                    <p>
                        Asdem Yapı, yalnızca yapı inşa etmekle kalmaz, aynı zamanda güven, şeffaflık ve sürdürülebilirlik ilkeleriyle hareket eder. Müşterilerimizin hayallerini gerçeğe dönüştürürken, her adımda onların yanında olmayı görev biliriz. Hedefimiz; her geçen gün daha fazla insana kaliteli yaşam alanları sunmak ve sektörde örnek gösterilen bir marka olmaktır.
                    </p>
                </div>

               
                <div className="mt-8">
                    <a href="tel:05447824655">
                        <button className="px-6 py-3 bg-orange-400 text-white text-lg font-semibold rounded-lg hover:bg-orange-700 transition duration-300">
                            Daha Fazla Bilgi
                        </button>
                    </a>
                </div>
            </div>
        </section>
    );
}
