import React from "react";
import Link from "next/link";
import Image from "next/image";
import Section from "./Section";

const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js

function scrollToTop() {
  if (!isBrowser()) return;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function Footer() {
  return (
    <Section className="pb-[25px] 2xl:pb-[70px] flex-col pt-[50px] 2xl:pt-[180px]">
      <div className="flex w-full justify-between">
        <div className="w-[205px] md:w-[400px] 2xl:w-[1100px]">
          <h1>
            Dream it. Make it. Love it.
            <br /> Contact us to not be limited.
          </h1>
        </div>
        <div className="flex flex-col items-end">
          <div className="border rounded-full  w-[16px] h-[16px] md:w-[24px] md:h-[24px] xl:w-[50px] xl:h-[50px] text-[12px] md:text-[18px] xl:text-[36px] flex items-center justify-center mt-[10px] 2xl:mt-[50px]">
            4
          </div>
          <div className="pt-[35px] hidden lg:flex flex-col">
            <Link href="/" passHref>
              <div className="pt-[30px] text-right">HOME</div>
            </Link>
            <Link href="/about" passHref>
              <div className="pt-[30px] text-right">ABOUT US</div>
            </Link>
            <Link href="/work" passHref>
              <div className="pt-[30px] text-right">OUR WORKS</div>
            </Link>
            <Link href="/contact" passHref>
              <div className="pt-[30px] text-right">CONTACT</div>
            </Link>
          </div>
        </div>
      </div>
      <div className="pt-[40px] w-full justify-between flex items-end">
        <div className="relative w-[140px] xl:w-[285px] aspect-[1.3857] hidden md:flex">
          <Image
            src="/icons/logo.svg"
            alt="logo"
            fill
            className="object-cover"
          />
        </div>
        <p
          className="border-b hidden xl:flex cursor-pointer"
          onClick={scrollToTop}
        >
          BACK TO TOP
        </p>
        <div>
          <p className="text-[16px]">
            <a
              href="https://wa.me/6281216329112?text=hallo%20merokket"
              target="_blank"
              rel="noopener noreferrer"
            >
              +62 812-1632-9112
            </a>{" "}
            /{" "}
            <a
              href="https://wa.me/6285156989761?text=hallo%20merokket"
              target="_blank"
              rel="noopener noreferrer"
            >
              +62 851-5698-9761
            </a>
          </p>
          <p className="text-[16px]">
            <a
              href="mailto:contact@merokket.id"
              target="_blank"
              rel="noopener noreferrer"
            >
              contact@merokket.id
            </a>
          </p>
        </div>
      </div>
      <p
        className="border-b xl:hidden pt-[30px] cursor-pointer"
        onClick={scrollToTop}
      >
        BACK TO TOP
      </p>
    </Section>
  );
}

export default Footer;
