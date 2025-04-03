import { useNavigate } from "react-router";
import { Self } from "../../Self";
import SkillTile from "../SkillTile/SkillTile";
import { GoChevronRight } from "react-icons/go";

export default function ProjectTile({ projectKey }: { projectKey: string }) {
  const projectData = Self.projects[projectKey];
  const navigate = useNavigate();
  const { skills, subtitle, img } = projectData;

  const handleViewProjectClick = () => navigate(`/project?key=${projectKey.replace(/ /g, '\\a')}`)
  
  return (
    <div
      style={{
        width: "100%",
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box",
        backgroundColor: "#fff1",
        borderRadius: "0.5rem",
        gap: "0.5rem",
        alignItems: "start",
        border: '1px solid #fff1'
      }}
    >
      <img
        style={{
          width: "100%",
          marginBottom: "0.5rem",
          borderRadius: "0.5rem",
          aspectRatio: 16/9,
          objectFit: 'cover'
        }}
        src={img}
      />
      <span style={{ fontSize: "1.2rem", lineHeight: "1rem" }}>
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
            backgroundColor: "#3b82f4",
            borderRadius: "0.2rem",
            display: "flex",
            alignItems: "center",
            padding: "0.4rem 1rem",
            paddingLeft: "2rem"
          }}
        >
          <span style={{ fontWeight: 700, marginRight: '0.3rem' }}>View</span>
          <GoChevronRight strokeWidth={0.2} size={"1.5rem"} />
        </button>
      </div>
    </div>
  );
}
