import Image from "next/image";
import Link from "next/link";
import React from "react";

function Showcase() {
  return (
    <div className="relative w-full flex flex-col items-center justify-center">
      <div className="absolute top-0 left-0 w-full -z-10">
        <div className="relative flex overflow-x-hidden">
          <div className="animate-marquee flex whitespace-nowrap gap-[8px] pl-[8px] 2xl:gap-[20px] 2xl:pl-[20px]">
            <div className="relative w-[140px] md:w-[220px] 2xl:w-[409px] aspect-[1.957]">
              <Image
                src="/marquee/top1.png"
                alt="marquee item 1"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-[140px] md:w-[220px] 2xl:w-[409px] aspect-[1.957]">
              <Image
                src="/marquee/top2.png"
                alt="marquee item 2"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-[140px] md:w-[220px] 2xl:w-[409px] aspect-[1.957]">
              <Image
                src="/marquee/top3.png"
                alt="marquee item 3"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-[140px] md:w-[220px] 2xl:w-[409px] aspect-[1.957]">
              <Image
                src="/marquee/top4.png"
                alt="marquee item 4"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-[140px] md:w-[220px] 2xl:w-[409px] aspect-[1.957]">
              <Image
                src="/marquee/top5.png"
                alt="marquee item 5"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex  gap-[8px] pl-[8px] 2xl:gap-[20px] 2xl:pl-[20px]">
            <div className="relative w-[140px] md:w-[220px] 2xl:w-[409px] aspect-[1.957]">
              <Image
                src="/marquee/top1.png"
                alt="marquee item 1"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-[140px] md:w-[220px] 2xl:w-[409px] aspect-[1.957]">
              <Image
                src="/marquee/top2.png"
                alt="marquee item 2"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-[140px] md:w-[220px] 2xl:w-[409px] aspect-[1.957]">
              <Image
                src="/marquee/top3.png"
                alt="marquee item 3"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-[140px] md:w-[220px] 2xl:w-[409px] aspect-[1.957]">
              <Image
                src="/marquee/top4.png"
                alt="marquee item 4"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-[140px] md:w-[220px] 2xl:w-[409px] aspect-[1.957]">
              <Image
                src="/marquee/top5.png"
                alt="marquee item 5"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[72px] md:top-[125px] 2xl:top-[209px] left-0 w-full -z-10">
        <div className="relative flex overflow-x-hidden">
          <div className="pt-[8px] 2xl:pt-[35px] animate-marquee3 flex whitespace-nowrap gap-[8px] pl-[8px] 2xl:gap-[30px] 2xl:pl-[30px]">
            <div className="relative w-[160px] md:w-[306px] 2xl:w-[558px] aspect-[1.641]">
              <Image
                src="/marquee/mid1.png"
                alt="marquee item 1"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-[160px] md:w-[306px] 2xl:w-[558px] aspect-[1.641]">
              <Image
                src="/marquee/mid2.png"
                alt="marquee item 2"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-[160px] md:w-[306px] 2xl:w-[558px] aspect-[1.641]">
              <Image
                src="/marquee/mid3.png"
                alt="marquee item 3"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-[160px] md:w-[306px] 2xl:w-[558px] aspect-[1.641]">
              <Image
                src="/marquee/mid4.png"
                alt="marquee item 4"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-[160px] md:w-[306px] 2xl:w-[558px] aspect-[1.641]">
              <Image
                src="/marquee/mid5.png"
                alt="marquee item 5"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="absolute top-0 pt-[8px] 2xl:pt-[35px] animate-marquee4 whitespace-nowrap flex gap-[8px] pl-[8px] 2xl:gap-[30px] 2xl:pl-[30px]">
            <div className="relative w-[160px] md:w-[306px] 2xl:w-[558px] aspect-[1.641]">
              <Image
                src="/marquee/mid1.png"
                alt="marquee mid 1"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-[160px] md:w-[306px] 2xl:w-[558px] aspect-[1.641]">
              <Image
                src="/marquee/mid2.png"
                alt="marquee item 2"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-[160px] md:w-[306px] 2xl:w-[558px] aspect-[1.641]">
              <Image
                src="/marquee/mid3.png"
                alt="marquee item 3"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-[160px] md:w-[306px] 2xl:w-[558px] aspect-[1.641]">
              <Image
                src="/marquee/mid4.png"
                alt="marquee item 4"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-[160px] md:w-[306px] 2xl:w-[558px] aspect-[1.641]">
              <Image
                src="/marquee/mid5.png"
                alt="marquee item 5"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[178px] md:top-[330px] 2xl:top-[584px] left-0 w-full -z-10">
        <div className="relative flex overflow-x-hidden">
          <div className="animate-marquee pt-[8px] 2xl:pt-[35px] flex whitespace-nowrap gap-[8px] pl-[8px] 2xl:gap-[20px] 2xl:pl-[20px]">
            <div className="relative w-[140px] md:w-[220px] 2xl:w-[409px] aspect-[1.957]">
              <Image
                src="/marquee/bot1.png"
                alt="marquee item 1"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-[140px] md:w-[220px] 2xl:w-[409px] aspect-[1.957]">
              <Image
                src="/marquee/bot2.png"
                alt="marquee item 2"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-[140px] md:w-[220px] 2xl:w-[409px] aspect-[1.957]">
              <Image
                src="/marquee/bot3.png"
                alt="marquee item 3"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-[140px] md:w-[220px] 2xl:w-[409px] aspect-[1.957]">
              <Image
                src="/marquee/bot4.png"
                alt="marquee item 4"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-[140px] md:w-[220px] 2xl:w-[409px] aspect-[1.957]">
              <Image
                src="/marquee/bot5.png"
                alt="marquee item 5"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="absolute top-0 pt-[8px] 2xl:pt-[35px] animate-marquee2 whitespace-nowrap flex gap-[8px] pl-[8px] 2xl:gap-[20px] 2xl:pl-[20px]">
            <div className="relative w-[140px] md:w-[220px] 2xl:w-[409px] aspect-[1.957]">
              <Image
                src="/marquee/bot1.png"
                alt="marquee item 1"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-[140px] md:w-[220px] 2xl:w-[409px] aspect-[1.957]">
              <Image
                src="/marquee/bot2.png"
                alt="marquee item 2"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-[140px] md:w-[220px] 2xl:w-[409px] aspect-[1.957]">
              <Image
                src="/marquee/bot3.png"
                alt="marquee item 3"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-[140px] md:w-[220px] 2xl:w-[409px] aspect-[1.957]">
              <Image
                src="/marquee/bot4.png"
                alt="marquee item 4"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-[140px] md:w-[220px] 2xl:w-[409px] aspect-[1.957]">
              <Image
                src="/marquee/bot5.png"
                alt="marquee item 5"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-[258px] md:w-[450px] 2xl:w-[828px] aspect-square flex flex-col items-center justify-center relative bg-[#141414]">
        <div className="border rounded-full w-[16px] h-[16px] md:w-[24px] md:h-[24px] xl:w-[50px] xl:h-[50px] text-[12px] md:text-[18px] xl:text-[36px] flex items-center justify-center absolute top-[10px] right-[10px] 2xl:top-[35px] 2xl:right-[35px]">
          2
        </div>
        <div className="flex flex-col items-center">
          <div className="relative w-[42px] md:w-[64px] 2xl:[w-97px] aspect-[1.3857]">
            <Image
              src="/icons/logo.svg"
              alt="logo"
              fill
              className="object-cover"
            />
          </div>
          <h1 className="py-[5px] 2xl:py-[15px]">Showcase</h1>
          <p className="2xl:text-[28px] text-[#B3B3B3] w-[200px] md:w-[320px] 2xl:w-[660px] pb-[15px] 2xl:pb-[30px] text-center">
            See what our team can do on both design and coding. Here are our
            recent work that we proud of.
          </p>
          <Link
            href="/work"
            className="text-[14px] md:text-[18px] 2xl:text-[24px] border-b pb-[4px]"
          >
            EXPAND
          </Link>
        </div>
        <div className="bg-black blur-[50px] w-[275px] h-[258px] md:w-[540px] md:h-[450px] 2xl:w-[1000px] 2xl:h-[828px] opacity-40 absolute top-0 -z-[1]"></div>
      </div>
    </div>
  );
}

export default Showcase;
