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
        <title>Merokket</title>
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
