import styles from "../../styles/about.module.css";

export default function Skill({ position, images }) {
  return (
    <div>
      <div className={styles.skill__name}>{position}</div>
      {images.map((v, i) => {
        return <img className={styles.skill__img} src={v} key={i} />;
      })}
    </div>
  );
}
