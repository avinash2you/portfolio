import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer id="footer" className={styles.footerContainer}>
      <div className={styles.footerBrand}>
        AMK<span>.</span>
      </div>
      <p className={styles.footerText}>
        © 2026 Avinash Mani Kiran. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
