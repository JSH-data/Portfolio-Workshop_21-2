import styles from "../styles/reference.module.css";

export default function Reference() {
  return (
    <main className={styles.reference}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Layout Reference</h2>
        <a href="https://www.cssdesignawards.com/wotd-award-winners">
          https://www.cssdesignawards.com/wotd-award-winners
        </a>
      </div>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Color Reference</h2>
        <a href="https://www.behance.net/gallery/108846577/Infographic-Facts-about-Formula-1-in-Sochi">
          https://www.behance.net/gallery/108846577/Infographic-Facts-about-Formula-1-in-Sochi
        </a>
      </div>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Graphic Reference</h2>
        <a href="https://dribbble.com/shots/4483411-My-Favourite-Toy">
          https://dribbble.com/shots/4483411-My-Favourite-Toy
        </a>
        <a href="https://www.behance.net/gallery/125476331/HAMPUT">
          https://www.behance.net/gallery/125476331/HAMPUT
        </a>
      </div>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Typo Reference</h2>
        <a href="http://www.nixgon.com/nixgon-fonts">
          http://www.nixgon.com/nixgon-fonts
        </a>
        <a href="https://chdolbom.org/wp/%EB%B0%9C%EA%B0%84%EB%AC%BC/?uid=759&mod=document&pageid=1">
          https://chdolbom.org/wp/%EB%B0%9C%EA%B0%84%EB%AC%BC/?uid=759&mod=document&pageid=1
        </a>
      </div>
    </main>
  );
}
