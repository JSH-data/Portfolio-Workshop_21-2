import Head from "next/head";
import Nav from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import TopScroll from "../components/Item/TopScroll";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
        ></meta>
      </Head>
      <Nav />
      <Component {...pageProps} />
      <TopScroll id="scroll" />
      <Footer />
    </>
  );
}

export default MyApp;
