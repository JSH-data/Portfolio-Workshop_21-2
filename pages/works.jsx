import Link from "next/link";
import Footer from "../components/Layout/Footer";
import Nav from "../components/Layout/Navbar";
import styles from "../styles/works.module.css";

export default function Works() {
  return (
    <>
      <Nav />
      <main className={styles.main}>
        <img src="/test/works.png" alt="a테스트" />
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
