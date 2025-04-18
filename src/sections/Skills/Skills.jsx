import React from "react";
import styles from "./Skills.module.css";
import SkillsCategory from "../../common/SkillsCategory.jsx";
import info from "../../info.json";

function Skills() {
  const skills = info.skills;
  return (
    <section id="skills" className={styles.skillsContainer}>
      <h1 className="sectionTitle">Skills</h1>
      {Object.entries(skills).map(([categoryTitle, Skills], index) => (
        <SkillsCategory
          key={index}
          categoryTitle={categoryTitle}
          skills={Skills}
        />
      ))}
    </section>
  );
}

export default Skills;
