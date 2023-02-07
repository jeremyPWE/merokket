import Head from "next/head";
import React from "react";

function Header({ ...props }) {
  return (
    <Head>
      <meta
        name="google-site-verification"
        content="IUF2ms5XgzjoluJifmHlHM4rw7-ZbxViAk5_7T4Xmzo"
      />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://merokket.id/" />
      <meta property="og:locale" content="en-US" />
      {/*title*/}
      <title>Merokket | Web Developer & UI/UX Designer</title>
      {/*site name & desc*/}
      <meta property="og:site_name" content="Merokket" />
      <meta
        property="og:title"
        content="Merokket | Web Developer & UI/UX Designer"
      />
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
  );
}

export default Header;
