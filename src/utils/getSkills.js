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

export const getTechSkills = () => {
  return {
    title: "My Tech Skills.",
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
