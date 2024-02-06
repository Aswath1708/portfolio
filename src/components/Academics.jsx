import React from "react";
import { getAcademics } from "../utils/getAcademics";

const Academics = () => {
  const academics = getAcademics();

  return (
    <div className="p-10" id="academics">
      <h1 className="font-black text-xl text-gray-400 mb-5">Academics.</h1>
      <ul className="flex flex-col gap-10">
        {academics.map(
          ({ institution, education, logo, from, to, cgpa }, i) => {
            return (
              <li key={i} className="flex md:flex-row flex-col items-center gap-10">
                <div className="h-40 w-40 flex flex-row justify-center">
                  <img src={logo} alt="institution title" className="h-full" />
                </div>
                <div className="text-gray-800 text-xl md:text-left text-center flex flex-col gap-2 font-medium italic">
                  <p >{education}</p>
                  <p>{institution}</p>
                  <p>
                    {from}-{to}
                  </p>
                  <p className="font-bold">{cgpa}</p>
                </div>
              </li>
            );
          }
        )}
      </ul>
    </div>
  );
};

export default Academics;
