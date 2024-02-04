import React from "react";
import Profile from "../assets/Profile BW.jpg";

const About = () => {
  return (
    <div
      className="text-gray-800 flex md:flex-row flex-col items-center md:gap-10 gap-5 lg:px-10 p-10 md:flex-1 md:h-[86vh]"
      id="app"
    >
      <div className="md:h-90 md:min-w-[260px] h-80">
        <img
          src={Profile}
          alt="profile"
          className="h-full w-full object-cover object-right rounded-lg"
        />
      </div>
      <div className="flex flex-col gap-5">
        <h1 className="md:text-4xl text-2xl text-center">Hi! I'm Aswath,</h1>
        <p className="text-center md:text-lg">
          A{" "}
          <span className="font-bold text-yellow-500 text-2xl">
            Frontend Developer
          </span>{" "}
          seeking an opportunity to enhance and explore my technical knowledge
          gained at Anna University and Newton School. I hold a Bachelor of
          Engineering degree from{" "}
          <span className="text-xl">
            Thanthai Periyar Government Institute of technology
          </span>
          .
        </p>
      </div>
    </div>
  );
};

export default About;
