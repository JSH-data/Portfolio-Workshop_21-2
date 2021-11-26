import Image from "next/image";
import Footer from "../components/Layout/Footer";
import Nav from "../components/Layout/Navbar";

export default function About() {
  return (
    <>
      <Nav></Nav>
      <Image src="/test/about.png" width="300px" height="700px" />
      <div>잠시만요 이쪽은 아직 들어오시면 안됩니다 뒤로 꺼지세요!</div>
      <Footer></Footer>
    </>
  );
}
