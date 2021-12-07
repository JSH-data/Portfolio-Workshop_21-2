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
      <div>
        <img
          src="/images/contact/textleft.png"
          className={`${styles.bubble}`}
        />
        <div className={styles.itemleft}>
          <img
            src="/images/contact/github.png"
            id={styles.gits}
            className={`${styles.contact__icon} ${styles.gits}`}
          />
          <div className={styles.contact__text}>Github</div>
        </div>
      </div>

      <div>
        <img
          src="/images/contact/textright.png"
          className={`${styles.bubble} ${styles.blue}`}
        />
        <div className={styles.item}>
          <img
            src="/images/contact/linked.png"
            className={styles.contact__icon}
          />
          <div className={styles.contact__text}>LinkedIn</div>
        </div>
      </div>

      <div>
        <img
          src="/images/contact/textleft.png"
          className={`${styles.bubble}`}
        />
        <div className={styles.itemleft}>
          <img
            src="/images/contact/notion.png"
            className={styles.contact__icon}
          />
          <div className={styles.contact__text}>Notion Blog</div>
        </div>
      </div>

      <div>
        <img
          src="/images/contact/textright.png"
          className={`${styles.bubble} ${styles.blue}`}
        />
        <div className={styles.item}>
          <img
            src="/images/contact/email.png"
            className={styles.contact__icon}
          />
          <span className={styles.contact__text}>Email</span>
        </div>
      </div>
    </main>
  );
}
