import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/menu.module.css";

export default function Menu({ setOnMenu }) {
  const [workDetail, setWorkDetail] = useState(false);
  const router = useRouter();
  const closeMenu = () => setOnMenu(false);
  const moveToWorks = () => {
    router.push("/works");
    setOnMenu(false);
  };
  const moveToAbout = () => {
    router.push("/about");
    setOnMenu(false);
  };
  const moveToContact = () => {
    router.push("/contact");
    setOnMenu(false);
  };
  const moveToReference = () => {
    router.push("/reference");
    setOnMenu(false);
  };
  const detailMenu = () => {
    setWorkDetail(true);
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);
  return (
    <div className={styles.menu}>
      <div className={styles.text} onClick={closeMenu}>
        close
      </div>
      <div className={styles.text} onClick={moveToAbout}>
        About
      </div>
      <div className={styles.text} onClick={moveToWorks}>
        Works <span onClick={detailMenu}>^</span>
        {workDetail && <div>Tras CtrlF</div>}
      </div>
      <div className={styles.text} onClick={moveToContact}>
        Contact
      </div>
      <div className={styles.text} onClick={moveToReference}>
        Reference
      </div>
    </div>
  );
}
