import styles from "../../styles/item/ScrollTop.module.css";

export default function TopScroll() {
  const moveToTop = () => {
    const body = document.getElementsByTagName("body")[0];
    window.scroll({
      behavior: "smooth",
      left: 0,
      top: body.offsetTop,
    });
  };
  return (
    <div className={styles.scroll} onClick={moveToTop}>
      <img className={styles.arrow} src="/images/etc/arrow.png" />
    </div>
  );
}
