import { Socials } from '@/constants';
import React from 'react';





const Navbar = () => {
    return (
        <div className='fixed top-0 bg-transparent w-full items-center flex gap-5 md:justify-between md:px-60 p-5 z-20'>
            <h1 className='text-white text-[40px]'>
               Mykola Nedilko<span className='text-red-500 text-[50px]'>.</span>
            </h1>
            <div className=' flex flex-row gap-6'>
                {Socials.map((social) =>
                    <a 
                        key={social.name}
                        href={social.href}>
                        <social.icon
                        className='w-7 h-7 text-white hover:text-red-400'
                        />
                </a>
                  
)}
            </div>
        </div>
    )
}
export default Navbar;