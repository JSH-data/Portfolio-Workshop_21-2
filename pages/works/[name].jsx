import { useEffect, useState } from "react";
import Tras from "../../components/Works/Tras";
import Ctrlf from "../../components/Works/Ctrlf";

export default function Workdetail() {
  const [work, setWork] = useState(null);
  useEffect(() => {
    setWork(document.location.href.split("/")[4]);
  }, [document.location.href]);
  return <>{work == "tras" ? <Tras /> : <Ctrlf />}</>;
}
