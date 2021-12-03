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
        <div className={styles.contact__text}>
          그동안 개발했던 코드를 올려놓은 깃허브입니다.{" "}
        </div>
      </div>
      <div className={`${styles.content} ${styles.right}`}>
        <img
          src="/images/contact/linked.png"
          className={styles.contact__icon}
        />
        <div className={styles.contact__text}>
          저의 더 자세한 경력을 갖고 있는 링크드인입니다.{" "}
        </div>
      </div>
      <div className={`${styles.content} ${styles.left}`}>
        <img
          src="/images/contact/notion.png"
          className={styles.contact__icon}
        />
        <div className={styles.contact__text}>
          공부하면서 막히는 부분, 새롭게 알게된 점을 정리한 블로그입니다.{" "}
        </div>
      </div>
      <div className={`${styles.content} ${styles.right}`}>
        <img src="/images/contact/email.png" className={styles.contact__icon} />
        <div className={styles.contact__text}>
          매일 하루에 두 번싹 확인하고 있는 이메일 주소입니다.{" "}
        </div>
      </div>
      <img
        src="/images/contact/man.png"
        className={`${styles.img} ${styles.man}`}
      />
    </main>
  );
}
