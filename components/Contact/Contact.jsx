import styles from "../../styles/contact.module.css";

export default function Contact({ image, text }) {
  return (
    <div>
      <img src={image} />
      <div>{text}</div>
    </div>
  );
}
