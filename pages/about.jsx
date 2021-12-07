import { useState } from "react";
import { FRONT, BACK, DESIGN, CICD } from "../constant/skills";
import Skill from "../components/About/skill";
import styles from "../styles/about.module.css";

export default function About() {
  const [frontCom, setFrontCom] = useState(false);
  const [backCom, setBackCom] = useState(false);
  const [cicdCom, setCicdCom] = useState(false);
  const [designCom, setDesignCom] = useState(false);

  const showFront = () => {
    setFrontCom(true);
  };
  const showBack = () => {
    setBackCom(true);
  };
  const showCiCd = () => {
    setCicdCom(true);
  };
  const showDesign = () => {
    setDesignCom(true);
  };
  return (
    <>
      <main className={styles.about__main}>
        <h1 className={styles.title__main}>About Me</h1>
        <div className={styles.goal}>&quot;믿고 찾을 수 있는 개발자 &quot;</div>
        <p className={styles.goal__text}>
          프론트엔드는 모든 개발 분야와 맞닿아 있는 중요한 연결점이라고
          생각합니다. 미디어커뮤니케이션을 전공하면서 사람들과 대화로 문제를
          해결하는 것에 대해 익숙합니다. {`\n`}문제가 발생했을때 문제점을
          정확하게 파악하고 팀원들과 적절하게 소통할 줄아는 개발자가 되기위해
          노력하고 있습니다.
        </p>
        <div className={styles.img__wrapper}>
          <img src="/images/contact/man.png" className={`${styles.img}`} />
        </div>

        <div className={`${styles.goal} ${styles.ux}`}>
          &quot;UX를 중요하게 여기는 개발자 &quot;
        </div>
        <p className={styles.goal__text}>
          프론트엔드는 모든 개발직군의 연결점이면서 사용자와 긴밀하게 맞닿는
          분야이기도 합니다. 그래서 프론트 엔드 개발자는 UX에 가장 민감하게
          반응해야한다고 생각합니다. {`\n`}
          사용자가 어떤 환경에서든지 동일한 UX를 느낄 수 있도록 도울 수 있는
          개발자가 되고 싶습니다.
        </p>
        <h2 className={styles.title__sub}>My Skills</h2>
        <div className={styles.skill__container}>
          <div className={`${styles.skill} `}>
            <div className={styles.skill__title} onClick={showFront}>
              {" "}
              Front-end
            </div>
            <div className={styles.skill__title} onClick={showDesign}>
              {" "}
              Design
            </div>
          </div>
          <div className={`${styles.skill} `}>
            <div className={styles.skill__title} onClick={showBack}>
              {" "}
              Back-end
            </div>
            <div className={styles.skill__title} onClick={showCiCd}>
              {" "}
              CI/CD
            </div>
          </div>
        </div>
        {frontCom && <Skill images={FRONT} closeMethod={setFrontCom} />}
        {backCom && <Skill images={BACK} closeMethod={setBackCom} />}
        {cicdCom && <Skill images={CICD} closeMethod={setCicdCom} />}
        {designCom && <Skill images={DESIGN} closeMethod={setDesignCom} />}
        {/* <Skill position={"Front-End"} images={front} />
          <Skill position={"Back-End"} images={back} />
          <Skill position={"CI/CD"} images={CICD} />
          <Skill position={"Design"} images={design} /> */}
        <div className={styles.goal}>Education</div>
        {/* <p className={styles.goal__text}>
          프론트엔드는 모든 개발 분야와 맞닿아 있는 중요한 연결점이라고
          생각합니다. 미디어커뮤니케이션을 전공하면서 사람들과 대화로 문제를
          해결하는 것에 대해 익숙합니다. {`\n`}문제가 발생했을때 문제점을
          정확하게 파악하고 팀원들과 적절하게 소통할 줄아는 개발자가 되기위해
          노력하고 있습니다.
        </p> */}
        <ul className={`${styles.list} ${styles.goal__text}`}>
          <li className={styles.education}>10.03 ~ 16.02 남강 중, 고등학교</li>
          <li className={styles.education}>
            16.03 ~ 17.07 영상학회 아이뮤 정국원
          </li>
          <li className={styles.education}>
            17.03 ~ 21.07 광운대학교 융합 S/W 연계전공
          </li>
          <li className={styles.education}>
            16.03 ~ 22.02 광운대 미디어커뮤니케이션 학사
          </li>
        </ul>
        <div className={styles.img__wrapper}></div>

        <div className={`${styles.goal} ${styles.ux}`}>Awards&Certificate</div>
        <ul className={`${styles.list} ${styles.goal__text}`}>
          <li className={styles.award}>
            21.01 세계일보 드론,VR 동행 공모전 장려상
          </li>
          <li className={styles.award}>21.06 정보처리기사 자격증취득</li>
        </ul>
      </main>
    </>
  );
}
