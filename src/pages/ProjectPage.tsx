import { useNavigate, useSearchParams } from "react-router";
import { Self } from "../Self";
import Page404 from "./Page404";
import MyCarousel from "@/components/MyCarousel/MyCarousel";
import ParallaxBG from "@/components/ParallaxBG/ParallaxBG";
import AnchorButton from "@/components/AnchorButton/AnchorButton";
import { GetIcon } from "@/toolsTSX";
import SkillTile from "@/components/SkillTile/SkillTile";
export default function ProjectPage() {
  const [params, _] = useSearchParams();
  const projectKey = params.get("key");
  const navigate = useNavigate();
  if (!projectKey) {
    return <Page404 />;
  }
  const projectTitle = projectKey.replace(/\\a/g, " ");
  const projectData = Self.projects[projectTitle];
  if (!projectData) {
    return <Page404 />;
  }
  const {
    skills,
    subtitle,
    imgs,
    desc,
    buttons,
  } = projectData;
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
        backgroundColor: "#151515",
        position: "relative",
      }}
    >
      <div style={{ zIndex: 1 }}>
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
            position: 'relative'
          }}
        >
        <AnchorButton onClick={() => navigate('../#projects')} style={{position: 'absolute', top: '2rem', left: '2rem'}}>Back</AnchorButton>
          <span
            style={{ fontSize: "3rem", fontWeight: 900, textAlign: "center", lineHeight: '3rem', marginBottom: '-0.75rem' }}
          >
            {projectTitle}
          </span>
          <span style={{fontSize: "1rem", fontWeight: 500, textAlign: "center"}}>
            {subtitle}
          </span>
          <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.2rem', justifyContent: 'center'}}>
              {
                skills.map((skill) => {
                  const skillObj = Self.skills[skill]
                  return <SkillTile skill={skill} {...skillObj} scale={0.5} />;
                })
              }
            </div>
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <div
            className="w-full xs:w-3/3 md:w-2/5"
            style={{
              // backgroundColor: "#fff2",
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              padding: "1rem",
            }}
          >
            <span style={{ fontSize: "2rem", fontWeight: 900 }}>
              Description
            </span>
            <span
              dangerouslySetInnerHTML={{ __html: desc.replace(/\\n/, "<br/>") }}
            />
            <div
              style={{ display: "flex", gap: "0.5rem", marginTop: "0.75rem", flexWrap: 'wrap' }}
            >
              {buttons?.map((button) => {
                return (
                  <AnchorButton
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.2rem",
                    }}
                    target="_blank"
                    href={button.href}
                  >
                    {button.icon && GetIcon(button.icon, { size: '1.5rem' })}
                    {button.text}
                  </AnchorButton>
                );
              })}
            </div>
          </div>
          <div
            className="w-full xs:w-3/3 md:w-3/6"
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
      <ParallaxBG />
    </main>
  );
}
