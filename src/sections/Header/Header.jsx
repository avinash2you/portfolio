import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";
import HeaderContent from "../../common/HeaderContent.jsx";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <section
        id="header"
        className={styles.headerSection}
        style={scrolled ? { borderBottomColor: "rgba(124,58,237,0.3)" } : {}}
      >
        <div className={styles.logo}>
          AMK<span>.</span>
        </div>

        <div className={styles.headerDesktopView}>
          <HeaderContent />
        </div>

        <div className={styles.headerMobileView}>
          {!showMenu ? (
            <GiHamburgerMenu
              className={styles.headerMenu}
              onClick={() => setShowMenu(true)}
            />
          ) : (
            <IoCloseSharp
              className={styles.headerMenu}
              onClick={() => setShowMenu(false)}
            />
          )}
        </div>
      </section>

      {showMenu && (
        <div className={styles.mobileMenuOverlay}>
          <HeaderContent showMenu={showMenu} setShowMenu={setShowMenu} />
        </div>
      )}
    </>
  );
}

export default Header;
