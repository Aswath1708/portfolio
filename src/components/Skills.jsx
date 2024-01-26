import React from "react";
import { getSkills } from "../utils/getSkills";

const Skills = () => {
  const skills = getSkills();
  return (
    <div className="bg-blueGray text-white p-10 flex flex-col gap-5">
      <h1>Skills</h1>
      <div className="flex flex-row flex-wrap gap-5">
        {skills.map((skill, i) => {
          return (
            <div key={i} className="w-32">
              {" "}
              <img src={skill} alt="skill" className="w-full"/>{" "}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
