import React from "react";
import { getExperience } from "../utils/getExperience";

const Experience = () => {
  const experience = getExperience();

  return (
    <div className="p-10 flex flex-col md:items-start items-center gap-5 bg-gray-800 text-white">
      <h1 className="text-xl font-black text-gray-400 italic">Experience.</h1>
      <ul>
        {experience.map(
          ({ type, designation, company, startDate, endDate }, i) => {
            return (
              <li
                className="flex flex-col md:flex-row lg:gap-3 text-lg text-center"
                key={i}
              >
                <p>{type}-</p>
                <p>{designation},</p>
                <p>{company}.</p>
                <p>
                  {startDate}-{endDate}
                </p>
              </li>
            );
          }
        )}
      </ul>
    </div>
  );
};

export default Experience;
