// components/Footer.tsx
"use client";

import React from "react";
import { FaYoutube, FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";



export default function Footer() {
  return (
    <footer className="bg-white w-full text-black font-sans pt-16 px-6">
      {/* Newsletter */}
      <div className="max-w-4xl mx-auto text-center mb-20 max-md:mb-3">
        <h2 className="text-2xl font-semibold mb-2">Asde Yapı Gündemine <br /> Abone Ol</h2>
        <p className="text-gray-600 mb-6">Asde Yapı ile alakalı gelişmelerden <br /> haberdar olun.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <input
            type="email"
            placeholder="Mail Adresini Giriniz"
            className="w-full sm:w-80 px-4 py-3 rounded-md bg-gray-100 text-sm focus:outline-none"
          />
          <a target="_blank" href="https://www.whatsapp.com/channel/0029VaEO1GQLo4hp736e1Z3K">
            <button className="bg-[#ff7a00] hover:bg-[#ff7a00] text-white cursor-pointer font-semibold py-3 px-8 rounded-md transition-all">
              Abone Ol
            </button>
          </a>
        </div>
      </div>

      {/* Footer Main */}
      <div className="max-w-6xl mx-auto border-t pt-10 flex flex-col sm:flex-row justify-between gap-8">
        {/* Logo + Slogan */}
        <div className="sm:w-1/3">
          <h3 className="text-2xl font-bold mb-2">
            <span className="text-black">Asde</span>
            <span className="text-[#ff7a00]">Yapı</span>
          </h3>
          <p className="text-gray-500 text-sm max-w-xs">
            Estetik, Dayanıklılık, Konfor
          </p>
        </div>

        {/* Accordion */}
        <div className="sm:w-2/3">
          <Accordion type="single" collapsible className="w-full space-y-2">
            <AccordionItem value="company">
              <AccordionTrigger>Şirketimiz</AccordionTrigger>
              <AccordionContent>
                Şirketimiz, 10 yılı aşkın tecrübesiyle sektöründe öncü konumda yer almakta olup, kalite odaklı hizmet anlayışı ve koşulsuz müşteri memnuniyeti ilkesiyle çalışmalarını sürdürmektedir. Yıllar içinde edindiğimiz deneyim, uzman kadromuz ve yenilikçi yaklaşımımızla her projede güvenilir çözümler sunuyor, müşterilerimizin beklentilerini en üst düzeyde karşılamaya özen gösteriyoruz. <br />   
                 <a className="font-black" href="/hakkimizda">Devam Et</a>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="product">
              <AccordionTrigger>İletişim </AccordionTrigger>
              <AccordionContent>
                0544 782 46 55 
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="resources">
              <AccordionTrigger>Hizmetler</AccordionTrigger>
              <AccordionContent>
                Bursa sineklik, pvc ve cam balkon hizmetleri


              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="support">
              <AccordionTrigger>Gizlilik Politikası</AccordionTrigger>
              <AccordionContent>
                Asde Yapı olarak, müşterilerimizin gizliliğini önemsiyoruz. Bu form üzerinden toplanan ad, soyad, telefon numarası ve <br /> e-posta gibi kişisel bilgiler, yalnızca müşteri taleplerine dönüş yapmak ve hizmet sunmak amacıyla kullanılacaktır.
                <br /> <br /> Bilgileriniz hiçbir şekilde üçüncü kişilerle paylaşılmaz.

                İstediğiniz zaman bizimle iletişime geçerek verilerinizin silinmesini talep edebilirsiniz.

                <br /> <br />İletişim: fatihasslanss@gmail.com | 0544 782 46 55 <br /><br />

                <a className="font-bold" href="https://docs.google.com/document/d/1UsQLTp0GodeftHSlqEYvXClQ6OmrtGvRvmK7AZLNL0Y/edit?tab=t.0">Gizlilik Politikasına Git</a>

              </AccordionContent>
            </AccordionItem>


          </Accordion>
        </div>
      </div>

      {/* Social + Copyright */}
      <div className="mt-10 mb-4 text-center text-sm text-gray-400">
        <div className="flex justify-center gap-4 mb-4">
          <a target="_blank" href="https://www.instagram.com/asdeyapi/?hl=tr">   <FaInstagram className="hover:text-black transition" /></a>
          <a target="_blank" href="https://www.facebook.com/people/Asde-Yap%C4%B1/61575193382177/">   <FaFacebookF className="hover:text-black transition" /></a>
          <a target="_blank" href="https://www.instagram.com/asdeyapi/?hl=tr">  <FaYoutube className="hover:text-black transition" /></a>
          <a target="_blank" href="https://www.instagram.com/asdeyapi/?hl=tr">   <FaTwitter className="hover:text-black transition" /></a>
        </div>
        <p>Asde Yapı © 2025. Tüm Hakları Saklıdır.</p>
      </div>
    </footer>
  );
}
