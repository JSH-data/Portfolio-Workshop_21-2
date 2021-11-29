import { useEffect, useRef } from "react";
import styles from "../../styles/item/dottedLine.module.css";

export default function DottedLine({ width, right, bottom }) {
  const line = useRef(null);

  useEffect(() => {
    line.current.style.width = width;
    line.current.style.right = right;
    line.current.style.bottom = bottom;
  }, []);
  return <hr ref={line} className={styles.line} />;
}
