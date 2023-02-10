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
            To begin the project, our team conducts an interview with the client
            to gather all necessary details and information. We then conduct
            thorough research on the project requirements, competitors, and
            gather references to develop a clear structure for the website.
          </p>
          <h3>02. Prototype & Design</h3>
          <p className="2xl:text-[28px] text-[#B3B3B3] 2xl:w-[920px] pb-[10px] 2xl:pb-[50px]">
            We create a prototype of the website, keeping in mind the user
            experience (UX). Upon approval, we develop the design concepts (UI)
            and select the best design for implementation.
          </p>
          <h3>03. Launch & Revise</h3>
          <p className="2xl:text-[28px] text-[#B3B3B3] 2xl:w-[920px] pb-[10px] 2xl:pb-[50px]">
            Once the design is finalized, we start developing the code, adding
            animations, integrating forms and services, and performing basic SEO
            setup. We rigorously test the website for errors, and upon
            successful completion, launch it to the public.
          </p>
        </div>
      </div>
    </Section>
  );
}

export default Process;
