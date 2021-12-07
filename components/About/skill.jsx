import { useEffect } from "react";

import styles from "../../styles/about.module.css";

export default function Skill({ images, closeMethod }) {
  const closeModal = () => {
    closeMethod(false);
    console.log("ss");
  };

  useEffect(() => {
    document.querySelector("body").style.overflow = "hidden";
    return () => {
      document.querySelector("body").style.overflow = "unset";
    };
  });
  return (
    <div className={styles.background} onClick={closeModal}>
      <div className={styles.skill__modal}>
        <div>name</div>
        {images.urls.map((v, i) => {
          return <img className={styles.skill__img} src={v} key={i} />;
        })}
        <div> 간단한 설명 </div>
      </div>
    </div>
  );
}
