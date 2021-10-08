import Head from "next/head";
import React, { useState } from "react";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Services from "../components/Services";
import FooterHook from "../components/FooterHook";
import Footer from "../components/Footer";
import Works from "../components/Works";

export default function Home() {
  const [isContact, setIsContact] = useState(false);
  const toggleC = () => {
    setIsContact(!isContact);
  };
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        {/*Seo*/}
        <meta
          name="google-site-verification"
          content="IUF2ms5XgzjoluJifmHlHM4rw7-ZbxViAk5_7T4Xmzo"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://merokket.id/" />
        <meta property="og:locale" content="en-US" />
        {/*title*/}
        <title>Merokket</title>
        {/*site name & desc*/}
        <meta property="og:site_name" content="Merokket" />
        <meta property="og:title" content="Merokket" key="title" />
        <meta
          name="og:description"
          content="A group of web developers and UI/UX designers, trying to create an exceptional visualization with a spot on functionality."
        />
        <meta
          name="description"
          content="A group of web developers and UI/UX designers, trying to create an exceptional visualization with a spot on functionality."
        />
        <meta
          data-react-helmet="true"
          property="og:image"
          content="https://www.merokket.id/og-image.png"
        />
        <link rel="icon" href="/icons/ico.png" />
      </Head>

      <div className="bg-bgOne">
        <Navigation toggleC={toggleC} isContact={isContact} />
        <Hero toggleC={toggleC} />
      </div>
      <Services />
      <Works />
      <FooterHook toggleC={toggleC} />
      <Footer toggleC={toggleC} />
    </div>
  );
}
