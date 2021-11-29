import { useState } from "react";
import { useRouter } from "next/router";
import Menu from "../Menu/Menu";
import styles from "../../styles/Layout/nav.module.css";

export default function Nav() {
  const router = useRouter();
  const [onMenu, setOnMenu] = useState(false);
  const showMenu = () => {
    setOnMenu(true);
  };

  const moveToHome = () => router.push("/");

  return (
    <div className={styles.nav}>
      <div className={styles.nav__logo} onClick={moveToHome}>
        JSH-Portfolio
      </div>
      <div className={styles.nav__menu} onClick={showMenu}></div>
      {onMenu && <Menu setOnMenu={setOnMenu} />}
    </div>
  );
}
