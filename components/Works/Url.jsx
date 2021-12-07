import styles from "../../styles/workDetail.module.css";

export default function Url({ title, url }) {
  return (
    <div className={styles.url}>
      <h4>{title}</h4>
      <div>
        <a href={url}>{url}</a>
      </div>
    </div>
  );
}
