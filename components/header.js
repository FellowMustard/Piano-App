import React, { useState } from "react";
import Head from "next/head";
function Header({ children }) {
  return (
    <>
      <Head>
        <title>Zeephiano</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Nanum+Pen+Script&display=swap"
          rel="stylesheet"
        ></link>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Zeephiano is a simple website that allows you to play piano on your own webiste."
        ></meta>
      </Head>
      {children}
    </>
  );
}

export default Header;
