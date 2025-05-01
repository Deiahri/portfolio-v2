import Button from "../components/Button/Button";
import { BsDownload } from "react-icons/bs";
import { GoChevronRight } from "react-icons/go";
import SkillTile from "../components/SkillTile/SkillTile";
import { Self } from "../Self";
import ProjectTile from "../components/ProjectTile/ProjectTile";
import { useEffect, useRef, useState } from "react";
import { blue, orange } from "@/shared";
import { useLocation } from "react-router";
import { FaGithub } from "react-icons/fa";
import { sleep } from "@/tools";
import { StateMapObj } from "@/types";
import { IoIosArrowRoundDown } from "react-icons/io";

export default function HomePage() {
  const location = useLocation();
  const projectSectionRef = useRef<HTMLDivElement>(null);
  const hash = location.hash;

  const scrollProjectsIntoView = (options?: ScrollIntoViewOptions) => {
    projectSectionRef.current?.scrollIntoView(options);
  };

  useEffect(() => {
    setTimeout(() => {
      window.location.hash = "hiya";
    }, 200);
    switch (hash) {
      case "#projects":
        scrollProjectsIntoView();
        break;
      case "#projectss":
        scrollProjectsIntoView({ behavior: 'smooth' });
        break;
    }
  }, [hash]);

  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100vw",
        height: "100%",
        minHeight: "100vh",
        position: "relative",
        zIndex: 1,
      }}
    >
      <TopSection />
      <div style={{ height: "10vh" }} />
      <SkillsSection />
      <ProjectsSection projectSectionRef={projectSectionRef} />
    </main>
  );
}

function ProjectsSection({
  projectSectionRef,
}: {
  projectSectionRef: React.RefObject<HTMLDivElement | null>;
}) {
  const containingDiv = useRef<HTMLDivElement>(null);
  const animated = useRef(false);
  const [stateMap, setStateMap] = useState<StateMapObj>({});

  const emerge = (key: string) => {
    return stateMap[key] ? "emerge" : "";
  };

  useEffect(() => {
    if (!containingDiv.current) {
      return;
    }

    async function AnimateDisplay() {
      if (animated.current) {
        return;
      }
      animated.current = true;
      const stateMapLocalObj: StateMapObj = {};
      const showKey = (key: string) => {
        stateMapLocalObj[key] = true;
        setStateMap(prev => ({ ...prev, [key]: true }));
      };

      await sleep(300);
      showKey("projects");
      await sleep(300);
      for (let i = 0; i < Object.keys(Self.projects).length; i++) {
        await sleep(100);
        showKey("p" + i);
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            AnimateDisplay();
            observer.disconnect();
          }
        });
      },
      { threshold: 0, rootMargin: '-20% 0px' }
    );
    observer.observe(containingDiv.current);

    return () => {
      observer.disconnect();
    };
  }, [containingDiv]);

  return (
    <div
      ref={projectSectionRef}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "center",
        // height: "100vh",
        width: "100vw",
        gap: "1rem",
        paddingLeft: "1rem",
        paddingRight: "1rem",
        boxSizing: "border-box",
        // backgroundColor: "#fff2",
        paddingTop: "2rem",
        paddingBottom: "20vh",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "90vw",
          width: "60rem",
          gap: "1rem",
        }}
        ref={containingDiv}
      >
        <span
          style={{ fontSize: "2.5rem", fontWeight: 698, lineHeight: "2rem" }}
          className={`floatIn ${emerge("projects")}`}
        >
          Projects
        </span>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
            width: "100%",
          }}
        >
          {/* Databases */}
          {/* <span style={{fontSize: '1.5rem'}}>Other Technology</span> */}
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              // alignItems: "start",
              // gap: '0.5rem'
            }}
          >
            {Object.keys(Self.projects).map((project, pIndex) => {
              return (
                <div
                  className={`w-full xss:w-3/3 sm:w-1/2 lg:w-1/3 xl:1/5 floatIn ${emerge(
                    "p" + pIndex
                  )}`}
                  style={{ padding: "0.3rem", boxSizing: "border-box" }}
                  key={`proj_${project}`}
                >
                  <ProjectTile projectKey={project} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

function SkillsSection() {
  const observing = useRef(false);
  const skillsDiv = useRef<HTMLDivElement>(null);

  const languageDiv = useRef<HTMLDivElement>(null);
  const frameLibDiv = useRef<HTMLDivElement>(null);
  const dBDiv = useRef<HTMLDivElement>(null);
  const otherDiv = useRef<HTMLDivElement>(null);

  const refArr = [skillsDiv, languageDiv, frameLibDiv, dBDiv, otherDiv];

  const [stateMap, setStateMap] = useState<StateMapObj>({});

  const emerge = (key: string) => {
    return stateMap[key] ? "emerge" : "";
  };

  useEffect(() => {
    let allReady = true;
    refArr.forEach((ref) => {
      if (!ref.current) {
        allReady = false;
      }
    });

    if (!allReady || observing.current) {
      return;
    }
    observing.current = true;
    const targetIDs = refArr.map((ref) => ref.current!.id);

    const stateMapLocalObj: StateMapObj = stateMap;
    async function Animate(id: string) {
      const showKey = (key: string) => {
        stateMapLocalObj[key] = true;
        setStateMap(prev => ({ ...prev, [key]: true }));
      };

      // const showPrefixCount = async (
      //   prefix: string,
      //   count: number,
      //   delayMS: number
      // ) => {
      //   for (let i = 0; i < count; i++) {
      //     showKey(`${prefix}${i}`);
      //     await sleep(delayMS);
      //   }
      // };

      const isActive = (key: string) => {
        return stateMapLocalObj[key] || false;
      };

      if (id == "skills" && !isActive(id)) {
        showKey("skills");
      } else if (
        targetIDs.includes(id) && !isActive(id)
      ) {
        await sleep(200);
        showKey(id);
        // showPrefixCount(id, Self[id].length, 100);
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // observer.disconnect();
          if (entry.isIntersecting) {
            Animate(entry.target.id);
            for (let ref of refArr) {
              if (!stateMapLocalObj[ref.current!.id] && ref.current!.id != entry.target.id) {
                console.log(ref.current!.id);
                return;
              }
            }
            observer.disconnect();
          }
        });
      },
      { threshold: 0.4, rootMargin: '-15% 0px' }
    );
    refArr.forEach((ref) => {
      ref.current && observer.observe(ref.current);
    });
  }, [refArr]);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "center",
          // height: "100vh",
          width: "100vw",
          gap: "1rem",
          paddingLeft: "1rem",
          paddingRight: "1rem",
          boxSizing: "border-box",
          // backgroundColor: "#fff2",
          paddingTop: "2rem",
          paddingBottom: "20vh",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "90vw",
            width: "60rem",
            gap: "1rem",
          }}
        >
          <div
            id="skills"
            ref={skillsDiv}
            className={`floatIn ${emerge("skills")}`}
          >
            <span
              style={{
                fontSize: "2.5rem",
                fontWeight: 698,
                lineHeight: "2rem",
              }}
            >
              Skills
            </span>
          </div>
          {/* Languages */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
            id="languages"
            ref={languageDiv}
            className={`floatIn ${emerge("languages")}`}
          >
            <span style={{ fontSize: "1.5rem" }}>Languages</span>
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                alignItems: "start",
                gap: "0.5rem",
              }}
            >
              {Self.languages.map((skill) => {
                const skillObj = Self.skills[skill];
                return (
                  <SkillTile
                    key={`languages_${skill}`}
                    skill={skill}
                    // visible={emerge("languages"+sIndex)? true:false}
                    {...skillObj}
                  />
                );
              })}
            </div>
          </div>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
            id="framelibs"
            ref={frameLibDiv}
            className={`floatIn ${emerge("framelibs")}`}
          >
            {/* Frameworks and Libraries */}
            <span style={{ fontSize: "1.5rem" }}>Frameworks and Libraries</span>
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                alignItems: "start",
                gap: "0.5rem",
              }}
            >
              {Self.framelibs.map((skill) => {
                const skillObj = Self.skills[skill];
                return (
                  <SkillTile
                    key={`framelibs_${skill}`}
                    skill={skill}
                    // visible={emerge("framelibs"+sIndex)? true:false}
                    {...skillObj}
                  />
                );
              })}
            </div>
          </div>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
            id="databases"
            ref={dBDiv}
            className={`floatIn ${emerge("databases")}`}
          >
            {/* Databases */}
            <span style={{ fontSize: "1.5rem" }}>Databases</span>
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                alignItems: "start",
                gap: "0.5rem",
              }}
            >
              {Self.databases.map((skill) => {
                const skillObj = Self.skills[skill];
                return (
                  <SkillTile
                    key={`databases_${skill}`}
                    skill={skill}
                    // visible={emerge("databases"+sIndex)? true:false}
                    {...skillObj}
                  />
                );
              })}
            </div>
          </div>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
            id="other"
            ref={otherDiv}
            className={`floatIn ${emerge("other")}`}
          >
            {/* Databases */}
            <span style={{ fontSize: "1.5rem" }}>Other Technology</span>
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                alignItems: "start",
                gap: "0.5rem",
              }}
            >
              {Self.other.map((skill) => {
                const skillObj = Self.skills[skill];
                return (
                  <SkillTile
                    key={`other_${skill}`}
                    skill={skill}
                    // visible={emerge("other"+sIndex)? true:false}
                    {...skillObj}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function TopSection() {
  const containingDiv = useRef<HTMLDivElement>(null);
  const animated = useRef(false);
  const [stateMap, setStateMap] = useState<StateMapObj>({});
  const [scrolledPast, setScrolledPast] = useState(false);

  const goToProjectsSection = () => {
    window.location.hash = "";
    setTimeout(() => {
      window.location.hash = "projectss";
    }, 10);
  };

  const emerge = (key: string) => {
    return stateMap[key] ? "emerge" : "";
  };

  useEffect(() => {
    if (!containingDiv.current) {
      return;
    }

    const CheckScrolledPast = () => {
      if (window.scrollY > 250) {
        setScrolledPast(true);
      }
    }

    window.addEventListener('scroll', CheckScrolledPast);

    async function AnimateDisplay() {
      if (animated.current) {
        return;
      }
      animated.current = true;
      const stateMapLocalObj: StateMapObj = {};
      const showKey = (key: string) => {
        stateMapLocalObj[key] = true;
        setStateMap(prev => ({ ...prev, [key]: true }));
      };

      await sleep(300);
      showKey("loc");
      await sleep(300);
      showKey("fName");
      await sleep(300);
      showKey("lName");

      await sleep(500);
      showKey("FAD");

      await sleep(700);
      showKey("hook");

      await sleep(300);
      showKey("buttons");
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // observer.disconnect();
          if (entry.isIntersecting) {
            AnimateDisplay();
          }
        });
      },
      { threshold: 0.5 }
    );
    observer.observe(containingDiv.current);

    return () => {
      observer.disconnect();
    };
  }, [containingDiv]);

  return (
    <>
      <div
        ref={containingDiv}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "80vh",
          width: "100vw",
          gap: "0.75rem",
          padding: "0rem 2rem",
          boxSizing: "border-box",
        }}
      >
        <span
          style={{ marginBottom: "-0.5rem" }}
          className={`emergeFromBlur ${emerge("loc")}`}
        >
          Texas, USA
        </span>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <div style={{ display: "flex", gap: "0.75rem" }}>
            <span
              style={{
                fontSize: "4rem",
                textAlign: "center",
                // color: blue,
                fontWeight: 200,
                lineHeight: "3rem",
              }}
              className={`emergeFromBlur ${emerge("fName")}`}
            >
              Junda
            </span>
            <span
              style={{
                fontSize: "4rem",
                textAlign: "center",
                // color: blue,
                fontWeight: 200,
                lineHeight: "3rem",
              }}
              className={`emergeFromBlur ${emerge("lName")}`}
            >
              Yin
            </span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            fontSize: "2rem",
            lineHeight: '2rem'
          }}
          className={`emergeWipe ${emerge("FAD")}`}
        >
          <span
            style={{
              textAlign: "center",
              color: blue,
              fontWeight: 698,
            }}
          >
            Full-stack
          </span>
          <span
            style={{
              textAlign: "center",
              marginLeft: "0.6rem",
              fontWeight: 698,
            }}
          >
            application
          </span>
          <span
            style={{
              textAlign: "center",
              marginLeft: "0.6rem",
              fontWeight: 698,
            }}
          >
            Developer
          </span>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            fontSize: "1.2rem",
          }}
        >
          <span
            style={{
              textAlign: "center",
            }}
            className={`emergeWipe ${emerge("hook")}`}
          >
            I develop <span style={{ color: orange }}>modern websites</span>,{" "}
            <span style={{ color: blue }}>responsive applications</span>, and{" "}
            <span style={{ fontWeight: 700 }}>much more</span>
          </span>
        </div>
        <div
          style={{
            marginTop: "0.5rem",
            display: "flex",
            gap: "0.5rem",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
          className={`emergeFromBlur ${emerge("buttons")}`}
        >
          <Button
            style={{ height: "3rem" }}
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1ubDxHPiYgDOHqFL1l_cwv0TLkLQvwoOP/view?usp=sharing",
                "_blank"
              )
            }
          >
            <BsDownload size={"1.25rem"} style={{ marginRight: "0.5rem" }} />
            <span style={{ fontSize: "1.25rem" }}>Resume</span>
          </Button>
          <Button
            style={{ height: "3rem" }}
            onClick={() => window.open("https://github.com/Deiahri", "_blank")}
          >
            <FaGithub size={"1.25rem"} style={{ marginRight: "0.5rem" }} />
            <span style={{ fontSize: "1.25rem" }}>Github</span>
          </Button>
          <Button style={{ height: "3rem" }} onClick={goToProjectsSection}>
            <span style={{ fontSize: "1.25rem" }}>View Projects</span>
            <GoChevronRight
              size={"1.5rem"}
              style={{ marginLeft: "0.5rem", marginRight: "-0.7rem" }}
            />
          </Button>
        </div>
        <div className={`animateFloat dissapear ${scrolledPast ? 'active' : ''}`} style={{marginTop: '3rem', marginBottom: '-5rem', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <span style={{fontSize: '1.1rem', fontWeight: 500, marginBottom: '-0.25rem'}}>Skills</span>
          <IoIosArrowRoundDown size={'3rem'}/>
        </div>
      </div>
    </>
  );
}
