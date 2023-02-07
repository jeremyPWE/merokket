import Link from "next/link";
import React from "react";
import Section from "./Section";

function Tagline() {
  return (
    <Section>
      <div className="flex w-full justify-between">
        <div className="">
          <h1 className="w-[250px] md:w-[400px] 2xl:w-[1100px]">
            Evolve your brand with spectacular digital foot print.
          </h1>
          <h3 className="py-[10px] md:py-[15px] 2xl:py-0 2xl:pt-[50px] 2xl:pb-[20px] w-[300px] md:w-[450px] 2xl:w-[1260px]">
            Websites/ E-Commerce/ Brand Design/ Digital Marketing/
          </h3>

          <p className="2xl:text-[28px] text-[#B3B3B3] w-[300px] md:w-[400px] 2xl:w-[920px] pb-[30px] lg:pb-[50px]">
            Sit down tight while we customize your online digital branding. Get
            your accurate user experience and personalized design. Not only we
            try to give your business a digital advantage in design. We also
            provide a good robust quality code.
          </p>
          <Link
            href="/about"
            className="text-[14px] 2xl:text-[24px] border-b pb-[4px]"
          >
            ABOUT US
          </Link>
        </div>
        <div className="border rounded-full w-[16px] h-[16px] md:w-[24px] md:h-[24px] xl:w-[50px] xl:h-[50px] text-[12px] md:text-[18px] xl:text-[36px] flex items-center justify-center">
          1
        </div>
      </div>
    </Section>
  );
}

export default Tagline;
