// components/Footer.tsx
"use client";

import React from "react";
import { FaYoutube, FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import { Plus } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white w-full text-black font-sans pt-16 px-6">
      {/* Newsletter */}
      <div className="max-w-4xl mx-auto text-center mb-20">
        <h2 className="text-2xl font-semibold mb-2">Join our newsletter</h2>
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
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between gap-8 border-t pt-10">
        {/* Left: Logo & Slogan */}
        <div className="sm:w-1/3">
          <h3 className="text-2xl font-bold mb-2">
            <span className="text-black">flow</span>
            <span className="text-gray-400">er</span>
            <span className="text-black">shop</span>
          </h3>
          <p className="text-gray-500 text-sm max-w-xs">
            Design a footer to provide digital experiences that creates a happy world.
          </p>
        </div>

        {/* Right: Sections */}
        <div className="sm:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {["Company", "Product", "Resources", "Support", "Legal"].map((item, index) => (
            <div key={index} className="border-t pt-4 flex justify-between items-center">
              <span className="text-sm font-medium">{item}</span>
              <Plus size={18} />
            </div>
          ))}
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