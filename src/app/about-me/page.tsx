
import TechSlider from '@/components/TechSlider';
import Image from 'next/image';
import React from 'react'



const Page = () => {
    return (
        <div className='flex items-center  bg-[#0c011a] min-h-screen relative'>
            <div className='absolute left-5 top-[200px] animate-pulse duration-75'>
                <Image 
                    src='/assets/bulb.png'
                    alt='bulb'
                    width={260}
                    height={260}
                    className=' hidden md:block'
                />
            </div>
            <div className='flex flex-col gap-10 items-center justify-center relative'>
              <TechSlider/>
              {/* <Certificates /> */}
            </div>
        </div>
    )
}

export default Page;
