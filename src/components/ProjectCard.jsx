import React from "react";

const ProjectCard = ({link,image,title}) => {
  return (
    <div className="w-80 h-80 overflow-hidden rounded-xl duration-75 relative">
      <a href={link}>
        <img
          src={image}
          alt="project-name"
          className="w-full h-full object-cover rounded-xl hover:scale-125  duration-1000"
        />
        <p className="absolute bottom-0 w-full text-center text-gray-800 bg-white py-2 px-3">
          {title}
        </p>
      </a>
    </div>
  );
};

export default ProjectCard;
