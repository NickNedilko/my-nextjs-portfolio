import Image from 'next/image';


export const Certificates = () => {

  return (
   
    <div className='flex flex-col ml-10 mt-[550px] md:mt-[580px] min-h-screen justify-center md:ml-40'>
     <h1 className='text-3xl text-white text-center mb-10'>CERTIFICATES</h1> 
      <ul className='flex flex-col lg:flex-row gap-10 background-gray z-1 justify-center'>
        <li> 
            <Image width={350} height={500} className='cursor-pointer w-[300px] h-[450px] md:w-[350px] md:h-[500px]'  
            src='/assets/certificates/certificate.webp'
            alt='Fullstack developer certificate'
            />
        </li>
        <li> 
            <Image width={350} height={500} className='cursor-pointer w-[300px] h-[450px] md:w-[350px] md:h-[500px]'
            src='/assets/certificates/certificate_p2.webp' 
            alt='Sulpplement to Fullstack developer certificate'
            />
        </li>
        <li>
            <Image width={350} height={500} className='cursor-pointer w-[300px] h-[450px] md:w-[350px] md:h-[500px] mb-20 md:mb-20 xl:mb-0'
            src='/assets/certificates/certificate_p3.webp' 
            alt='Sulpplement to Fullstack developer certificate'
            />
        </li>
      </ul> 
    </div>
  )
}