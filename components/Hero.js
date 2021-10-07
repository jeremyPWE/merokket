import Image from "next/image";
import React from "react";

function Hero({ toggleC }) {
  return (
    <div className="p-5 pt-14 md:flex sm:px-10 md:px-14 lg:px-20 xl:py-20 justify-center">
      <div className="flex flex-col md:flex-row md:max-w-3xl xl:max-w-6xl">
        <div className="hidden xl:flex pl-10 -mr-10">
          <div className="relative w-80 h-80 2xl:w-96 2xl:h-96">
            <Image
              className="z-0 object-contain"
              src="/hero1.png"
              alt="hero-image"
              layout="fill"
            />
          </div>
        </div>
        <div className="flex flex-col xl:justify-end">
          <div className="xl:text-center">
            <h2 className="pb-3">Hi! We are Merokket</h2>
            <p>
              a group of web developers and UI/UX designers, trying to create an
              exceptional visualization with a spot on functionality.
            </p>
          </div>
          <div className="pt-10 pb-14 flex justify-start md:justify-center">
            <button
              type="button"
              className="inline-flex justify-center py-3 px-10 md:px-14 border border-transparent shadow text-base font-medium rounded-2xl text-white bg-textPrimary hover:font-semibold hover:shadow-xl animate-all duration-200 ease-out"
              onClick={toggleC}
            >
              Contact us
            </button>
          </div>
        </div>
        <div className="flex justify-end items-center xl:items-end xl:pr-10 xl:-ml-10">
          <div className="relative w-60 h-28 sm:w-80 sm:h-40 2xl:w-96 2xl:h-48">
            <Image
              className="z-0 object-contain"
              src="/hero.png"
              alt="hero-image"
              layout="fill"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
