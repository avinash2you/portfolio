import React from "react";
import styles from "./Header.module.css";
import { useTheme } from "../../common/ThemeContext.jsx";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import HeaderContent from "../../common/HeaderContent.jsx";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

function Header() {
  const { theme, toggleTheme } = useTheme();
  const [showMenu, setShowMenu] = useState(false);
  const themeIcon = theme === "light" ? sun : moon;

  return (
    <>
      <section id="header" className={styles.headerSection}>
        <div className={styles.headerMobileView}>
          {!showMenu ? (
            <GiHamburgerMenu
              className={styles.headerMenu}
              onClick={() => setShowMenu(!showMenu)}
            />
          ) : (
            <IoCloseSharp
              className={styles.headerMenu}
              onClick={() => setShowMenu(!showMenu)}
            />
          )}
        </div>
        <div className={styles.headerDesktopView}>
          <HeaderContent />
        </div>
        <img
          className={styles.colorMode}
          src={themeIcon}
          onClick={() => {
            toggleTheme();
            setShowMenu(false);
          }}
          alt="Theme icon"
        />
      </section>
      {showMenu ? (
        <HeaderContent showMenu={showMenu} setShowMenu={setShowMenu} />
      ) : null}
    </>
  );
}

export default Header;
