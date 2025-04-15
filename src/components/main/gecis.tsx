import React from 'react'
import { Button } from "@/components/ui/button"

const gecis = () => {
    return (
        <div >
            <div className='flex justify-around text-white items-center'>
                <div className='flex flex-col space-y-10 '>
                    <p className='text-5xl font-bold leading-tight'>SİNEKLİK <br /> SİSTEMLERİNDE <br /> MODERN ÇÖZÜMLER </p>
                    <p className='text-xl'>Evlerinizde modern sineklik çözümleriyle <br /> sinekten arındırılmış bir yaşam alanı oluşturun</p>

                    {
                        <Button className="w-fit text-lg" variant="destructive">Ücretsiz Keşif Talep Et</Button>
                    }

                </div>
                <img className='w-96' src="kapımain.webp" alt="" />
            </div>
        </div>
    )
}

export default gecis