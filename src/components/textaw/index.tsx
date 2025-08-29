import React from "react";
import { FlipWords } from "../ui/flip-words";

export default function FlipWordsDemo() {
  const words = ["konforlu", "dayanıklı", "yalıtımlı", "güvenli"];

  return (
    <div className=" h-[11rem] flex justify-center items-center px-4">
      <div className="text-4xl mx-auto font-normal max-md:text-center max-md:max-w-[80%] max-md:text-2xl text-neutral-600 dark:text-neutral-400">
        Dört mevsim...
        <FlipWords words={words} /> 
        yaşam alanları. 💪
      </div>
    </div>
  );
}
