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
  imgs: CarouselItem[];
  skills: string[];
  subtitle: string;
  desc: string;
  media?: string[];
  buttons?: ProjectButton[];
  banner?: Banner;
};

export interface CarouselItem {
  type: "image" | "video" | "youtube";
  src: string;
  thumbnail?: string;
}

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
      icon: "https://upload.wikimedia.org/wikipedia/commons/9/96/Socket-io.svg",
    },
    Tailwind: {
      color: "#35bef833",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png",
    },
    Jest: {
      color: "#8f96b133",
      icon: "/logos/jest.webp",
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
      icon: "/logos/influxdb.svg",
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
      icon: "/logos/auth0.png",
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
    Strapi: {
      color: "#2f7bb633",
      icon: "/logos/strapi.jpeg",
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
  other: [
    "Github",
    "AWS",
    // "MQTT",
    "Auth0",
    "Ubuntu Linux",
    "Arduino",
    "Unity",
    "Strapi",
  ],
  projects: {
    "Club Mentorship Portal": {
      img: "/projects/uhdacm-mp/1.png",
      imgs: [
        {
          type: "youtube",
          src: "EseAN3L7BJY",
          thumbnail: "/projects/uhdacm-mp/2.png",
        },
        { type: "image", src: "/projects/uhdacm-mp/2.png" },
        { type: "image", src: "/projects/uhdacm-mp/3.png" },
        { type: "image", src: "/projects/uhdacm-mp/4.png" },
        { type: "image", src: "/projects/uhdacm-mp/5.png" },
        { type: "image", src: "/projects/uhdacm-mp/7.png" },
      ],
      subtitle: "Web App that facilitates peer-mentoring",
      desc: `I led developers, designers, and social science students to build the UHD ACM Mentorship Portal, a localized platform connecting UHD students with mentors for real-world guidance.
<br/><br/>
Together, we designed, tested, and launched the MVP using React, Express.js, and Firebase, onboarding 30+ users and facilitating over 130 messages.
<br/><br/>
The project highlights collaborative, open-source development and a shared mission to make mentorship more accessible to the UHD community.`,
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
        text: "Video",
        color: red,
      },
      buttons: [
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
        {
          type: "youtube",
          src: "yke5VbC_7vU",
          thumbnail: "/projects/uhdacm/yt1-thumb.png",
        },
        { type: "image", src: "/projects/uhdacm/uhdacm.png" },
        { type: "image", src: "/projects/uhdacm/2.png" },
        { type: "image", src: "/projects/uhdacm/3.png" },
        { type: "image", src: "/projects/uhdacm/4.png" },
      ],
      subtitle: "Official website for UHD ACM chapter",
      desc: `I led the redesign of the UHD ACM Club website, turning it from a static page into a dynamic CMS platform serving 200+ members.
<br/><br/>
Built with Next.js and Strapi, it boosted event attendance by 50% and made content updates effortless.
<br/><br/>
See it live at uhdacm.org
<br/>(or click the button below).`,
      skills: ["Next.js", "React.js", "TypeScript", "Strapi"],
      buttons: [
        {
          text: "Live Site",
          href: "https://uhdacm.org",
        },
      ],
      banner: {
        text: "Live Site",
        color: blue,
      },
    },
    "Live Sensor Data Research": {
      img: "/projects/sensor-data/0.png",
      imgs: [
        {
          type: "youtube",
          src: "Y5AvJBGQfj8",
          thumbnail: "/projects/sensor-data/0.png",
        },
        { type: "image", src: "/projects/sensor-data/0.png" },
        { type: "image", src: "/projects/sensor-data/1.png" },
        { type: "image", src: "/projects/sensor-data/2.png" },
        { type: "image", src: "/projects/sensor-data/3.png" },
        { type: "image", src: "/projects/sensor-data/4.png" },
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
        text: "Video",
        color: red,
      },
    },
    "CrossoverGlobal Website": {
      img: "/projects/crossover/0.png",
      imgs: [{ type: "image", src: "/projects/crossover/0.png" }],
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
      imgs: [{ type: "image", src: "/projects/tttai/0.png" }],
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
      imgs: [
        {
          type: "youtube",
          src: "0s5xiqYdGEM",
          thumbnail: "/projects/darwineffect/0.png",
        },
        { type: "image", src: "/projects/darwineffect/0.png" },
        { type: "image", src: "/projects/darwineffect/1.png" },
        { type: "image", src: "/projects/darwineffect/2.png" },
      ],
      subtitle: "Simple evolution simulator",
      desc: `The primary goal of this project was to <b>develop a game in Unity</b> centered on the concept of evolution and subsequently present it to middle school students.<br /><br />
  The <b>implementation</b> involved drawing inspiration from a <a href="https://www.youtube.com/watch?v=r_It_X7v-1E&t=1s&ab_channel=SebastianLague" target="_blank">video by Sebastian Lague</a>, utilizing <b>Unity</b> as the chosen game engine, and employing <b>C#</b> scripts to imbue functionality into the user interface, virtual animals, and the game's soundtrack.<br /><br />
  Notably, the entire soundtrack for this Unity-based evolution game was created by yours truly.
</p>`,
      skills: ["Unity", "C#"],
      banner: {
        text: "Live Game",
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
      imgs: [
        {
          type: "youtube",
          src: "JzUQu2yAMXs",
          thumbnail: "/projects/bankapp/1.png",
        },
        { type: "image", src: "/projects/bankapp/1.png" },
        { type: "image", src: "/projects/bankapp/2.png" },
      ],
      subtitle: "Simple bank application",
      desc: `Developed a modern bank application adhering to the <b>Agile Cowboy Methodology</b>, showcasing expertise in critical technologies.<br /><br />
  The <b>implementation</b> utilized <b>PostgreSQL</b> for database design and <b>Express.js</b>, a <b>Node.js</b> framework, to create a <b>REST API</b> for database interaction.<br /><br />
  A user-friendly front-end was constructed with <b>Bootstrap</b> and <b>JavaScript</b> to communicate with the API, enabling core banking functionalities.<br /><br />
  The application was successfully deployed on an <b>AWS EC2</b> instance, demonstrating a comprehensive understanding of full-stack development within an <b>Agile Development</b> environment.`,
      skills: ["HTML", "CSS", "JavaScript", "Bootstrap", "AWS", "PostgreSQL"],
      buttons: [
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
        text: "Video",
        color: red,
      },
    },
  },
};
