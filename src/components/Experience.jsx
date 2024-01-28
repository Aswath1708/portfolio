import React from "react";
import { getExperience } from "../utils/getExperience";

const Experience = () => {
  const experience = getExperience();

  return (
    <div className="p-10 flex flex-col items-center gap-5 bg-blueGray text-white">
      <h1 className="text-xl font-medium">EXPERIENCE</h1>
      <ul>
        {experience.map(
          ({ type, designation, company, startDate, endDate }) => {
            return (
              <li>
                <p className="text-lg text-center">
                  {type} - {designation}, {company}. {startDate}-{endDate}
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
