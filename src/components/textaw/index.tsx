import React from "react";

import { FlipWords } from "../ui/flip-words";



export default function FlipWordsDemo() {

    const words = ["konforlu", "dayanıklı", "yalıtımlı", "güvenli"];



    return (

        <div className="h-[11rem] overflow-y-hidden flex items-center justify-center px-1 overflow-hidden">

            <p className="text-3xl mx-auto max-md:text-2xl text-neutral-600 dark:text-neutral-400 font-normal flex flex-wrap items-baseline justify-center gap-x-1 leading-tight">

                <span>Dört mevsim</span>

                {/* sabit genişlik kutusu */}

                <span className="inline-flex   justify-center">

                    <FlipWords words={words} />

                </span>

                <span>yaşam alanları. 💪</span>

            </p>

        </div>

    );

}