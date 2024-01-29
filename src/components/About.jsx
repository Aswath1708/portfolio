import React from "react";
import Profile from "../assets/Profile BW.jpg";

const About = () => {
  return (
    <div
      className="bg-brightYellow text-blueGray flex md:flex-row flex-col justify-center items-center gap-10 p-10 lg:h-halfFull h-fit"
      id="app"
    >
      <div className="md:h-3/4 h-80">
        <img
          src={Profile}
          alt="profile-image"
          className="h-full object-cover rounded "
        />
      </div>
      <div className="flex flex-col gap-5">
        <h1 className="text-4xl text-center">Hi! I'm Aswath S,</h1>
        <p className="text-center text-lg">
          A <span className="font-bold">Frontend Developer</span> seeking an
          opportunity to enhance and explore my technical knowledge.
        </p>
      </div>
    </div>
  );
};

export default About;
