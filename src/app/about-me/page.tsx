import Image from 'next/image';
import React from 'react'



const Page = () => {
    return (
        <div className='flex items-center  bg-[#0c011a] h-screen overflow-hidden'>
    
            <div className='absolute left-5 bottom-45 animate-pulse duration-75'>
                <Image 
                    src='/assets/bulb.png'
                    alt='bulb'
                    width={260}
                    height={260}
                    className='w-full h-full hidden md:block'
                />
            </div>
        </div>
    )
}

export default Page;
