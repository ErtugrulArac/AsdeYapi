"use client";
import React, { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const counters = [
    { value: 87, text: "%87 kullanıcı konfor artışı yaşadı" },
    { value: 77, text: "%77 daha az haşere problemi yaşadı" },
    { value: 90, text: "%90 memnuniyet oranı yakalandı" },
    { value: 85, text: "%85 olumlu geri bildirim alındı" },
];

const collageImages = [
    "a.webp",
    "b.webp",
    "c.webp",
    "d.webp",
];

export default function AboutSection() {
    const [progressValues, setProgressValues] = useState(counters.map(() => 0));
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervals = counters.map((counter, i) =>
            setInterval(() => {
                setProgressValues((prev) => {
                    const newProgress = [...prev];
                    if (newProgress[i] < counter.value) {
                        newProgress[i] += 1;
                    } else {
                        clearInterval(intervals[i]);
                    }
                    return newProgress;
                });
            }, 20)
        );
        return () => intervals.forEach(clearInterval);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % collageImages.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="bg-[#1b3527] text-white py-16 pt-40 max-md:pt-28 px-4 md:px-8 lg:px-20">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-12">
                {/* SOL */}
                <div className="flex-1 flex flex-col justify-between">
                    <div>
                        <h2 className="text-sm font-medium uppercase text-gray-300 mb-3 tracking-widest">
                            Asde Yapı Sineklik Sistemleri
                        </h2>
                        <h1 className="text-2xl max-md:w-full sm:text-3xl md:text-4xl font-bold mb-6 leading-relaxed">
                            Asde Yapı, sineklik sistemlerinde
                            <br className="hidden sm:block" /> yeni nesil çözümler sunar.
                            <br />
                            <span className="text-orange-400">
                                Modern tasarım ve <br /> yüksek kalite
                            </span>{" "}
                            ile yaşam
                            <br />
                             alanlarınızı korur,
                            <br />
                            <span className="text-orange-300">
                                konforu ve estetiği bir arada
                            </span>{" "}
                            sunar.
                        </h1>
                        <p className="text-gray-300 text-base md:text-lg leading-7 mb-8 max-w-2xl">
                            Ev ve iş yerleri için etkili, estetik ve uzun ömürlü sineklik
                            sistemleri sunuyoruz.
                        </p>
                    </div>

                    {/* Sayaçlar */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {counters.map((item, index) => (
                            <div key={index} className="flex flex-col items-center text-center">
                                <div className="w-20 h-20">
                                    <CircularProgressbar
                                        value={progressValues[index]}
                                        text={`${progressValues[index]}%`}
                                        styles={buildStyles({
                                            textSize: "16px",
                                            textColor: "#ffffff",
                                            pathColor: "#f97316",
                                            trailColor: "#374151",
                                        })}
                                    />
                                </div>
                                <p className="text-xs text-gray-300 mt-2 max-w-[100px]">
                                    {item.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* SAĞ */}
                <div className="flex-1 w-full flex justify-center items-start">
                    <div className="relative w-full max-w-md min-h-[300px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-[460px] rounded-xl overflow-hidden shadow-xl bg-gray-800">
                        {collageImages.map((img, idx) => (
                            <img
                                key={idx}
                                src={img}
                                alt={`Kolaj ${idx + 1}`}
                                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${currentIndex === idx ? "opacity-100" : "opacity-0"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
