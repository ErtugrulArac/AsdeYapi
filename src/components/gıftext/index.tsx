// components/AnimatedCounters.tsx
"use client";

import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { BsBuildingFillAdd, BsBuildingFillGear, BsPeopleFill } from "react-icons/bs";

const stats = [
  {
    label: "PROJE",
    end: 780,
    icon: <BsBuildingFillAdd className="text-orange-400 text-3xl mb-2 animate-bounce" />,
    description: "780'den fazla farklı proje başarıyla tamamlandı."
  },
  {
    label: "MONTAJ",
    end: 3200,
    icon: <BsBuildingFillGear className="text-orange-400 text-3xl mb-2 animate-bounce" />,
    description: "Sineklik, cam balkon ve PVC montajlarında 3200'ü aşkın uygulama."
  },
  {
    label: "MÜŞTERİ",
    end: 1150,
    icon: <BsPeopleFill className="text-orange-400 text-3xl mb-2 animate-bounce" />,
    description: "1150'den fazla memnun müşteriyle hizmet kalitemizi kanıtladık."
  },
];

export default function AnimatedCounters() {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section ref={ref} className="bg-black py-16 px-4 w-full font-mono">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row text-center">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="group relative flex-1 flex flex-col items-center px-6 py-6 transition duration-500 ease-in-out transform hover:scale-105 cursor-pointer"
          >
            {stat.icon}
            <p className="text-white font-bold text-lg tracking-wide group-hover:text-gray-100">
              {stat.label}
            </p>
            <div className="text-gray-400 text-3xl font-bold group-hover:text-white">
              {inView ? <CountUp end={stat.end} duration={3} separator="," /> : 0}+
            </div>
            <div className="mt-2 text-sm text-gray-400 max-w-xs group-hover:text-gray-200">
              {stat.description}
            </div>
            {index !== stats.length - 1 && (
              <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 w-px h-10 bg-white" />
            )}
            {index !== stats.length - 1 && (
              <div className="block md:hidden h-px bg-white mt-4 mx-auto" style={{ width: '90%' }} />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}