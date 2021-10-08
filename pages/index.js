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
        <meta charset="UTF-8" />
        <meta
          name="google-site-verification"
          content="IUF2ms5XgzjoluJifmHlHM4rw7-ZbxViAk5_7T4Xmzo"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/icons/ico.png" />
        <title>Merokket</title>
        <meta property="og:title" content="Merokket" key="title" />
        <meta
          name="description"
          content="A group of web developers and UI/UX designers, trying to create an exceptional visualization with a spot on functionality."
        ></meta>
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
