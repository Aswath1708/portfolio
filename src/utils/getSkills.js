import {
  faAngular,
  faBootstrap,
  faCss3,
  faGitAlt,
  faHtml5,
  faJava,
  faJs,
  faNodeJs,
  faNpm,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faCodeBranch, faFlask } from "@fortawesome/free-solid-svg-icons";

// A skill with `icon` renders a Font Awesome icon tile; one with only `abbr`
// renders a text tile (Font Awesome's free set has no logo for it).
export const getTechSkills = () => {
  return {
    title: "My Tech Skills.",
    groups: [
      {
        category: "Languages",
        skills: [
          { skill: "JAVASCRIPT", icon: faJs },
          { skill: "TYPESCRIPT", abbr: "TS" },
          { skill: "HTML5", icon: faHtml5 },
          { skill: "CSS3", icon: faCss3 },
          { skill: "JAVA", icon: faJava },
        ],
      },
      {
        category: "Frontend",
        skills: [
          { skill: "REACT", icon: faReact },
          { skill: "ANGULAR", icon: faAngular },
          { skill: "RXJS", abbr: "Rx" },
          { skill: "TAILWIND CSS", abbr: "TW" },
          { skill: "BOOTSTRAP", icon: faBootstrap },
          { skill: "PRIMENG", abbr: "PNG" },
          { skill: "PRIMEFLEX", abbr: "PF" },
        ],
      },
      {
        category: "Backend",
        skills: [
          { skill: "NODE JS", icon: faNodeJs },
          { skill: "EXPRESS JS", abbr: "Ex" },
          { skill: "SEQUELIZE ORM", abbr: "SQ" },
        ],
      },
      {
        category: "Testing",
        skills: [{ skill: "KARMA", icon: faFlask }],
      },
      {
        category: "Tools & DevOps",
        skills: [
          { skill: "GIT", icon: faGitAlt },
          { skill: "NPM", icon: faNpm },
          { skill: "CI/CD", icon: faCodeBranch },
          { skill: "VERCEL", abbr: "VC" },
          { skill: "NETLIFY", abbr: "NL" },
        ],
      },
    ],
  };
};
