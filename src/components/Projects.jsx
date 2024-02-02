import React from "react";
import { getProjects } from "../utils/getProjects";

const Projects = () => {
  const projects = getProjects();
  return (
    <div
      className="bg-gray-800 flex flex-col items-center gap-5 p-5"
      id="projects"
    >
      <h1 className="text-xl text-yellow-300 font-medium">MY PROJECTS</h1>
      <div className="flex flex-row justify-evenly gap-5 flex-wrap">
        {projects.map(({ link, title, image }, i) => {
          return (
            <div
              key={i}
              className="w-80 h-80 overflow-hidden rounded-xl border-2 border-white duration-75 relative"
            >
              <a href={link}>
                <img
                  src={image}
                  alt="project-image"
                  className="w-full h-full object-cover rounded-xl hover:scale-125  duration-1000"
                />
                <p className="absolute bottom-0 w-full text-center text-gray-800 bg-white py-2 px-3">
                  {title}
                </p>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
