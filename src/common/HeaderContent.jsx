import React from "react";
import styles from "../sections/Header/Header.module.css";
import { Link, useLocation } from "react-router-dom";
import { CiHome } from "react-icons/ci";
import { GoProjectSymlink } from "react-icons/go";
import { IoCodeSlashOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { FaLaptopCode } from "react-icons/fa";

function HeaderContent({ showMenu, setShowMenu }) {
  const location = useLocation();

  const navLinks = [
    { to: "/", label: "Home", icon: <CiHome className={styles.headerIcon} /> },
    {
      to: "/work",
      label: "Work",
      icon: <FaLaptopCode className={styles.headerIcon} />,
    },
    {
      to: "/projects",
      label: "Projects",
      icon: <GoProjectSymlink className={styles.headerIcon} />,
    },
    {
      to: "/skills",
      label: "Skills",
      icon: <IoCodeSlashOutline className={styles.headerIcon} />,
    },
    {
      to: "/contact",
      label: "Contact",
      icon: <CiMail className={styles.headerIcon} />,
    },
  ];

  return (
    <menu className={styles.headerContainer}>
      {navLinks.map(({ to, label, icon }) => (
        <li
          key={to}
          onClick={() => showMenu && setShowMenu(false)}
          className={
            location.pathname === to
              ? styles.navBtn + " " + styles.active
              : styles.navBtn
          }
        >
          <Link to={to} className={styles.headerLink}>
            {icon}
            <span>{label}</span>
          </Link>
        </li>
      ))}
    </menu>
  );
}

export default HeaderContent;
