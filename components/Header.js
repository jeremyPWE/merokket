import Head from "next/head";
import React from "react";

function Header({ title, description }) {
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
      <title>{title}</title>
      {/*site name & desc*/}
      <meta property="og:site_name" content="Merokket" />
      <meta property="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta name="description" content={description} />
      <meta
        data-react-helmet="true"
        property="og:image"
        content="https://merokket.id/icons/ico.png"
      />
      <link rel="icon" href="/icons/ico.png" />
    </Head>
  );
}

export default Header;
