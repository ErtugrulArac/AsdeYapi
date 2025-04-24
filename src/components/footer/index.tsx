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
      <div className="max-w-4xl mx-auto text-center mb-20">
        <h2 className="text-2xl font-semibold mb-2">Asde Yapı Gündemine Abone Ol</h2>
        <p className="text-gray-600 mb-6">Asde Yapı ile alakalı gelişmelerden haberdar olun.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <input
            type="email"
            placeholder="Mail Adresini Giriniz"
            className="w-full sm:w-80 px-4 py-3 rounded-md bg-gray-100 text-sm focus:outline-none"
          />
          <a href="https://www.whatsapp.com/channel/0029VaEO1GQLo4hp736e1Z3K">
            <button className="bg-[#ff7a00] hover:bg-[#ff7a00] text-white font-semibold py-3 px-8 rounded-md transition-all">
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
              <AccordionTrigger>Company</AccordionTrigger>
              <AccordionContent>
                About us, Careers, Press, Blog
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="product">
              <AccordionTrigger>Product</AccordionTrigger>
              <AccordionContent>
                Features, Integrations, Pricing, FAQ
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="resources">
              <AccordionTrigger>Resources</AccordionTrigger>
              <AccordionContent>
                Docs, Tutorials, Community, Guides
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="support">
              <AccordionTrigger>Support</AccordionTrigger>
              <AccordionContent>
                Contact, Help Center, Security
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="legal">
              <AccordionTrigger>Legal</AccordionTrigger>
              <AccordionContent>
                Terms, Privacy, Cookies, Licensing
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      {/* Social + Copyright */}
      <div className="mt-10 mb-4 text-center text-sm text-gray-400">
        <div className="flex justify-center gap-4 mb-4">
          <a href="">  <FaYoutube className="hover:text-black transition" /></a>
          <a href="">   <FaInstagram className="hover:text-black transition" /></a>
          <a href="">   <FaFacebookF className="hover:text-black transition" /></a>
          <a href="">   <FaTwitter className="hover:text-black transition" /></a>
        </div>
        <p>Flower Shop © 2023. All rights reserved.</p>
      </div>
    </footer>
  );
}
