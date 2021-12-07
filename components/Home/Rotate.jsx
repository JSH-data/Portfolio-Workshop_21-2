import { useEffect, useRef } from "react";
import TextList from "../Item/TextList";
import styles from "../../styles/item/rotate.module.css";

export default function Rotate() {
  const dom = useRef(null);
  const scrollH = useRef(0);
  const moveScroll = (h) => {
    dom.current.scrollTo({
      top: h,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    const rotateText = setInterval(() => {
      if (scrollH.current == 244) scrollH.current = 0;
      else scrollH.current += 48.8;
      moveScroll(scrollH.current);
    }, 2000);
    return () => {
      clearInterval(rotateText);
    };
  }, []);

  return (
    <div className={styles.first}>
      <div className={styles.wrapper}>
        <div className={styles.self}>저는,</div>
        <div className={styles.box} ref={dom}>
          <TextList />
        </div>
        <div className={styles.name}>개발자 정승화입니다.</div>
      </div>
    </div>
  );
}
