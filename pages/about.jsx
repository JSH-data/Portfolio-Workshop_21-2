import styles from "../styles/about.module.css";
import Skill from "../components/About/skill";

export default function About() {
  const front = [
    "/images/about/html.png",
    "/images/about/css.png",
    "/images/about/js.png",
    "/images/about/react.png",
  ];

  const back = [
    "/images/about/node.png",
    "/images/about/express.png",
    "/images/about/mongo.png",
  ];

  const CICD = ["/images/about/git.png", "/images/about/aws.png"];

  const design = [
    "/images/about/phtoshop.png",
    "/images/about/illust.png",
    "/images/about/premier.png",
    "/images/about/afterEffect.png",
  ];
  return (
    <>
      <main>
        <div className={styles.title__main}>Junior Front-end</div>{" "}
        <div className={styles.title__sub}>개발자 정승화입니다.</div>
        <h2 className={styles.head}>저는 2가지 목표를 갖고 있습니다. </h2>
        <div className={styles.goal}>&quot;믿고 찾을 수 있는 개발자 &quot;</div>
        <p>
          첫 번째 목표는 문제가 생겼을때 믿고 찾을 수 있는 개발자가 되고
          싶습니다. 프론트엔드는 모든 개발 분야와 맞닿아 있는 중요한
          연결점이라고 생각합니다. 미디어커뮤니케이션을 전공한 저는 사람들과
          대화로 문제를 해결하는 것에 대해 익숙합니다. 업무 중 문제가 발생했을때
          문제점을 파악하고 팀원들과 적절하게 소통할 줄아는 그런 개발자가 되고
          싶습니다.
        </p>
        <div className={styles.goal}>
          &quot;UX를 중요하게 여기는 개발자 &quot;
        </div>
        <p>
          두 번째 목표는 UX를 중요하게 여길 줄 아는 개발자가 되는 것입니다.
          프론트엔드는 모든 개발직군의 연결점이 될 수 있으면서 사용자와 유일하게
          맞닿는 분야이기도 합니다. 그렇기 때문에 UX에 가장 민감하게 반응해야
          합니다. 사용자가 어떤 환경에서든지 동일한 UX를 느낄 수 있도록 도울 수
          있는 개발자가 되고 싶습니다.
        </p>
        <h3>My Skills</h3>
        <Skill position={"Front-End"} images={front} />
        <Skill position={"Back-End"} images={back} />
        <Skill position={"CI/CD"} images={CICD} />
        <Skill position={"Design"} images={design} />
        <h3>Education</h3>
        <ul className={styles.list}>
          <li className={styles.education}>10.03 ~ 16.02 남강 중, 고등학교</li>
          <li className={styles.education}>
            16.03 ~ 17.07 영상학회 아이뮤 정국원
          </li>
          <li className={styles.education}>
            17.03 ~ 21.07 광운대학교 융합 S/W 연계전공 이수
          </li>
          <li className={styles.education}>
            16.03 ~ 22.02 광운대학교 미디어커뮤니케이션 학사
          </li>
        </ul>
        <h3>Awards&Certificate</h3>
        <ul className={styles.list}>
          <li className={styles.award}>
            21.01 세계일보 드론,VR 동행 공모전 장려상
          </li>
          <li className={styles.award}>21.06 정보처리기사 자격증취득</li>
        </ul>
      </main>
    </>
  );
}
