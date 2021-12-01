import styles from "../../styles/workDetail.module.css";

export default function Url({ title, url }) {
  return (
    <div>
      <h4>{title}</h4>
      <a href={url}>{url}</a>
    </div>
  );
}
