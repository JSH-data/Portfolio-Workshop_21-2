import smoothscroll from "smoothscroll-polyfill";
import Head from "next/head";
import Nav from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import TopScroll from "../components/Item/TopScroll";
import { useEffect, useState } from "react";
import "../styles/globals.css";
import Splash from "../components/Item/Splash";

function MyApp({ Component, pageProps }) {
  const [splash, setSplash] = useState(true);

  useEffect(() => {
    smoothscroll.polyfill();
    setTimeout(() => {
      setSplash(false);
    }, 2500);
  }, []);
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
        ></meta>
      </Head>
      {splash && <Splash />}
      {!splash && (
        <>
          {" "}
          <Nav /> <Component {...pageProps} /> <Footer />{" "}
        </>
      )}
      <TopScroll id="scroll" />
    </>
  );
}

export default MyApp;
