import { useSearchParams } from "react-router";
import { Self } from "../Self";
import Page404 from "./Page404";

export default function ProjectPage() {
  const [params, _] = useSearchParams();
  const projectKey = params.get("key");
  if (!projectKey) {
    return <Page404 />;
  }
  const projectTitle = projectKey.replace(/\\a/g, " ");
  const projectData = Self.projects[projectTitle];
  if (!projectData) {
    return <Page404 />;
  }
  const { skills, subtitle, img, desc } = projectData;
  console.log(desc);
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
        backgroundColor: "#111",
      }}
    >
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
        <span style={{ fontSize: "3rem", fontWeight: 900 }}>
          {projectTitle}
        </span>
      </div>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          flexWrap: "wrap"
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
          <span style={{ fontSize: "2rem", fontWeight: 900 }}>Description</span>
          <span dangerouslySetInnerHTML={{ __html: desc.replace(/\\n/, '<br/>') }}></span>
        </div>
        <div
          className="w-full xs:w-3/3 md:w-3/6"
          style={{
            // backgroundColor: "#f552",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        ></div>
      </div>
      <div style={{height: '20vh'}} />
    </main>
  );
}
