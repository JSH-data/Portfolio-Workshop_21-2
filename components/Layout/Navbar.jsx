import styles from "../../styles/Layout/nav.module.css";

export default function Nav() {
  return (
    <div className={styles.nav}>
      <div className={styles.nav__logo}>JSH-Portfolio</div>
      <div className={styles.nav__menu}></div>
    </div>
  );
}
