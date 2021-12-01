export default function Contact({ image, url }) {
  return (
    <div>
      <img src={image} />
      <div>{url}</div>
    </div>
  );
}
