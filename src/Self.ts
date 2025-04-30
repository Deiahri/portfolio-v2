import React from "react";
import { blue, red } from "./shared";

type Skill = {
  color: string;
  icon: string;
  containerStyle?: React.CSSProperties;
};

export type Icon = "Code" | "Website" | "YouTube" | "Image";
type ProjectButton = {
  text: string;
  icon?: Icon;
  href: string;
};

type Banner = {
  text: string;
  color: string;
};

type Project = {
  img: string;
  imgs: string[];
  skills: string[];
  subtitle: string;
  desc: string;
  media?: string[];
  buttons?: ProjectButton[];
  banner?: Banner;
};

type Projects = {
  [projectName: string]: Project;
};

export const Self: {
  skills: {
    [skill: string]: Skill;
  };
  languages: string[];
  framelibs: string[];
  databases: string[];
  other: string[];
  projects: Projects;
} = {
  skills: {
    // Skills section remains unchanged
    // Languages
    TypeScript: {
      color: "#2f74c033",
      icon: "https://images.icon-icons.com/2415/PNG/512/typescript_plain_logo_icon_146316.png",
    },
    JavaScript: {
      color: "#b2d4ac33",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/640px-JavaScript-logo.png",
    },
    "Node.js": {
      color: "#8ac9a633",
      icon: "https://cdn.iconscout.com/icon/free/png-256/free-node-js-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-5-pack-logos-icons-3030179.png?f=webp&w=256",
    },
    Java: {
      color: "#73a1fb33",
      icon: "https://cdn-icons-png.flaticon.com/512/226/226777.png",
    },
    Python: {
      color: "#f2bb3033",
      icon: "https://cdn.iconscout.com/icon/free/png-256/free-python-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-5-pack-logos-icons-2945099.png?f=webp&w=256",
    },
    "C#": {
      color: "#39009133",
      icon: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Logo_C_sharp.svg",
    },
    HTML: {
      color: "#d1382b33",
      icon: "https://icons.iconarchive.com/icons/cornmanthe3rd/plex/512/Other-html-5-icon.png",
    },
    CSS: {
      color: "#1b73ba33",
      icon: "https://cdn.worldvectorlogo.com/logos/css-3.svg",
    },

    // frameworks/libraries
    "Next.js": {
      color: "#ffffff33",
      icon: "https://www.svgrepo.com/show/354113/nextjs-icon.svg",
    },
    "React.js": {
      color: "#61dbfb33",
      icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    },
    "Express.js": {
      color: "#9993",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4T1YOdxe--UDu6VlEaqifJFs_dIXyiJUM0A&s",
    },
    SocketIO: {
      color: "#9993",
      icon: "https://static-00.iconduck.com/assets.00/socket-io-icon-512x511-xjp7kzx6.png",
    },
    Tailwind: {
      color: "#35bef833",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png",
    },
    Jest: {
      color: "#8f96b133",
      icon: "https://static-00.iconduck.com/assets.00/jest-icon-1855x2048-ifiupldr.png",
    },
    Vitest: {
      color: "#729b1a33",
      icon: "https://vitest.dev/logo.svg",
    },
    Flask: {
      color: "#bbb3",
      icon: "https://icon.icepanel.io/Technology/svg/Flask.svg",
    },
    ROS2: {
      color: "#11203a33",
      icon: "https://avatars.githubusercontent.com/u/3979232?s=200&v=4",
    },
    Bootstrap: {
      color: "#7952b333",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png",
    },

    // databases
    Firebase: {
      color: "#ff910033",
      icon: "https://www.gstatic.com/devrel-devsite/prod/vbddb2c68c6e27c8062b052e877e6ccde82ab61ee731962a34dca560b12d02759/firebase/images/touchicon-180.png",
    },
    MongoDB: {
      color: "#13aa5233",
      icon: "https://www.svgrepo.com/show/331488/mongodb.svg",
    },
    InfluxDB: {
      color: "#5dc2ef33",
      icon: "https://static-00.iconduck.com/assets.00/influxdb-icon-2017x2048-38lz5101.png",
    },
    PostgreSQL: {
      color: "#2f679233",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png",
    },
    MySQL: {
      color: "#33989b33",
      icon: "https://cdn.worldvectorlogo.com/logos/mysql-logo-pure.svg",
    },

    // other technologies
    Github: {
      color: "#9993",
      icon: "https://images.icon-icons.com/3685/PNG/512/github_logo_icon_229278.png",
    },
    AWS: {
      color: "#fff3",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1200px-Amazon_Web_Services_Logo.svg.png",
    },
    MQTT: {
      color: "#66006633",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Mqtt-hor.svg/1280px-Mqtt-hor.svg.png",
    },
    Auth0: {
      color: "#ec531f33",
      icon: "https://static-00.iconduck.com/assets.00/auth0-icon-1832x2048-ewzjrdwk.png",
    },
    "Ubuntu Linux": {
      color: "#dd481433",
      icon: "https://cdn.worldvectorlogo.com/logos/ubuntu-4.svg",
    },
    Django: {
      color: "#09241233",
      icon: "https://cdn.worldvectorlogo.com/logos/django.svg",
    },
    Arduino: {
      color: "#66c3d533",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Arduino_IDE_logo.svg/2048px-Arduino_IDE_logo.svg.png",
    },
    Unity: {
      color: "#0003",
      icon: "/logos/unity.png",
    },
    // CMS: {
    //   color: "#59666633",
    //   icon: "https://cdn-icons-png.flaticon.com/512/1575/1575309.png",
    // },
  },
  languages: [
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Java",
    "Python",
    "C#",
    "HTML",
    "CSS",
  ],
  framelibs: [
    "Next.js",
    "React.js",
    "Express.js",
    "SocketIO",
    "Tailwind",
    "Jest",
    "Vitest",
    "Flask",
    "ROS2",
    "Bootstrap",
    "Django",
  ],
  databases: ["Firebase", "MongoDB", "InfluxDB", "PostgreSQL", "MySQL"],
  other: ["Github", "AWS", "MQTT", "Auth0", "Ubuntu Linux", "Arduino", "Unity"],
  projects: {
    "Club Mentorship Portal": {
      img: "/projects/uhdacm-mp/1.png",
      imgs: [
        "/projects/uhdacm-mp/2.png",
        "/projects/uhdacm-mp/3.png",
        "/projects/uhdacm-mp/4.png",
        "/projects/uhdacm-mp/5.png",
        "/projects/uhdacm-mp/7.png",
      ],
      subtitle: "Web App that facilitates peer-mentoring",
      desc: `Designed and led the development of a <b>full-stack</b> mentorship portal to streamline <b>mentor-mentee</b> management for <b>UHD ACM</b>.
      <br/>
      <br/>
      Implemented <b>Auth0</b> for secure authentication, <b>SocketIO</b> for real-time updates and messaging, and built a robust <b>back-end</b> using <b>Firebase, Express.js, and WebSockets</b>. 
      <br/><br/>
      Successfully supported <b>20+ concurrent users</b>, ensuring seamless performance and user engagement.`,
      skills: [
        "React.js",
        "Express.js",
        "TypeScript",
        "Node.js",
        "Vitest",
        "SocketIO",
        "Firebase",
        "Auth0",
      ],
      banner: {
        text: "Video Demo",
        color: red,
      },
      buttons: [
        // {
        //   text: 'Live site',
        //   href: 'https://mentorship.uhdacm.org',
        //   icon: 'Website'
        // },
        {
          text: "Video Demo",
          href: "https://www.youtube.com/watch?v=EseAN3L7BJY",
          icon: "YouTube",
        },
        {
          text: "Source Code",
          href: "https://github.com/UHDACM/ACM-Mentorship",
          icon: "Code",
        },
      ],
    },
    "UHD ACM Website": {
      img: "/projects/uhdacm/uhdacm.png",
      imgs: [
        "/projects/uhdacm/uhdacm.png",
        "/projects/uhdacm/2.png",
        "/projects/uhdacm/3.png",
        "/projects/uhdacm/4.png",
      ],
      subtitle: "Official website for UHD ACM chapter",
      desc: `Led the development of a <b>React-based website</b> for the UHD ACM chapter.
      <br/>
      <br/>
      Boosted <b>event participation by 60%</b> through improved online visibility and user experience.
      <br/>
      <br/>
      Will integrate <b>Auth0</b> for secure authentication and a <b>CMS</b> for simplified content management.`,
      skills: ["React.js", "TypeScript"],
      buttons: [
        {
          text: 'Live Site',
          href: 'https://uhdacm.org'
        }
      ],
      banner: {
        text: "Live Site",
        color: blue,
      },
    },
    "Live Sensor Data Research": {
      img: "/projects/sensor-data/0.png",
      imgs: [
        "/projects/sensor-data/0.png",
        "/projects/sensor-data/1.png",
        "/projects/sensor-data/2.png",
        "/projects/sensor-data/3.png",
        "/projects/sensor-data/4.png",
      ],
      subtitle: "Real-time sensor data collection and visualization",
      desc: `Engineered a <b>real-time sensor data pipeline</b>, enabling data collection, visualization, and analysis as an Undergraduate Researcher.
      <br/>
      <br/>
      Utilized <b>MQTT and InfluxDB</b> to optimize data transmission, storage, and retrieval for <b>high-efficiency performance</b>.
      <br/><br/>
      Designed an intuitive <b>React and Figma-based interface</b>, enhancing user experience and facilitating smooth sensor integration and data sharing.`,
      skills: [
        "React.js",
        "MQTT",
        "InfluxDB",
        "JavaScript",
        "Node.js",
        "SocketIO",
        "Arduino",
      ],
      buttons: [
        {
          text: "Video Overview",
          href: "https://youtu.be/Y5AvJBGQfj8",
          icon: "YouTube",
        },
        {
          text: "Research Poster",
          href: "https://drive.google.com/file/d/17HKcV653bkVtAFigOsCTfzUihP5kNjzg/view?usp=sharing",
          icon: "Image",
        },
        {
          text: "Frontend Code",
          href: "https://github.com/Deiahri/FengPrototypeFrontend",
          icon: "Code",
        },
        {
          text: "Application Backend Code",
          href: "https://github.com/Deiahri/FengPrototypeNTSBackend",
          icon: "Code",
        },
        {
          text: "Time-series Backend Code",
          href: "https://github.com/Deiahri/FengPrototypeTSBackend",
          icon: "Code",
        },
      ],
      banner: {
        text: "Video Demo",
        color: red,
      },
    },
    "CrossoverGlobal Website": {
      img: "/projects/crossover/0.png",
      imgs: ["/projects/crossover/0.png"],
      subtitle: "Charity website redesign and cost optimization",
      desc: `Redesigned the CrossoverGlobal frontend using <b>Bootstrap</b>, and migrated hosting from Webflow to <b>Render.com</b>.
      <br/>
      <br/>
      Achieved a <b>90% reduction in operational costs</b> while enhancing site performance and user experience.
      <br/><br/>
      Implemented responsive design principles and optimized loading speeds for better user engagement.`,
      skills: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      buttons: [
        {
          text: "Website",
          href: "https://crossoverglobal.org",
          icon: "Website",
        },
      ],
      banner: {
        text: "Live Site",
        color: blue,
      },
    },
    "TicTacToe AI": {
      img: "/projects/tttai/0.png",
      imgs: ["/projects/tttai/0.png"],
      subtitle: "AI Powered Tic-Tac-Toe agent",
      desc: `This project involves designing and implementing an AI bot to play Tic-Tac-Toe, along with a front-end interface for user interaction.
      <br/><br/>  
    The AI utilizes techniques such as <b>Mini-max search</b>, <b>Alpha-beta pruning</b>, and a <b>Utility-based agent</b> framework.
    <br/><br/>  
    Initially developed in <b>Python</b>, it was later converted to <b>JavaScript</b> to ensure accessibility via a web application.<br/><br/>
    <em>TLDR: It never loses.</em>`,
      skills: ["HTML", "Python", "JavaScript"],
      banner: {
        text: "Live Site",
        color: blue,
      },
      buttons: [
        {
          text: "Demo",
          href: "https://deiahri.github.io/TicTacToe.js/",
          icon: "Website",
        },
        {
          text: "Source Code",
          href: "https://github.com/Deiahri/TicTacToe.js",
          icon: "Code",
        },
      ],
    },
    "Darwin Effect": {
      img: "/projects/darwineffect/2.png",
      imgs: ["/projects/darwineffect/0.png", "/projects/darwineffect/1.png", "/projects/darwineffect/2.png"],
      subtitle: "Simple evolution simulator",
      desc: `The primary goal of this project was to <b>develop a game in Unity</b> centered on the concept of evolution and subsequently present it to middle school students.<br /><br />
  The <b>implementation</b> involved drawing inspiration from a <a href="https://www.youtube.com/watch?v=r_It_X7v-1E&t=1s&ab_channel=SebastianLague" target="_blank">video by Sebastian Lague</a>, utilizing <b>Unity</b> as the chosen game engine, and employing <b>C#</b> scripts to imbue functionality into the user interface, virtual animals, and the game's soundtrack.<br /><br />
  Notably, the entire soundtrack for this Unity-based evolution game was created by yours truly.
</p>`,
      skills: [
        "Unity",
        "C#"
      ],
      banner: {
        text: "Play Game",
        color: blue,
      },
      buttons: [
        {
          text: "Game Site",
          href: "https://deiahri.github.io/darwin-effect",
          icon: "Website",
        },
        {
          text: "Source Code",
          href: "https://github.com/Deiahri/darwin-effect-source-code",
          icon: "Code",
        },
      ],
    },
    "Bank App": {
      img: "/projects/bankapp/0.png",
      imgs: ["/projects/bankapp/1.png", "/projects/bankapp/2.png"],
      subtitle: "Simple bank application",
      desc: `Developed a modern bank application adhering to the <b>Agile Cowboy Methodology</b>, showcasing expertise in critical technologies.<br /><br />
  The <b>implementation</b> utilized <b>PostgreSQL</b> for database design and <b>Express.js</b>, a <b>Node.js</b> framework, to create a <b>REST API</b> for database interaction.<br /><br />
  A user-friendly front-end was constructed with <b>Bootstrap</b> and <b>JavaScript</b> to communicate with the API, enabling core banking functionalities.<br /><br />
  The application was successfully deployed on an <b>AWS EC2</b> instance, demonstrating a comprehensive understanding of full-stack development within an <b>Agile Development</b> environment.`,
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap",
        "AWS",
      ],
      buttons: [
        {
          text: "Video Demo",
          href: "https://www.youtube.com/watch?v=JzUQu2yAMXs",
          icon: "YouTube",
        },
        {
          text: "Frontend Code",
          href: "https://github.com/Deiahri/BankV2",
          icon: "Code",
        },
        {
          text: "Backend Code",
          href: "https://github.com/Deiahri/BankV2-Server",
          icon: "Code",
        },
      ],
      banner: {
        text: "Video Demo",
        color: red,
      },
    }
  },
};
