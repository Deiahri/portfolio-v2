import React from "react";

type Skill = {
  color: string;
  icon: string;
  containerStyle?: React.CSSProperties;
};

export type Icon = 'Code' | 'Website';
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
    Render: {
      color: "#46e3b733",
      icon: "https://images.opencollective.com/render/521d7ba/logo/256.png",
    },
    Django: {
      color: "#09241233",
      icon: "https://cdn.worldvectorlogo.com/logos/django.svg",
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
  other: ["Github", "AWS", "MQTT", "Auth0", "Ubuntu Linux", "Render"],
  projects: {
    "Club Mentorship Portal": {
      img: '/projects/img/MentorPortal.png',
      imgs: ['/projects/img/MentorPortal.png'],
      subtitle: 'Web App that facilitates peer-mentoring',
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
        text: 'Live Site',
        color: '#ff1919'
      },
      buttons: [
        // {
        //   text: 'Live site',
        //   href: 'https://mentorship.uhdacm.org',
        //   icon: 'Website'
        // },
        {
          text: 'Source Code',
          href: 'https://github.com/UHDACM/ACM-Mentorship',
          icon: 'Code'
        }
      ]
    },
    "UHD ACM Website": {
      img: '/projects/uhdacm/uhdacm.png',
      imgs: ['/projects/img/ACMWebsite.png'],
      subtitle: 'Official website for UHD ACM chapter',
      desc: `Led the development of a <b>React-based website</b> for the UHD ACM chapter.
      <br/>
      <br/>
      Integrated <b>Auth0</b> for secure authentication and a <b>CMS</b> for simplified content management.
      <br/><br/>
      Boosted <b>event participation by 60%</b> through improved online visibility and user experience.`,
      skills: [
        "React.js",
        "TypeScript",
        "Node.js",
        "Auth0"
      ],
      buttons: [
        {
          text: 'Website',
          href: 'https://uhdacm.org',
          icon: 'Website'
        }
      ]
    },
    "Zero-Cost Scalable Chat": {
      img: '/projects/img/ScalableChat.png',
      imgs: ['/projects/img/ScalableChat.png'],
      subtitle: 'Cost-effective real-time chat application',
      desc: `Created a <b>real-time chat application</b> using <b>React, Express.js, and Firebase</b>, thoroughly tested via <b>Vitest</b>.
      <br/>
      <br/>
      Implemented <b>cost-effective solutions</b>, reducing monthly operational costs to <b>$0</b> while scaling to handle <b>hundreds of real-time updates</b>.
      <br/><br/>
      Focused on performance optimization and efficient resource utilization for maximum scalability.`,
      skills: [
        "React.js",
        "Express.js",
        "Firebase",
        "TypeScript",
        "Node.js",
        "Vitest"
      ],
      buttons: [
        {
          text: 'Source Code',
          href: 'https://github.com/Deiahri/zero-cost-chat',
          icon: 'Code'
        }
      ]
    },
    "Sensor Data Pipeline": {
      img: '/projects/img/SensorPipeline.png',
      imgs: ['/projects/img/SensorPipeline.png'],
      subtitle: 'Real-time sensor data collection and visualization',
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
        "Node.js"
      ],
      buttons: [
        {
          text: 'Research Paper',
          href: 'https://example.com/sensor-data-research',
          icon: 'Website'
        }
      ]
    },
    "CrossoverGlobal Website Redesign": {
      img: '/projects/img/CrossoverGlobal.png',
      imgs: ['/projects/img/CrossoverGlobal.png'],
      subtitle: 'Website redesign with cost optimization',
      desc: `Redesigned the CrossoverGlobal frontend using <b>Bootstrap</b>, and migrated hosting from Webflow to <b>Render.com</b>.
      <br/>
      <br/>
      Achieved a <b>90% reduction in operational costs</b> while enhancing site performance and user experience.
      <br/><br/>
      Implemented responsive design principles and optimized loading speeds for better user engagement.`,
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap",
        "Render"
      ],
      buttons: [
        {
          text: 'Website',
          href: 'https://crossoverglobal.org',
          icon: 'Website'
        }
      ]
    },
    "ACM E-Commerce Platform": {
      img: '/projects/img/ECommerce.png',
      imgs: ['/projects/img/ECommerce.png'],
      subtitle: 'Club merchandise e-commerce platform',
      desc: `Led and collaborated with a group of <b>10+ developers</b> in creating an <b>e-commerce platform</b> for ACM club merchandise.
      <br/>
      <br/>
      Used <b>Auth0</b> for authentication, created <b>RESTful APIs</b> with <b>Express.js</b>, and built a frontend using <b>React</b>.
      <br/><br/>
      Implemented secure payment processing and inventory management features for a complete shopping experience.`,
      skills: [
        "React.js",
        "Express.js",
        "TypeScript",
        "Node.js",
        "Auth0",
        "MongoDB"
      ],
      banner: {
        text: 'New Project',
        color: '#1947e8'
      },
      buttons: [
        {
          text: 'Store',
          href: 'https://store.uhdacm.org',
          icon: 'Website'
        },
        {
          text: 'Source Code',
          href: 'https://github.com/UHDACM/store',
          icon: 'Code'
        }
      ]
    }
  },
};
