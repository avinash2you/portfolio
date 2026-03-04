import React from "react";
import Styles from "./Projects.module.css";
import info from "../../info.json";

function Projects() {
  const projects = info.projects;

  const handleClick = (project, e) => {
    if (!project.url || project.url === "") {
      e.preventDefault();
    }
  };

  return (
    <section id="projects" className={Styles.projectsSection}>
      <div className={Styles.header}>
        <div className={Styles.eyebrow}>Things I've built</div>
        <h1 className={Styles.pageSectionTitle}>Projects</h1>
      </div>

      <div className={Styles.projectsContainer}>
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.url && project.url !== "" ? project.url : "#"}
            className={Styles.projectCard}
            target={project.url ? "_blank" : "_self"}
            rel="noreferrer"
            onClick={(e) => handleClick(project, e)}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className={Styles.projectImageWrapper}>
              <img src={project.image} alt={project.name} className={Styles.projectImage} />
              <div className={Styles.imageOverlay} />
            </div>

            <div className={Styles.projectBody}>
              <h2 className={Styles.projectTitle}>{project.name}</h2>
              <p className={Styles.projectSubtitle}>{project.description}</p>

              <div className={Styles.projectFooter}>
                {project.url ? (
                  <span className={Styles.viewLink}>
                    View on GitHub →
                  </span>
                ) : (
                  <span className={Styles.upcomingBadge}>Coming Soon</span>
                )}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Projects;
