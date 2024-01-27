import React from "react";
import { getSkills } from "../utils/getSkills";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Skills = () => {
  const skills = getSkills();
  return (
    <div className="bg-blueGray text-white p-10 flex flex-col items-center gap-5">
      {/* <h1>Tech Stack</h1> */}
      <div className="flex flex-row flex-wrap justify-center items-center gap-5">
        {skills.map((skill, i) => {
          return <FontAwesomeIcon icon={skill} key={i} className="h-10"/>;
        })}
      </div>
    </div>
  );
};

export default Skills;
