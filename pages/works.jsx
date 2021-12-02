import Work from "../components/Works/work.jsx";
import styles from "../styles/works.module.css";

export default function Works() {
  return (
    <>
      <main className={styles.work__list}>
        <div className={styles.works__catergory}>
          <span>
            Develop<div className={styles.deco}></div>
          </span>
          &nbsp;&nbsp;
          <span>
            Design<div className={styles.deco}></div>
          </span>
          &nbsp;&nbsp;
          <span>
            Video<div className={styles.deco}></div>
          </span>
          &nbsp;
        </div>
        <Work
          image={"/images/work/tras_page.png"}
          title={"Tras"}
          summary={"Front-end, CI/CD"}
        />
        <Work
          image={"/images/work/ctrlf_page.png"}
          title={"Ctrlf"}
          summary={"Front-end, CI/CD"}
        />
      </main>
    </>
  );
}
