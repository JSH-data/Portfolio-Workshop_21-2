import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import styles from "../../styles/home.module.css";

export default function Road() {
  const upObserver = null;
  const rightObserver = null;
  const leftObserver = null;
  useEffect(() => {
    upObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) entry.target.classList.add("slideup");
        else entry.target.classList.remove("slideup");
      });
    });
    rightObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0)
          entry.target.classList.add("slideright");
        else entry.target.classList.remove("slideright");
      });
    });
    leftObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0)
          entry.target.classList.add("slideleft");
        else entry.target.classList.remove("slideleft");
      });
    });
    const upElement = document.querySelectorAll(".center");
    const rightElement = document.querySelectorAll(".left");
    const leftElement = document.querySelectorAll(".right");
    upElement.forEach((el) => {
      upObserver.observe(el);
    });
    rightElement.forEach((el) => {
      rightObserver.observe(el);
    });
    leftElement.forEach((el) => {
      leftObserver.observe(el);
    });
  }, []);

  const router = useRouter();

  const moveToAbout = () => {
    router.push("/about");
  };

  const moveToCtrlf = () => {
    router.push("/works/ctrlf");
  };

  const moveToTras = () => {
    router.push("/works/tras");
  };
  return (
    <>
      {/* <img className={styles.road} src="/images/home/road.png" />

      {/* <div className={styles.introduction}>
    <div className={styles.introduction__left}>
      <div className={styles.picture}>
        <img src="/images/about/mimo.jpg" className={styles.mimo} />
      </div>
      <div>도전하는 개발자</div>
    </div>
    <div className={styles.introduction__right}>
      프론트엔드는 모든 직군과 끊임 없이 소통하며 개발해야 한다고
      생각합니다. <br /> 미디어를 전공한 저는 소통하는 과정을 즐거워
      합니다.
      <div className={styles.btn__about} onClick={moveToAbout}>
        More
      </div>
    </div>
  </div> */}
      {/* <img src="/images/home/rock.png" className={styles.rock1} />
      <img src="/images/home/rock.png" className={styles.rock2} />
      <img src="/images/home/rock.png" className={styles.rock3} /> */}
      {/* <div className={`${styles.wrap__tras} test`}>
        <img
          className={styles.tras}
          src="/images/home/work_TRAS.png"
          onClick={moveToTras}
        />
      </div>
      <div className={`${styles.wrap__ctrlf} test`}>
        <img
          className={styles.ctrlf}
          src="/images/home/work_ctrlf.png"
          onClick={moveToCtrlf}
        />
      </div>{" "} */}
      <div className={styles.second}>
        <div className={styles.left}>
          <img
            className={`${styles.tras_img} left`}
            src="/images/home/work_TRAS.png"
            onClick={moveToTras}
          />
          <img
            className={`${styles.tras_img} ${styles.about_img} left`}
            src="/images/home/about.png"
            onClick={moveToAbout}
          />
        </div>
        <img className={`${styles.road} center`} src="/images/home/road.png" />
        <div className={styles.right}>
          <img
            className={`${styles.ctrlf_img} right`}
            src="/images/home/work_ctrlf.png"
            onClick={moveToCtrlf}
          />
        </div>
      </div>
    </>
  );
}
