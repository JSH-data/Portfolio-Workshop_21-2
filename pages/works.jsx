import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Layout/Footer";
import Nav from "../components/Layout/Navbar";
import styles from "../styles/works.module.css";

export default function Works() {
  return (
    <>
      <Nav />
      <main className={styles.main}>
        <Image src="/test/works.png" width="300px" height="700px" />
      </main>
      <Link href="/works/[name]" as="/works/tras">
        TRAS
      </Link>
      <Link href="/works/[name]" as="/works/ctrlf">
        CtrlF
      </Link>
      <Footer />
    </>
  );
}
