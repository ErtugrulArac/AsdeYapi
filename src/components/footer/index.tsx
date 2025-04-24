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
        <h2 className="text-2xl font-semibold mb-2">Asdem Yapı İle İletişime Geç</h2>
        <p className="text-gray-600 mb-6">We’ll send you updates once per week. No spam</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-80 px-4 py-3 rounded-md bg-gray-100 text-sm focus:outline-none"
          />
          <button className="bg-violet-500 hover:bg-violet-600 text-white font-semibold py-3 px-8 rounded-md transition-all">
            SUBSCRIBE
          </button>
        </div>
      </div>

      {/* Footer Main */}
      <div className="max-w-6xl mx-auto border-t pt-10 flex flex-col sm:flex-row justify-between gap-8">
        {/* Logo + Slogan */}
        <div className="sm:w-1/3">
          <h3 className="text-2xl font-bold mb-2">
            <span className="text-black">As</span>
            <span className="text-[#ff7a00]">dem</span>
            <span className="text-black">Yapı</span>
          </h3>
          <p className="text-gray-500 text-sm max-w-xs">
            Design a footer to provide digital experiences that creates a happy world.
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
          <FaYoutube className="hover:text-black transition" />
          <FaInstagram className="hover:text-black transition" />
          <FaFacebookF className="hover:text-black transition" />
          <FaTwitter className="hover:text-black transition" />
        </div>
        <p>Flower Shop © 2023. All rights reserved.</p>
      </div>
    </footer>
  );
}
