import React from "react";
import styles from "./Skills.module.css";
import info from "../../info.json";

const categoryIcons = {
  CMS: "⚙️",
  Languages: "{ }",
  Frontend: "🎨",
  "Unit Testing Frameworks": "🧪",
  Backend: "🔧",
  Databases: "🗄️",
  Tools: "🛠️",
};

function Skills() {
  const skills = info.skills;

  return (
    <section id="skills" className={styles.skillsContainer}>
      <div className={styles.header}>
        <div className={styles.eyebrow}>What I work with</div>
        <h1 className={styles.sectionTitle}>Skills</h1>
      </div>

      <div className={styles.categoriesGrid}>
        {Object.entries(skills).map(([categoryTitle, skillList], index) => (
          <div
            key={index}
            className={styles.categoryCard}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className={styles.categoryTitle}>
              <span style={{ fontSize: "16px" }}>{categoryIcons[categoryTitle] || "◆"}</span>
              {categoryTitle}
            </div>
            <div className={styles.skillsList}>
              {skillList.map((skill, i) => (
                <span key={i} className={styles.skillTag}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
