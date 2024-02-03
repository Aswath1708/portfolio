import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Skills = ({ title, skillSet }) => {
  return (
    <div
      className=" text-gray-800 p-10 flex flex-col items-center md:items-start gap-5"
      id="skills"
      
    >
      <h1 className="text-xl font-black italic text-gray-400">{title}</h1>
      <div className="flex md:flex-row flex-col flex-wrap md:justify-center md:items-center gap-10">
        {skillSet.map(({ skill, icon }, i) => {
          return (
            <div className="flex md:flex-col gap-5 items-center" key={i}>
              <FontAwesomeIcon icon={icon} className="h-10" />
              <p className="font-medium">{skill}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
