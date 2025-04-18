import React from "react";
import Styles from "../sections/Projects/Projects.module.css";

function ProjectCard({ project }) {
  return (
    <a
      href={project.url && project.url !== "" ? project.url : `#`}
      className={Styles.projectCard}
      target="_blank"
      onClick={(e) => {
        if (!project.url || project.url === "") {
          e.preventDefault();
          window.alert("It's an upcoming project!");
        }
      }}
    >
      <img
        src={project.image}
        alt={project.name}
        className={Styles.projectImage}
      />
      <h2 className={Styles.projectTitle}>{project.name}</h2>
      <p className={Styles.projectSubtitle}>{project.subtitle}</p>
    </a>
  );
}

export default ProjectCard;
