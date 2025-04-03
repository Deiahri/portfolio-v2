import React from "react";

type Skill = {
  color: string;
  icon: string;
  containerStyle?: React.CSSProperties;
};

type ProjectButton = {
  text: string;
  icon: string;
  href: string;
};

type Banner = {
  text: string;
  color: string;
};

type Project = {
  img: string;
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
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4T1YOdxe--UDu6VlEaqifJFs_dIXyiJUM0A&s"
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
  },
  languages: [
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Java",
    "Python",
    "HTML",
    "CSS",
  ],
  framelibs: [
    "Next.js",
    "React.js",
    "SocketIO",
    "Tailwind",
    "Jest",
    "Vitest",
    "Flask",
    "ROS2",
  ],
  databases: ["Firebase", "MongoDB", "InfluxDB", "PostgreSQL", "MySQL"],
  other: ["Github", "AWS", "MQTT", "Auth0", "Ubuntu Linux"],
  projects: {
    "Club Mentorship Portal": {
      img: 'https://andrijaweb.vercel.app/_next/image?url=%2Fimgs%2Fprojects%2Fportfolio-mockup2.png&w=1080&q=75',
      subtitle: 'Web App that facilitates peer-mentoring.',
      desc: `Designed and led the development of a <b>full-stack</b> mentorship portal to streamline <b>mentor-mentee</b> management for <b>UHD ACM</b>. Implemented <b>Auth0</b> for secure authentication, <b>SocketIO</b> for real-time updates and messaging, and built a robust <b>back-end</b> using <b>Firebase, Express.js, and WebSockets</b>. Successfully supported <b>20+ concurrent users</b>, ensuring seamless performance and user engagement.`,
      skills: [
        "React.js",
        "Express.js",
        "TypeScript",
        "Node.js",
        "Vitest",
        "SocketIO",
        "Firebase",
      ],
    },
    "Club Mentorship Portal2": {
      img: 'https://andrijaweb.vercel.app/_next/image?url=%2Fimgs%2Fprojects%2Fportfolio-mockup2.png&w=1080&q=75',
      subtitle: 'Web App that facilitates peer-mentoring.',
      desc: `Designed and led the development of a <b>full-stack</b> mentorship portal to streamline <b>mentor-mentee</b> management for <b>UHD ACM</b>. Implemented <b>Auth0</b> for secure authentication, <b>SocketIO</b> for real-time updates and messaging, and built a robust <b>back-end</b> using <b>Firebase, Express.js, and WebSockets</b>. Successfully supported <b>20+ concurrent users</b>, ensuring seamless performance and user engagement.`,
      skills: [
        "React.js",
        "Express.js",
        "TypeScript",
        "Node.js",
        "Vitest",
        "SocketIO",
        "Firebase",
      ],
    },
    "Club Mentorship Portal3": {
      img: '/projects/img/MentorPortal.png',
      subtitle: 'Web App that facilitates peer-mentoring.',
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
      ],
    },
  },
};
