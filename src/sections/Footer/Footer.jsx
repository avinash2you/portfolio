import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <section id="footer" className={styles.footerContainer}>
      <p>
        &copy; 2025 Avinash Yedlapalli
        <br />
        All rights reserved.
      </p>
    </section>
  );
}

export default Footer;
