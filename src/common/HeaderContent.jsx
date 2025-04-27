import React from "react";
import styles from "../sections/Header/Header.module.css";
import { Link } from "react-router-dom";
import { CiHome } from "react-icons/ci";
import { GoProjectSymlink } from "react-icons/go";
import { IoCodeSlashOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";

function HeaderContent({ showMenu, setShowMenu }) {
  return (
    <menu className={styles.headerContainer}>
      <li onClick={() => showMenu && setShowMenu(false)}>
        <Link to="/" className={styles.headerLink}>
          <CiHome className={styles.headerIcon} />
          <span>Home</span>
        </Link>
      </li>
      <li onClick={() => showMenu && setShowMenu(false)}>
        <Link to="/projects" className={styles.headerLink}>
          <GoProjectSymlink className={styles.headerIcon} />
          <span>Projects</span>
        </Link>
      </li>
      <li onClick={() => showMenu && setShowMenu(false)}>
        <Link to="/skills" className={styles.headerLink}>
          <IoCodeSlashOutline className={styles.headerIcon} />
          <span>Skills</span>
        </Link>
      </li>
      <li onClick={() => showMenu && setShowMenu(false)}>
        <Link to="/contact" className={styles.headerLink}>
          <CiMail className={styles.headerIcon} />
          <span>Contact</span>
        </Link>
      </li>
    </menu>
  );
}

export default HeaderContent;
