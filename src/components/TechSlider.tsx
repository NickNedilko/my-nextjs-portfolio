"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import {TechData } from "@/constants";
import Image from "next/image";


const TechSlider = () => {
  return (
    <div className="absolute right-20 md:bottom-60 md:right-40 w-[70%] md:w-[60%] z-50">
      <h1 className="text-3xl text-white text-center mb-10">TechSkills</h1>
      <Swiper 
        breakpoints={{
          340: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          700: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
        freeMode={true}
        navigation={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination, Autoplay]}
      >
        {TechData.map((item) => (
          <SwiperSlide key={item.title} className="gap-4">
            <div className="rounded-md cursor-pointer flex flex-col justify-center gap-6 mb-10 group relative text-white shadow-lg h-[200px] w-[160px] px-6 py-8 md:h-[230px] md:w-[180px] overflow-hidden">
              <div className="absolute inset-0 bg-red-500 opacity-0 group-hover:opacity-50" />
              <div className="relative flex flex-col gap-5 items-center">
                <Image src={item.icon} alt={item.title} width={80} height={80} className="w-[80px] h-[80px] md:w-[100px] md:h-[100px]"/>
                <h1 className="text-xl lg:text-2xl text-center">{item.title}</h1>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TechSlider;