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
          className={styles.contact__icon}
        />
        <div className={styles.contact__text}>
          그동안 개발했던 코드를 올려놓은 깃허브입니다.{" "}
        </div>
      </div>
      <div className={`${styles.content} ${styles.right}`}>
        <img
          src="/images/contact/github.png"
          className={styles.contact__icon}
        />
        <div className={styles.contact__text}>
          그동안 개발했던 코드를 올려놓은 깃허브입니다.{" "}
        </div>
      </div>
      <div className={`${styles.content} ${styles.left}`}>
        <img
          src="/images/contact/github.png"
          className={styles.contact__icon}
        />
        <div className={styles.contact__text}>
          그동안 개발했던 코드를 올려놓은 깃허브입니다.{" "}
        </div>
      </div>
      <div className={`${styles.content} ${styles.right}`}>
        <img
          src="/images/contact/github.png"
          className={styles.contact__icon}
        />
        <div className={styles.contact__text}>
          그동안 개발했던 코드를 올려놓은 깃허브입니다.{" "}
        </div>
      </div>

      {/* <img
        className={styles.chat}
        src="/images/contact/textright.png
      "
      />
      <img
        className={`${styles.chat} ${styles.left}`}
        src="/images/contact/textleft.png
      "
      />
      <img
        className={styles.chat}
        src="/images/contact/textright.png
      "
      /> */}
      <img
        src="/images/contact/man.png"
        className={`${styles.img} ${styles.man}`}
      />
    </main>
  );
}
