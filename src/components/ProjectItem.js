import React from "react";

function ProjectItem({ name, about, technologies }) {
  const technologiesList = technologies.map((techonolgy) => (
    <span key={techonolgy}>{techonolgy}</span>
  ));
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {<div className="technologies">{technologiesList}</div>/* render a <span> for each technology in the technologies array */}
      </div>
    </div>
  );
}

export default ProjectItem;
