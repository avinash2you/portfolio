import React from "react";
import styles from "../sections/Header/Header.module.css";
import { Link, useLocation } from "react-router-dom";

function HeaderContent({ showMenu, setShowMenu }) {
  const location = useLocation();

  const navLinks = [
    { to: "/",        label: "Home",     icon: "fa-solid fa-house" },
    { to: "/work",    label: "Work",     icon: "fa-solid fa-briefcase" },
    { to: "/projects",label: "Projects", icon: "fa-solid fa-diagram-project" },
    { to: "/skills",  label: "Skills",   icon: "fa-solid fa-code" },
    { to: "/contact", label: "Contact",  icon: "fa-solid fa-envelope" },
  ];

  return (
    <menu className={showMenu ? styles.mobileMenu : styles.headerContainer}>
      {navLinks.map(({ to, label, icon }) => (
        <li
          key={to}
          onClick={() => showMenu && setShowMenu(false)}
          className={location.pathname === to ? `${styles.navBtn} ${styles.active}` : styles.navBtn}
        >
          <Link to={to} className={styles.headerLink}>
            <i className={`${icon} ${styles.headerIcon}`}></i>
            <span>{label}</span>
          </Link>
        </li>
      ))}
    </menu>
  );
}

export default HeaderContent;
