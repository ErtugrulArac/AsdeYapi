import * as React from "react"
import Gecis from "@/components/main/gecis"



import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

export default function CarouselDemo() {
    return (
        <div className="bg-gradient-to-r from-[#0D0D0D] to-[#1A1A1A]">
            <div className=" pt-36 pb-8 flex  items-center justify-around w-[90%] m-auto">
                <Carousel className="w-full max-w-7xl">
                    <CarouselContent>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <CarouselItem key={index}>
                                <div className="p-1">

                                    <Gecis />


                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </div>
    )
}