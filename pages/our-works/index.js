import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";
import DesignChallenge from "../../components/DesignChallenge";
import UiuxResearch from "../../components/UiuxResearch";
import RecentProject from "../../components/RecentProject";

export default function OurWorks() {
  const [isContact, setIsContact] = useState(false);
  const toggleC = () => {
    setIsContact(!isContact);
  };
  const router = useRouter();
  const { query } = router;
  const category = query.category || "design-challenge";
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
      <Navigation toggleC={toggleC} isContact={isContact} />

      <main className="flex flex-col pt-5 md:pt-10 flex-grow xl:pt-14">
        <h2 className="text-center">Our Works</h2>
        <div className="flex justify-center">
          <ul className="flex py-5 2xl:py-10 px-10 flex-wrap gap-5 justify-center items-center">
            <li
              className={`p-2 ring-1 ring-textPrimary rounded-lg active:bg-textPrimary active:text-white ${
                category === "design-challenge"
                  ? `bg-textPrimary text-white`
                  : null
              }`}
            >
              <Link href="/our-works?category=design-challenge">
                <a>Design Challenge</a>
              </Link>
            </li>
            <li
              className={`p-2 ring-1 ring-textPrimary rounded-lg active:bg-textPrimary active:text-white ${
                category === "recent-project"
                  ? `bg-textPrimary text-white`
                  : null
              }`}
            >
              <Link href="/our-works?category=recent-project">
                <a>Recent Project</a>
              </Link>
            </li>
            <li
              className={`p-2 ring-1 ring-textPrimary rounded-lg active:bg-textPrimary active:text-white ${
                category === "uiux-research"
                  ? `bg-textPrimary text-white`
                  : null
              }`}
            >
              <Link href="/our-works?category=uiux-research">
                <a>UI/UX research</a>
              </Link>
            </li>
          </ul>
        </div>

        {category === "design-challenge" ? <DesignChallenge /> : null}
        {category === "recent-project" ? <RecentProject /> : null}
        {category === "uiux-research" ? <UiuxResearch /> : null}
      </main>
      <Footer toggleC={toggleC} />
    </div>
  );
}
