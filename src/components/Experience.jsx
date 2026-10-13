import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faCertificate } from "@fortawesome/free-solid-svg-icons";
import { getExperience } from "../utils/getExperience";

const Experience = () => {
  const experience = getExperience();

  return (
    <div className="p-10 flex flex-col items-center md:items-start gap-10 bg-gray-800 text-white" id="experience">
      <h1 className="text-xl font-black text-gray-400">Experience.</h1>
      <ul className="flex flex-col gap-10 w-full md:max-w-2xl border-l-2 border-yellow-400/30 md:pl-8 pl-4">
        {experience.map(
          ({ type, designation, company, startDate, endDate }, i) => {
            const isWork = type === "WORK";
            return (
              <li className="relative" key={i}>
                <span className="absolute md:-left-[3.1rem] -left-[2.1rem] top-1 h-8 w-8 rounded-full bg-gray-800 border-2 border-yellow-400 flex items-center justify-center">
                  <FontAwesomeIcon
                    icon={isWork ? faBriefcase : faCertificate}
                    className="h-3.5 text-yellow-400"
                  />
                </span>
                <div className="flex flex-col gap-1 text-center md:text-left">
                  <span className="text-xs font-bold tracking-widest text-yellow-400 uppercase">
                    {type}
                  </span>
                  <p className="text-lg font-bold">{designation}</p>
                  <p className="text-gray-300">{company}</p>
                  <p className="text-sm text-gray-400">
                    {startDate} &ndash; {endDate}
                  </p>
                </div>
              </li>
            );
          }
        )}
      </ul>
    </div>
  );
};

export default Experience;
