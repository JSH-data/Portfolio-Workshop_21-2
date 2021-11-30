import styles from "../../styles/Layout/footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__title}>
        Contact
        <div className={styles.decorator}></div>
      </div>
      <div className={styles.footer__icons}>
        <img
          className={styles.icons}
          src="/images/etc/contact/icon.png"
          alt=""
        />
      </div>
      <div className={styles.footer__text}>JSH - Portfolio</div>
    </footer>
  );
}
