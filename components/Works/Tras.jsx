import { useEffect, useState } from "react";
import { data } from "../../constant/workData";
import Url from "./Url";
import styles from "../../styles/workDetail.module.css";

export default function Tras() {
  const [work, setWork] = useState(null);
  useEffect(() => {
    setWork(data[document.location.href.split("/")[4]]);
  }, []);
  return (
    <main className={styles.work_main}>
      {work && (
        <>
          <div className={styles.title}>
            <h1>{work.title}</h1>
          </div>
          <div className={styles.duration}>Duration {work.duration}</div>
          <div className={styles.image__container}>
            <img src={`${work.image1}`} className={styles.image__main} />
          </div>
          <div className={styles.content}>
            <h3 className={styles.content__title}>Description</h3>
            <p className={styles.content__text}>{work.description}</p>
          </div>
          <div className={styles.content}>
            <h3 className={styles.content__title}>Background</h3>
            <p className={styles.content__text}>{work.background}</p>
          </div>
          <h2 className={styles.sub__title}>Process</h2>
          <div className={styles.content}>
            <h3 className={styles.content__title}>Team</h3>
            <img
              className={styles.content__img}
              src="/images/work/tras_member.png"
            />
            <p className={styles.content__text}>{work.team}</p>
          </div>
          <div className={styles.content}>
            <h3 className={styles.content__title}>Position</h3>
            <p className={styles.content__text}>{work.position}</p>
          </div>
          <div className={styles.content}>
            <h3 className={styles.content__title}>Tech</h3>
            <div className={styles.tech_list}>
              {work.tech.map((v, i) => {
                return (
                  <div className={styles.tech} key={i}>
                    <img src={v.image} className={styles.tech__img} />
                    <span className={styles.tech__name}>{v.name}</span>
                    <div className={styles.tech__text}>{v.text}</div>
                  </div>
                );
              })}
            </div>
          </div>
          <br />
          <div className={styles.content}>
            <h3 className={styles.content__title}>Schedule</h3>
            <img
              className={styles.content__img}
              src="/images/work/tras_schedule.png"
            />
            <p className={styles.content__text}>{work.report}</p>
          </div>
          <div className={styles.content}>
            <h3 className={styles.content__title}>개발</h3>
            <img src={`${work.image2}`} className={styles.content__img} />
            <p className={styles.content__text}>{work.develop}</p>
          </div>
          <div className={styles.content}>
            <h3 className={styles.content__title}>Problems</h3>
            <img
              src="/images/work/tras_machine.png"
              className={styles.content__img}
            />
            <p className={styles.content__text}>{work.difficult}</p>
          </div>

          <div className={styles.content}>
            <h3 className={styles.content__title}>Leared</h3>

            <p className={styles.content__text}>{work.learn}</p>
          </div>

          <div className={styles.content}>
            <h3 className={styles.content__title}>Link</h3>
            {work.urls.map((v, i) => {
              return <Url key={i} title={v[0]} url={v[1]} />;
            })}
          </div>
        </>
      )}
    </main>
  );
}
