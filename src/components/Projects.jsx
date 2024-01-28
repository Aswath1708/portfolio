import React from "react";
import { getProjects } from "../utils/getProjects";

const Projects = () => {
  const projects = getProjects();
  return (
    <div className="bg-brightYellow text-blueGray flex flex-col items-center gap-5 p-5 xl:p-10" id="projects">
      <h1 className="text-xl font-medium">PROJECTS</h1>
      <div className="flex flex-row justify-evenly gap-5 flex-wrap">
        {projects.map(({ link, title, image }, i) => {
          return (
            <div key={i} className="w-80 h-80 rounded-xl overflow-hidden relative">
              <a href={link}>
                <img
                  src={image}
                  alt="project-image"
                  className="w-full h-full object-cover rounded-xl hover:scale-125 duration-1000"
                />
                <p className="absolute bottom-5 left-5 text-brightYellow font-bold bg-blueGray px-2 rounded">{title}</p>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
