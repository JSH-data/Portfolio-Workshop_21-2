import { useEffect, useState } from "react";
import { data } from "../../constant/workData";
import Url from "./Url";
import styles from "../../styles/workDetail.module.css";

export default function Ctrlf() {
  const [work, setWork] = useState(null);
  useEffect(() => {
    setWork(data[document.location.href.split("/")[4]]);
  }, []);
  return (
    <main className={styles.work_main}>
      {work && (
        <>
          <div className={styles.duration}>Duration {work.duration}</div>
          <div className={styles.image__container}>
            <img src={`${work.image1}`} className={styles.image__main} />
          </div>
          <div className={styles.title}>
            <h2>{work.title}</h2>
          </div>
          <div className={styles.description}>
            <h3 className={styles.sub_title}>프로젝트 설명</h3>
            {work.description}
          </div>
          <iframe
            width="330"
            height="270"
            src="https://www.youtube.com/embed/247IODqNCqA"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div className={styles.team}>
            <h3 className={styles.sub_title}>팀 구성</h3>
            <div>{work.team}</div>
          </div>
          <br />
          <br />
          <img
            src="/images/work/ctrlf_plan.png"
            className={styles.image__main}
          />
          매주 스프린트
          <br />
          <br />
          <br />
          <img
            src="/images/work/ctrlf_design.png"
            className={styles.image__main}
          />
          디자이너가 업데이트하는 어도비
          <br />
          <br />
          <br />
          <img
            src="/images/work/ctrlf_swea.png"
            className={styles.image__main}
          />
          백엔드가 만드는 스웨거
          <br />
          <br />
          <br />
          <img
            src="/images/work/ctrlf_trello.png"
            className={styles.image__main}
          />
          프로젝트를 관리하는 트렐로
          <br />
          <br />
          <br />
          <br />
          <div>작업 내용</div>
          <br />
          <br />
          <br />
          <div className={styles.tech_list}>
            <h3 className={styles.sub_title}>기술 스택</h3>
            {work.tech.map((v, i) => {
              return (
                <div className={styles.tech} key={i}>
                  <div className={styles.tech__container}>
                    <img src={v.image} className={styles.tech__img} />
                  </div>
                  <div className={styles.tech__text}>{v.text}</div>
                </div>
              );
            })}
          </div>
          <div className={styles.strategy}>
            <h3 className={styles.sub_title}>개발 과정</h3>
            <div>{work.strategy}</div>
          </div>
          <div className={styles.image__container}>
            <img src={`${work.image2}`} className={styles.image__main} />
          </div>
          <div className={styles.learn}>
            <h3 className={styles.sub_title}>What I learned</h3>
            {work.learn}
            <div className={styles.url}>
              <h3 className={styles.sub_title}>Link</h3>
              {work.urls.map((v, i) => {
                return <Url key={i} title={v[0]} url={v[1]} />;
              })}
            </div>
          </div>
        </>
      )}
    </main>
  );
}
