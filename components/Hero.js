import Image from "next/image";
import React from "react";
import Section from "./Section";
import { motion, AnimatePresence } from "framer-motion";
import useWindowSize from "../hooks/UseWindowSize";
import Time from "./Time";

function Hero() {
  const size = useWindowSize();
  const isMobile = size.width < 1024;

  return (
    <Section>
      <div className="pt-[25vh] 2xl:pt-[20vh] w-full min-h-[78vh]">
        <div className="relative w-full h-full flex items-center justify-center">
          <AnimatePresence>
            <motion.div
              key="1"
              className="absolute top-0 w-[340px] md:w-[640px] 2xl:w-[1520px] bg-[#141414] aspect-[2.634] z-30"
              initial={{ transform: "scaleX(1)", originX: 1 }}
              animate={{ transform: "scaleX(0)", originX: 1 }}
              transition={{ duration: 1.5, delay: 0.2 }}
            />
            <div className="absolute top-0 z-20 w-[335px] md:w-[620px] 2xl:w-[1500px] aspect-[2.634]">
              <Image src="/hero/whiteHero.svg" alt="hero image" fill />
            </div>
            <motion.div
              key="2"
              className="absolute top-0 z-10 w-[335px] md:w-[620px] 2xl:w-[1500px] aspect-[2.634]"
              initial={{ x: 0 }}
              animate={{ x: isMobile ? 4 : 10 }}
              transition={{ duration: 1, delay: 1.8 }}
            >
              <Image src="/hero/blueHero.svg" alt="hero image" fill />
            </motion.div>
            <motion.div
              key="3"
              className="absolute top-0 z-0 w-[335px] md:w-[620px] 2xl:w-[1500px] aspect-[2.634]"
              initial={{ x: 0 }}
              animate={{ x: isMobile ? 8 : 20 }}
              transition={{ duration: 1, delay: 1.8 }}
            >
              <Image src="/hero/redHero.svg" alt="hero image" fill />
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="flex flex-col lg:flex-row justify-center md:justify-between items-center pt-[150px] md:pt-[280px] 2xl:pt-[627px]">
          <Time className="lg:hidden" />
          <div className="w-[260px] md:w-[400px] lg:hidden pt-[25px]">
            <div className="bg-[#B3B3B3] h-[0.5px]" />
            <motion.div
              className=" bg-[#B3B3B3] h-[2px] -mt-[1.5px]"
              initial={{ transform: "scaleX(0)", originX: 1 }}
              animate={{ transform: "scaleX(1)", originX: 1 }}
              transition={{ duration: 3.2 }}
            />
          </div>
          <motion.p
            className="text-[#B3B3B3] w-[260px] md:w-[400px] 2xl:w-[975px] 2xl:text-[28px] text-center lg:text-left pt-[10px] lg:pt-0"
            initial={{ y: "10%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
          >
            Hello, we are Merokket - a team of web developers and UI/UX
            designers who aim for exceptional visualization combined with
            flawless functionality.
          </motion.p>
          <div className="w-[0px] relative lg:w-1/3">
            <div className="bg-[#B3B3B3] h-[1px]" />
            <motion.div
              className=" bg-[#B3B3B3] h-[5px] -mt-[3px]"
              initial={{ transform: "scaleX(0)", originX: 1 }}
              animate={{ transform: "scaleX(1)", originX: 1 }}
              transition={{ duration: 3 }}
            />
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Hero;
