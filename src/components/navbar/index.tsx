
import Link from 'next/link'
import Linkler from './linkler'
import Mobilelink from './mobilelink'
import Arlan from "@/components/navbar/ar"


const index = () => {
    return (
        <div className='bg-black fixed flex items-center top-0 w-full z-50 h-20 shadow-lg'>
            <div className='flex items-center justify-between w-[80%] m-auto max-md:w-[90%] max-lg:w-[90%] max-xl:w-[85%]'>
                <div className='flex gap-5'>
                    <Link title='Arlan medya qr anasayfa' href="/">
                    <img className='w-24  max-md:w-16' src="asdeyazısız.png" alt="Arlan Medya logo" />
                    </Link>

                    <div className='flex items-center gap-7 max-md:hidden '>
                        <Linkler />
                    </div>
                </div>
                <div className='flex items-center  gap-7 md:hidden'><Mobilelink /></div>
                <div className='max-md:hidden'>
                    <Arlan />
                </div>
            </div>

        </div>
    )
}

export default index