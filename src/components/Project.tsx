'use client'
import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { projectsData } from '@/lib/data'
import { useScroll, useTransform, motion } from 'framer-motion'

type ProjectProps = (typeof projectsData)[number]

export const Project = ({
  title,
  image,
  category,
 description,
livePage,
  technologies
}: ProjectProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1']
  })
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1])

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress
      }}
      className='flex flex-col items-center rounded-3xl bg-[#1f356f] p-4 xl:flex-row xl:justify-between'
    >
      <div className='pb-[60px]'>
        <h5 className='text-sm font-medium text-white capitalize'>{category}</h5>
        <h3 className='mt-4 text-[40px] text-white font-light'>{title}</h3>
              <p className='mb-4 mt-4 text-white max-w-xl'>{description}</p>
        <p className='mb-4 mt-4 max-w-xl text-white'><span className='font-semibold text-xl'>Technologies: </span>{technologies.join(', ')}</p> 
          </div>
          
      <div className='flex w-[360px] h-[360px] rotate-45 items-center z-50 justify-center rounded-[50px] outline-[3px] outline-offset-8 outline-blue-600 transition-all hover:outline'>
        <Link href={livePage} target='_blank'>
          <Image
            src={image}
            width={360}
            height={360}
            alt='project image'
            className='inset-0 z-20  object-contain rounded-[50px] bg-cover transition-all hover:translate-x-[18px] hover:-rotate-45 hover:shadow-lg'
          />
              </Link>
              
      </div>
    </motion.div>
  )
}