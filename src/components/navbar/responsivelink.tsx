import React from 'react'
import { RiHome5Line } from "react-icons/ri";
import { CiBoxList } from "react-icons/ci";
import { RiContactsLine } from "react-icons/ri";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { FaRegComment } from "react-icons/fa6";



const responsivelink = () => {
    return (
        <div className='gap-11   rounded-lg px-1 py-6 flex w-full flex-col justify-start'>
            <a title='Anasayfa qr menü' className='flex  items-center gap-6 text-lg font-semibold' href="/">
                <RiHome5Line size={30} /> Anasayfa
            </a>
            <a title='Asde yapı Pvc Sistemleri' className='flex  items-center gap-6 text-lg font-medium opacity-90' href="https://www.asdeyapi.com/#pvc">
                <CiBoxList size={30} />Pvc Kapı Pencere 
            </a> <a title='Asde Yapı Sineklik Sistemleri' className='flex  items-center gap-6 text-lg font-medium opacity-90' href="https://www.asdeyapi.com/#sineklik">
                <RiContactsLine size={30} /> Sineklik
            </a> 
             <a title='Asde Yapı Cambalkon Sistemleri' className='flex  items-center gap-6 text-lg font-medium opacity-90' href="https://www.asdeyapi.com/#cambalkon">
                <FaRegComment size={30} /> Cambalkon
            </a>

        </div>
    )
}

export default responsivelink