import styles from "./ProjectTile.module.css";
import { useNavigate } from "react-router";
import { Self } from "../../Self";
import SkillTile from "../SkillTile/SkillTile";
import { GoChevronRight } from "react-icons/go";

export default function ProjectTile({ projectKey }: { projectKey: string }) {
  const projectData = Self.projects[projectKey];
  const navigate = useNavigate();
  const { skills, subtitle, img, banner } = projectData;

  const handleViewProjectClick = () => {
    navigate(`/project?key=${projectKey}`);
    window.scrollTo({ top: 0 });
    // setTimeout(() => {
    // }, 50);
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        padding: "1rem",
        paddingBottom: "3.25rem",
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box",
        backgroundColor: "#222a",
        backdropFilter: 'blur(10px)',
        borderRadius: "0.5rem",
        gap: "0.5rem",
        alignItems: "start",
        border: "1px solid #fff1",
        position: "relative",
      }}
    >
      {banner && <ProjectTileBanner color={banner.color} text={banner.text} />}
      <img
        style={{
          width: "100%",
          marginBottom: "0.5rem",
          borderRadius: "0.5rem",
          aspectRatio: 16 / 9,
          objectFit: "cover",
          border: "1px solid #ccc2",
        }}
        src={img}
      />
      <span
        style={{
          fontSize: "1.2rem",
          lineHeight: "1.5rem",
          marginBottom: "-0.5rem",
        }}
      >
        {projectKey}
      </span>
      <span style={{ fontSize: "0.9rem" }}>{subtitle}</span>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem" }}>
        {skills.map((skill) => {
          const skillObj = Self.skills[skill];
          return (
            <SkillTile
              key={`${projectKey}_${skill}`}
              showIcon={false}
              scale={0.5}
              skill={skill}
              {...skillObj}
            />
          );
        })}
      </div>
      {/* <div style={{height: '0.2rem'}}/> */}
      <div style={{ width: "100%", display: "flex", justifyContent: "end" }}>
        <button
          onClick={handleViewProjectClick}
          style={{
            position: "absolute",
            backgroundColor: "#3b82f4",
            borderRadius: "0.2rem",
            display: "flex",
            alignItems: "center",
            padding: "0.4rem 1rem",
            paddingLeft: "2rem",
            bottom: "0.75rem",
            right: "0.75rem",
          }}
        >
          <span style={{ fontWeight: 700, marginRight: "0.3rem" }}>View</span>
          <GoChevronRight strokeWidth={0.2} size={"1.5rem"} />
        </button>
      </div>
    </div>
  );
}

export function ProjectTileBanner({
  text,
  color,
}: {
  text: string;
  color: string;
}) {
  return (
    <div
      style={{
        position: "absolute",
        top: "0.5rem",
        left: "-0.5rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
      }}
    >
      <div
        style={{
          backgroundColor: color,
          zIndex: 1,
          position: 'relative'
        }}
        className={styles.ProjectTileBanner}
      >
        <span>{text}</span>
      </div>
      <div
        style={{
          zIndex: 0,
          position: "absolute",
          transform: "translateX(0.5rem) translateY(0.5rem)",
          filter: "blur(2px)",
        }}
      >
        <div
          style={{
            backgroundColor: "#0003",
          }}
          className={styles.ProjectTileBanner}
        >
          <span>{text}</span>
        </div>
      </div>
      <div
        style={{
          backgroundColor: color,
          width: "0.5rem",
          height: "0.5rem",
          clipPath: "polygon(0 0, 100% 100%, 100% 0)",
          filter: "brightness(50%)",
        }}
      />
    </div>
  );
}
