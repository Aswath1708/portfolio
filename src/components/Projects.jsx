import React from "react";
import { getProjects } from "../utils/getProjects";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = getProjects();
  return (
    <div
      className="bg-gray-800 flex flex-col items-center gap-5 p-5"
      id="projects"
    >
      <h1 className="text-xl text-gray-500 font-black italic">My Projects.</h1>
      <div className="flex flex-row justify-evenly gap-5 flex-wrap">
        {projects.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
