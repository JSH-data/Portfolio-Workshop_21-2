import Head from "next/head";
import Road from "../components/Home/Road";
import Rotate from "../components/Home/Rotate";
import styles from "../styles/home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>JSH-PORTFOLIO</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Rotate />
        <Road />
      </main>
    </>
  );
}
