import styles from "../../styles/contact.module.css";

export default function Contact({ image, url }) {
  return (
    <div>
      <img src={image} />
      <div>{url}</div>
    </div>
  );
}
