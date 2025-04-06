import { useNavigate, useSearchParams } from "react-router";
import { Self } from "../Self";
import Page404 from "./Page404";
import MyCarousel from "@/components/MyCarousel/MyCarousel";
import AnchorButton from "@/components/AnchorButton/AnchorButton";
import { GetIcon } from "@/toolsTSX";
import SkillTile from "@/components/SkillTile/SkillTile";
import { sleep } from "@/tools";
import { useEffect, useRef, useState } from "react";
import { StateMapObj } from "@/types";
import { IoIosArrowRoundDown } from "react-icons/io";
export default function ProjectPage() {
  const observing = useRef(false);
  const headDiv = useRef<HTMLDivElement>(null);

  const descriptionDiv = useRef<HTMLDivElement>(null);
  const CarouselDiv = useRef<HTMLDivElement>(null);

  const refArr = [headDiv, descriptionDiv, CarouselDiv];

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
      console.log(id);
      const showKey = (key: string) => {
        stateMapLocalObj[key] = true;
        setStateMap({ ...stateMapLocalObj });
      };

      const showPrefixCount = async (
        prefix: string,
        count: number,
        delayMS: number
      ) => {
        for (let i = 0; i < count; i++) {
          showKey(`${prefix}${i}`);
          await sleep(delayMS);
        }
      };

      const isActive = (key: string) => {
        return stateMapLocalObj[key] || false;
      };

      if (id == "headDiv" && !isActive(id)) {
        await sleep(200);
        showKey(id);
        await sleep(200);
        showPrefixCount("s", projectData.skills.length, 50);
      } else if (id == "desc" && !isActive(id)) {
        await sleep(200);
        showKey(id);
        // showPrefixCount(id, Self[id].length, 100);
      } else if (id == "carousel" && isActive("desc")) {
        await sleep(200);
        showKey(id);
        // showPrefixCount(id, Self[id].length, 100);
      } else if (targetIDs.includes(id) && !isActive(id)) {
        await sleep(400);
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
              if (!stateMapLocalObj[ref.current!.id]) {
                return;
              }
            }
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );
    refArr.forEach((ref) => {
      ref.current && observer.observe(ref.current);
    });
  }, [...refArr]);

  const [params, _] = useSearchParams();
  const projectKey = params.get("key");
  const navigate = useNavigate();
  if (!projectKey) {
    return <Page404 />;
  }
  // const projectTitle = projectKey.replace(/\\a/g, " ");
  const projectTitle = projectKey;
  const projectData = Self.projects[projectTitle];
  if (!projectData) {
    return <Page404 />;
  }

  const { skills, subtitle, imgs, desc, buttons } = projectData;
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "start",
        width: "100vw",
        height: "100%",
        minHeight: "100vh",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div
        style={{
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <AnchorButton
          onClick={() => navigate("../#projects")}
          style={{ position: "absolute", top: "2rem", left: "2rem", zIndex: 2 }}
        >
          Back
        </AnchorButton>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "90vh",
            width: "100vw",
            gap: "1rem",
            padding: "0 1rem",
            boxSizing: "border-box",
            position: "relative",
          }}
          id="headDiv"
          ref={headDiv}
          className={`floatIn ${emerge("headDiv")}`}
        >
          <span
            style={{
              fontSize: "3rem",
              fontWeight: 698,
              textAlign: "center",
              lineHeight: "3rem",
              marginBottom: "-0.75rem",
            }}
          >
            {projectTitle}
          </span>
          <span
            style={{ fontSize: "1rem", fontWeight: 500, textAlign: "center" }}
          >
            {subtitle}
          </span>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.2rem",
              justifyContent: "center",
            }}
          >
            {skills.map((skill, sIndex) => {
              const skillObj = Self.skills[skill];
              return (
                <SkillTile
                  key={`proj_${skill}`}
                  skill={skill}
                  {...skillObj}
                  scale={0.5}
                  visible={emerge("s" + sIndex) ? true : false}
                />
              );
            })}
          </div>

          <IoIosArrowRoundDown style={{marginTop: '2rem'}} className={`animateFloat dissapear ${(emerge('desc') || emerge('carousel')) ? 'active' : ''}`} size={'3rem'}/>
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            maxWidth: "90vw",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <div
            className={`w-full xs:w-3/3 md:w-2/5 floatIn ${emerge("desc")}`}
            style={{
              // backgroundColor: "#fff2",
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              padding: "1rem 0.5rem",
            }}
            id="desc"
            ref={descriptionDiv}
          >
            <span style={{ fontSize: "2rem", fontWeight: 698 }}>
              Description
            </span>
            <span
              dangerouslySetInnerHTML={{ __html: desc.replace(/\\n/, "<br/>") }}
            />
            <div
              style={{
                display: "flex",
                gap: "0.5rem",
                marginTop: "0.75rem",
                flexWrap: "wrap",
              }}
            >
              {buttons?.map((button, bIndex) => {
                return (
                  <AnchorButton
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.2rem",
                    }}
                    target="_blank"
                    href={button.href}
                    key={`btn_${bIndex}`}
                  >
                    {button.icon && GetIcon(button.icon, { size: "1.5rem" })}
                    {button.text}
                  </AnchorButton>
                );
              })}
            </div>
          </div>
          <div
            className={`w-full xs:w-3/3 md:w-3/6 floatIn ${emerge("carousel")}`}
            id="carousel"
            ref={CarouselDiv}
            style={{
              // backgroundColor: "#f552",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              maxWidth: "95vw",
            }}
          >
            <MyCarousel imgs={imgs} />
          </div>
        </div>
        <div style={{ height: "20vh" }} />
      </div>
    </main>
  );
}
