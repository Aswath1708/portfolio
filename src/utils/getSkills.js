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
import {
  faHourglassHalf,
  faLanguage,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";

export const getTechSkills = () => {
  return {
    title: "TECH SKILLS",
    skillSet: [
      { skill: "JAVA", icon: faJava },
      { skill: "HTML5", icon: faHtml5 },
      { skill: "CSS3", icon: faCss3 },
      { skill: "JS", icon: faJs },
      { skill: "BOOTSTRAP", icon: faBootstrap },
      { skill: "REACT", icon: faReact },
      { skill: "GIT", icon: faGitAlt },
      { skill: "NPM", icon: faNpm },
    ],
  };
};

export const getNonTechSkills = () => {
  return {
    title: "NON TECH SKILLS",
    skillSet: [
      { skill: "COMMUNICATION", icon: faLanguage },
      { skill: "TIME MANAGEMENT", icon: faHourglassHalf },
      { skill: "TEAM PERSON", icon: faUserGroup },
    ],
  };
};
