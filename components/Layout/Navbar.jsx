import { useState } from "react";
import Image from "next/image";
import styles from "../../styles/Layout/nav.module.css";

export default function Nav() {
  const [onMenu, setOnMenu] = useState(false);

  const showMenu = () => {
    setOnMenu(true);
  };

  const closeMenu = () => {
    setOnMenu(false);
  };

  return (
    <div className={styles.nav}>
      <div className={styles.nav__logo}>JSH-Portfolio</div>
      <div className={styles.nav__menu} onClick={showMenu}></div>
      {onMenu && <div className={styles.menu__test} onClick={closeMenu}></div>}
    </div>
  );
}
