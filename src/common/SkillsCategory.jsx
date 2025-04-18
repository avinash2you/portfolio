import React from "react";
import styles from "../sections/Skills/Skills.module.css";
import tickdark from "../assets/checkmark-dark.svg";
import ticklight from "../assets/checkmark-light.svg";
import { useTheme } from "./ThemeContext.jsx";

function SkillsCategory({ categoryTitle, skills }) {
  const { theme } = useTheme();
  const tick = theme === "light" ? ticklight : tickdark;
  return (
    <>
      <div className={styles.skillsCategory + " " + categoryTitle}>
        {skills.map((skill, index) => (
          <div className={styles.skill} key={index}>
            <img src={tick} alt="tick" />
            <p key={index}>{skill}</p>
          </div>
        ))}
      </div>
      <hr />
    </>
  );
}

export default SkillsCategory;
