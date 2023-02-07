import Image from "next/image";
import React from "react";

function BigPicture({ imgSrc, title, desc, link }) {
  return (
    <div className="w-full -mt-[62px] md:-mt-[80px] 2xl:-mt-[100px]">
      <div className="relative w-full aspect-[2.3] z-0 bg-gray-300">
        <Image src={imgSrc} fill className="object-cover" alt={imgSrc} />
      </div>
      <div className="relative flex flex-col items-center -mt-[20px] md:-mt-[30px] 2xl:-mt-[200px] z-10">
        <h1 className="text-[48px] md:text-[72px] 2xl:text-[256px] 2xl:leading-normal text-center">
          {title}
        </h1>
        <p className="w-[295px] md:w-[500px] 2xl:w-[800px] lg:text-[24px] pt-[25px] 2xl:pt-0 text-center text-[#B1B1B1]">
          {desc}
        </p>
        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="pb-[3px] border-b pt-[20px] 2xl:pt-[40px] flex items-center justify-center lg:text-[24px]"
          >
            <p>VISIT {title}</p>
            <svg
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[16px] h-[16px] lg:w-[24px] lg:h-[24px] mt-[3px] lg:mt-[2px] ml-[5px]"
            >
              <path
                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </a>
        ) : null}
      </div>
    </div>
  );
}

export default BigPicture;
