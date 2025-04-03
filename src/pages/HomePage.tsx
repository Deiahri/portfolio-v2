import Button from "../components/Button/Button";
import { BsDownload } from "react-icons/bs";
import { GoChevronRight } from "react-icons/go";
import SkillTile from "../components/SkillTile/SkillTile";
import { Self } from "../Self";
import ProjectTile from "../components/ProjectTile/ProjectTile";
import { useRef } from "react";

export default function HomePage() {
  const projectSectionRef = useRef<HTMLDivElement>(null);
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100vw",
        height: "100%",
        minHeight: "100vh",
        backgroundColor: "#111",
      }}
    >
      <TopSection projectSectionRef={projectSectionRef} />
      <div style={{height: '10vh'}} />
      <SkillsSection />
      <ProjectsSection projectSectionRef={projectSectionRef} />
    </main>
  );
}


function ProjectsSection({
  projectSectionRef
}: {
  projectSectionRef: React.RefObject<HTMLDivElement|null>
}) {
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
          gap: '1rem'
        }}
      >
        <span style={{ fontSize: "2.5rem", fontWeight: 900, lineHeight: '2rem' }}>Projects</span>
        

        <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem', width: '100%'}}>
        {/* Databases */}
          {/* <span style={{fontSize: '1.5rem'}}>Other Technology</span> */}
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              alignItems: "start",
              // gap: '0.5rem'
            }}
          >
            {
              Object.keys(Self.projects).map((project) => {
                return <div className={'w-full xss:w-3/3 sm:w-1/2 lg:w-1/3 xl:1/5'} style={{padding: '0.3rem', boxSizing: 'border-box'}} key={`proj_${project}`}>
                  <ProjectTile projectKey={project} />
                </div>
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
}


function SkillsSection() {
  return (
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
          gap: '1rem'
        }}
      >
        <span style={{ fontSize: "2.5rem", fontWeight: 900, lineHeight: '2rem' }}>Skills</span>
        {/* Languages */}
        <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
          <span style={{fontSize: '1.5rem'}}>Languages</span>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              alignItems: "start",
              gap: '0.5rem'
            }}
          >
            {
              Self.languages.map((skill) => {
                const skillObj = Self.skills[skill];
                return <SkillTile key={`languages_${skill}`} skill={skill} {...skillObj} />
              })
            }
          </div>
        </div>

        <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
        {/* Frameworks and Libraries */}
          <span style={{fontSize: '1.5rem'}}>Frameworks and Libraries</span>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              alignItems: "start",
              gap: '0.5rem'
            }}
          >
            {
              Self.framelibs.map((skill) => {
                const skillObj = Self.skills[skill];
                return <SkillTile key={`framelibs_${skill}`} skill={skill} {...skillObj} />
              })
            }
          </div>
        </div>

        <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
        {/* Databases */}
          <span style={{fontSize: '1.5rem'}}>Databases</span>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              alignItems: "start",
              gap: '0.5rem'
            }}
          >
            {
              Self.databases.map((skill) => {
                const skillObj = Self.skills[skill];
                return <SkillTile key={`databases_${skill}`} skill={skill} {...skillObj} />
              })
            }
          </div>
        </div>

        <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
        {/* Databases */}
          <span style={{fontSize: '1.5rem'}}>Other Technology</span>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              alignItems: "start",
              gap: '0.5rem'
            }}
          >
            {
              Self.other.map((skill) => {
                const skillObj = Self.skills[skill];
                return <SkillTile key={`other_${skill}`} skill={skill} {...skillObj} />
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
}

function TopSection({
  projectSectionRef
}: {
  projectSectionRef: React.RefObject<HTMLDivElement|null>
}) {
  const ScrollProjectsIntoView = () => {
    if (projectSectionRef.current) {
      projectSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
        width: "100vw",
        gap: "1rem",
        paddingLeft: "1rem",
        paddingRight: "1rem",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <span
          style={{
            fontSize: "4rem",
            textAlign: "center",
            //   color: "#3b82f4",
            fontWeight: 200,
            lineHeight: "3rem",
          }}
        >
          Junda Yin
        </span>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          fontSize: "2rem",
        }}
      >
        <span
          style={{
            textAlign: "center",
            color: "#3b82f4",
            fontWeight: 900,
          }}
        >
          Full-stack
        </span>
        <span
          style={{
            textAlign: "center",
            marginLeft: "0.6rem",
            fontWeight: 900,
          }}
        >
          application
        </span>
        <span
          style={{
            textAlign: "center",
            marginLeft: "0.6rem",
            fontWeight: 900,
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
        >
          I develop <span style={{ color: "#ff9d25" }}>modern websites</span>,{" "}
          <span style={{ color: "#3b82f4" }}>responsive applications</span>, and{" "}
          <span style={{ fontWeight: 700 }}>much more</span>
        </span>
      </div>
      <div style={{ marginTop: "0.5rem", display: "flex", gap: "1rem" }}>
        <Button style={{ height: "3rem" }} onClick={() => window.open('https://drive.google.com/file/d/1p_m1-KwvzcXZHayE3_obq7J3cZXLZl07/view?usp=sharing', '_blank')}>
          <BsDownload size={"1.25rem"} style={{ marginRight: "0.5rem" }} />
          <span style={{ fontSize: "1.25rem" }}>Resume</span>
        </Button>
        <Button style={{ height: "3rem" }} 
            onClick={ScrollProjectsIntoView}>
          <span style={{ fontSize: "1.25rem" }}>View Projects</span>
          <GoChevronRight
            size={"1.5rem"}
            style={{ marginLeft: "0.5rem", marginRight: "-0.7rem" }}
          />
        </Button>
      </div>
    </div>
  );
}
