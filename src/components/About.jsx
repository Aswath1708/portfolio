import React from "react";
import Profile from "../assets/Profile.jpg";

const About = () => {
  return (
    <div className="bg-brightYellow flex flex-row items-center gap-10 p-10">
      <div>
        <img src={Profile} alt="profile-image" />
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum odio sint
        repellendus quibusdam ipsa. Voluptas ducimus est animi cumque dolor, non
        quo voluptatem suscipit voluptatum maiores ratione, fuga nesciunt nihil.
      </p>
    </div>
  );
};

export default About;
