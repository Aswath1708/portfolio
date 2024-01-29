import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Skills = ({ title, skillSet }) => {
  return (
    <div className="bg-blueGray text-white p-10 flex flex-col items-center gap-5">
      <h1 className="text-xl">{title}</h1>
      <div className="flex flex-row flex-wrap justify-center items-center gap-5">
        {skillSet.map(({ skill, icon }, i) => {
          return (
            <div className="flex flex-col items-center" key={i}>
              <FontAwesomeIcon icon={icon} className="h-10" />
              <p>{skill}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
