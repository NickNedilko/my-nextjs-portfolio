import Image from 'next/image';


export const Certificates = () => {

  return (
   
    <div className='flex flex-col ml-40 mt-[600px] min-h-screen'>
     <h1 className='text-3xl text-white text-center mb-10'>CERTIFICATES</h1> 
      <ul className='grid grid-cols-3 gap-10 background-gray z-1'>
        <li className='bg-orange-200'> 
            <Image width={350} height={500} className='cursor-pointer h'  
            src='/assets/certificates/certificate.webp'
            alt='Fullstack developer certificate'
            />
        </li>
        <li> 
            <Image width={350} height={500} 
            src='/assets/certificates/certificate_p2.webp' 
            alt='Sulpplement to Fullstack developer certificate'
            />
        </li>
        <li>
            <Image width={350} height={500} 
            src='/assets/certificates/certificate_p3.webp' 
            alt='Sulpplement to Fullstack developer certificate'
            />
        </li>
      </ul>
     
    </div>
  )
}