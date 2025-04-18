import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div id="header" className={styles.headerSection}>
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
    </div>
  );
}

export default Header;
