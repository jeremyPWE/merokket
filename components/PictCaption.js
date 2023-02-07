import Image from "next/image";
import React from "react";

function PictCaption({ smallImg, title, desc, bigImg, className }) {
  return (
    <div className="w-full flex flex-col items-center">
      {smallImg ? (
        <div className="w-full relative aspect-[1.77] bg-gray-300">
          <Image src={smallImg} fill className="object-cover" alt={smallImg} />
        </div>
      ) : null}
      {bigImg ? (
        <div className={`relative bg-gray-300 ${className}`}>
          <Image src={bigImg} fill className="object-contain" alt={bigImg} />
        </div>
      ) : null}
      <div className="w-full border-t border-white flex justify-between items-start lg:items-center py-[15px] md:py-[20px] 2xl:py-[40px] mt-[40px] md:mt-[60px] 2xl:mt-[115px] 2xl:gap-x-[50px]">
        <h3 className="w-1/3">{title}</h3>
        <p className="2xl:w-[610px] 2xl:text-[24px] w-2/3">{desc}</p>
      </div>
    </div>
  );
}

export default PictCaption;
