import React from "react";
import Profile from "../assets/Profile.jpg";

const About = () => {
  return (
    <div className="bg-brightYellow text-blueGray flex lg:flex-row justify-center items-center gap-10 p-10 lg:h-halfFull h-fit flex-col">
      <div className="h-3/4">
        <img src={Profile} alt="profile-image" className="h-full" />
      </div>
      <div className="flex flex-col gap-5">
        <h1 className="text-4xl text-center">Aswath S</h1>
        <p className="text-center text-lg">
          A Frontend Developer seeking an opportunity to enhance and explore my
          technical knowledge.
        </p>
      </div>
    </div>
  );
};

export default About;
