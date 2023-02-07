import React from "react";
import Section from "../components/Section";

function Process() {
  return (
    <Section>
      <div className="flex w-full justify-between">
        <div>
          <div className="border rounded-full  w-[16px] h-[16px] md:w-[24px] md:h-[24px] xl:w-[50px] xl:h-[50px] text-[12px] md:text-[18px] xl:text-[36px] flex items-center justify-center mt-[12px] 2xl:mt-[50px]">
            3
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-[34px] md:w-[58px] 2xl:w-[131px] aspect-[1.247] -ml-[8px] md:-ml-[16px] mt-[100px] 2xl:-ml-[40px] 2xl:mt-[200px]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-[34px] md:w-[58px] 2xl:w-[131px] aspect-[1.247] -ml-[8px] md:-ml-[16px] mt-[100px] md:mt-[120px] 2xl:-ml-[40px] 2xl:mt-[200px]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
        <div className="w-[240px] md:w-[450px] 2xl:w-[1000px]">
          <h1 className="pb-[10px] 2xl:pb-[50px]">Work Process</h1>
          <h3>01. Brief & Analysis</h3>
          <p className="2xl:text-[28px] text-[#B3B3B3] 2xl:w-[920px] pb-[10px] 2xl:pb-[50px]">
            We conduct an interview with the users, and then learn all the
            details of the project. We start by researching the competitors,
            collect refferences, and developt the structure for the site.
          </p>
          <h3>02. Prototype & Design</h3>
          <p className="2xl:text-[28px] text-[#B3B3B3] 2xl:w-[920px] pb-[10px] 2xl:pb-[50px]">
            We build the website prototype by taking into the account the User
            Experiences (UX). After approval we proceed by developing the design
            cncepts (UI),then start the development based on the selected design
            concept.
          </p>
          <h3>03. Launch & Revise</h3>
          <p className="2xl:text-[28px] text-[#B3B3B3] 2xl:w-[920px] pb-[10px] 2xl:pb-[50px]">
            After the design is finalized, we proceed building code for the
            site, develop animation, connect forms and sevices, and perform
            basic seo setup. We test the site for error and then launch it.
          </p>
        </div>
      </div>
    </Section>
  );
}

export default Process;
