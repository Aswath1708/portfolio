import Java from "../assets/skills/Java.png";
import HTML from "../assets/skills/HTML5.png";
import CSS from "../assets/skills/CSS.png";
import JS from "../assets/skills/JavaScript.png";
import Bootstrap from "../assets/skills/Bootstrap.png";
import React from "../assets/skills/React.png";
import Tailwind from "../assets/skills/Tailwind.png";
import Git from "../assets/skills/Git.png";
import Npm from "../assets/skills/Npm.png";
import {
  faBootstrap,
  faCss3,
  faGitAlt,
  faHtml5,
  faJava,
  faJs,
  faNpm,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

// export const getSkills = () => {
//   return [Java, HTML, CSS, JS, Bootstrap, React, Tailwind, Git, Npm];
// };

export const getSkills = () => {
  return [
    { skill: "JAVA", icon: faJava },
    { skill: "HTML5", icon: faHtml5 },
    { skill: "CSS3", icon: faCss3 },
    { skill: "JS", icon: faJs },
    { skill: "BOOTSTRAP", icon: faBootstrap },
    { skill: "REACT", icon: faReact },
    { skill: "GIT", icon: faGitAlt },
    { skill: "NPM", icon: faNpm },
  ];
};
