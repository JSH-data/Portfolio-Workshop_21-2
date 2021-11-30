import { useRouter } from "next/router";
import styles from "../../styles/works.module.css";

export default function Work({ image, title, summary }) {
  const router = useRouter();

  const moveToDetail = () => {
    router.push(`/works/${title}`);
  };

  return (
    <div className={styles.work}>
      <img
        className={styles.work__image}
        src={`${image}`}
        onClick={moveToDetail}
      />
      <div className={styles.work__title} onClick={moveToDetail}>
        {title}
      </div>
      <div className={styles.work__summary} onClick={moveToDetail}>
        {summary}
      </div>
    </div>
  );
}
