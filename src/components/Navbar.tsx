'use client';
import { Socials } from '@/constants';
import React from 'react';
import WeatherWidget from './WeatherWidget';
import clsx from 'clsx';



const Navbar = () => {

  return (
    <div className={clsx("fixed top-0 bg-transparent p-5  z-20 w-full items-center flex flex-col gap-4 md:flex-row md:gap-6 justify-between md:px-10 lg:px-20")}>
      {/* Логотип - скрыт на мобильных, виден на больших экранах */}
      <h1 className="text-white text-[28px] hidden lg:block">
        Mykola Nedilko<span className="text-red-500 text-[36px]">.</span>
      </h1>

      {/* Виджет погоды */}
      <div className="order-2 md:order-1 flex justify-center w-full md:w-auto">
        <WeatherWidget />
      </div>

      {/* Социальные иконки */}
      <div className="order-1 md:order-2 flex flex-row gap-4 md:gap-6">
        {Socials.map((social) => (
          <a
            key={social.name}
            href={social.href}
            className="transition-transform transform hover:scale-110"
          >
            <social.icon className="w-6 h-6 md:w-7 md:h-7 text-white hover:text-red-400" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
