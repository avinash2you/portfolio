import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { useTheme } from "../../common/ThemeContext.jsx";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";

function Header() {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === "light" ? sun : moon;

  return (
    <section id="header" className={styles.headerSection}>
      <ul className={styles.headerContainer}>
        <li>
          <Link to="/" className={styles.headerLink}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/projects" className={styles.headerLink}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="/skills" className={styles.headerLink}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="contact" className={styles.headerLink}>
            Contact
          </Link>
        </li>
      </ul>
      <img
        className={styles.colorMode}
        src={themeIcon}
        onClick={toggleTheme}
        alt="Theme icon"
      />
    </section>
  );
}

export default Header;
