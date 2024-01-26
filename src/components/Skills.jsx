import React from "react";
import { getSkills } from "../utils/getSkills";

const Skills = () => {
  const skills = getSkills();
  return (
    <div>
      <h1>Skills</h1>
      <div>
        {skills.map((skill, i) => {
          return (
            <div key={i}>
              {" "}
              <img src={skill} alt="skill" />{" "}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
