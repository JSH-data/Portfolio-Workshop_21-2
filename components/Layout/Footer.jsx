import { useRouter } from "next/router";

import styles from "../../styles/Layout/footer.module.css";

export default function Footer() {
  const router = useRouter();
  const moveToContact = () => {
    router.push("/contacts");
  };
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__title} onClick={moveToContact}>
        Contact
        <div className={styles.decorator}></div>
      </div>
      <div className={styles.footer__icons}>
        <a href="">
          <img
            src="/images/contact/github.png"
            className={`${styles.icon} ${styles.git}`}
          />
        </a>
        <a href="">
          <img src="/images/contact/notion.png" className={styles.icon} />
        </a>
        <a href="">
          <img src="/images/contact/linked.png" className={styles.icon} />
        </a>
        <a href="">
          <img src="/images/contact/email.png" className={styles.icon} />
        </a>
      </div>
      <div className={styles.footer__text}>JSH - Portfolio</div>
    </footer>
  );
}
