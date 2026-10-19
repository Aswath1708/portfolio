import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const tileClass =
  "h-10 bg-yellow-400 text-white rounded flex items-center justify-center";

const Skills = ({ title, groups }) => {
  return (
    <div
      className="p-10 flex flex-col items-center md:items-start gap-8"
      id="skills"
    >
      <h1 className="text-xl font-black  text-gray-400">{title}</h1>
      {groups.map(({ category, skills }) => (
        <div
          key={category}
          className="flex flex-col items-center md:items-start gap-4"
        >
          <h2 className="text-sm font-bold tracking-widest uppercase text-gray-500">
            {category}
          </h2>
          <div className="flex md:flex-row flex-col flex-wrap md:items-center items-center gap-x-10 gap-y-6">
            {skills.map(({ skill, icon, abbr }) => (
              <div className="flex md:flex-col gap-5 items-center" key={skill}>
                {icon ? (
                  <FontAwesomeIcon
                    icon={icon}
                    className={`${tileClass} px-3 py-2`}
                  />
                ) : (
                  <span
                    className={`${tileClass} min-w-[2.5rem] px-3 text-sm font-bold`}
                  >
                    {abbr}
                  </span>
                )}
                <p className="font-medium text-gray-800">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
