import React from "react";
import Styles from "./Projects.module.css";
import info from "../../info.json";
import ProjectCard from "../../common/ProjectCard.jsx";

function Projects() {
  const projects = info.projects;
  return (
    <section id="projects" className={Styles.projectsSection}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={Styles.projectsContainer}>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
