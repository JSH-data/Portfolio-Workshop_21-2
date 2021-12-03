import Contact from "../components/Contact/Contact";
import { useEffect } from "react";
import styles from "../styles/contact.module.css";

export default function Contacts() {
  useEffect(() => {
    document.querySelector("footer").style.display = "none";
    return () => {
      document.querySelector("footer").style.display = "flex";
    };
  }, []);

  return (
    <main className={styles.contact}>
      <div className={`${styles.content} ${styles.left}`}>
        <img
          src="/images/contact/github.png"
          id={styles.gits}
          className={`${styles.contact__icon} ${styles.gits}`}
        />
        <div className={styles.contact__text}>Github</div>
      </div>
      <div className={`${styles.content} ${styles.right}`}>
        <img
          src="/images/contact/linked.png"
          className={styles.contact__icon}
        />
        <div className={styles.contact__text}>LinkedIn</div>
      </div>
      <div className={`${styles.content} ${styles.left}`}>
        <img
          src="/images/contact/notion.png"
          className={styles.contact__icon}
        />
        <div className={styles.contact__text}>Notion Blog</div>
      </div>
      <div className={`${styles.content} ${styles.right}`}>
        <img src="/images/contact/email.png" className={styles.contact__icon} />
        <div className={styles.contact__text}>Email</div>
      </div>
      <img
        src="/images/contact/man.png"
        className={`${styles.img} ${styles.man}`}
      />
    </main>
  );
}
