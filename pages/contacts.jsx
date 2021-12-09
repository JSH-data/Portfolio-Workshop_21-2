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
      <div className={"slideright"}>
        <img
          src="/images/contact/textleft.png"
          className={`${styles.bubble}`}
        />
        <a href="https://github.com/JSH-data">
          <div className={styles.itemleft}>
            <img
              src="/images/contact/github.png"
              id={styles.gits}
              className={`${styles.contact__icon} ${styles.gits}`}
            />
            <div className={styles.contact__text}>Github</div>
          </div>
        </a>
      </div>

      <div className={"slideleft"}>
        <img
          src="/images/contact/textright.png"
          className={`${styles.bubble} ${styles.blue}`}
        />
        <a href="https://www.linkedin.com/in/%EC%8A%B9%ED%99%94-%EC%A0%95-981300220/">
          <div className={styles.item}>
            <img
              src="/images/contact/linked.png"
              className={styles.contact__icon}
            />
            <span className={styles.contact__text}>LinkedIn</span>
          </div>
        </a>
      </div>

      <div className={"slideright"}>
        <img
          src="/images/contact/textleft.png"
          className={`${styles.bubble}`}
        />
        <a href="https://fluff-secretary-40e.notion.site/SeungHwa-log-97bc45a86dbb45c1b4b398e5f377b636">
          <div className={styles.itemleft}>
            <img
              src="/images/contact/notion.png"
              className={styles.contact__icon}
            />
            <div className={styles.contact__text}>Notion Blog</div>
          </div>
        </a>
      </div>

      <div className={"slideleft"}>
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
