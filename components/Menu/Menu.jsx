import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/menu.module.css";

export default function Menu({ setOnMenu }) {
  const [workDetail, setWorkDetail] = useState(false);
  const router = useRouter();
  const toggle = useRef(null);
  const closeMenu = () => setOnMenu(false);

  const moveToTras = () => {
    router.push("/works/tras");
    setOnMenu(false);
  };

  const moveToCtrlf = () => {
    router.push("/works/ctrlf");
    setOnMenu(false);
  };

  const moveToHome = () => {
    router.push("/");
    setOnMenu(false);
  };
  const moveToWorks = () => {
    router.push("/works");
    setOnMenu(false);
  };
  const moveToAbout = () => {
    router.push("/about");
    setOnMenu(false);
  };
  const moveToContact = () => {
    router.push("/contacts");
    setOnMenu(false);
  };

  const moveToReference = () => {
    router.push("/reference");
    setOnMenu(false);
  };
  const detailMenu = () => {
    if (workDetail) {
      toggle.current.innerText = "▽";
      setWorkDetail(false);
    } else {
      toggle.current.innerText = "△";
      setWorkDetail(true);
    }
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);
  return (
    <div className={styles.menu}>
      <div className={styles.back}></div>
      <div className={styles.text} onClick={closeMenu}>
        X
      </div>
      <div className={styles.text} onClick={moveToHome}>
        Home
      </div>
      <div className={styles.text} onClick={moveToAbout}>
        About
      </div>
      <div className={styles.text}>
        <span onClick={moveToWorks}> Works </span>{" "}
        <span className={styles.triangle} ref={toggle} onClick={detailMenu}>
          ▽
        </span>
        {workDetail && (
          <>
            <div className={styles.hidden} onClick={moveToTras}>
              &nbsp;&nbsp;Tras
            </div>{" "}
            <div onClick={moveToCtrlf}>&nbsp;&nbsp;CtrlF</div>
          </>
        )}
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
