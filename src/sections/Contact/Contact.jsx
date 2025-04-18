import React from "react";
import styles from "./Contact.module.css";

function Contact() {
  return (
    <section id="conatct" className={styles.contactContainer}>
      <h1 className="sectionTitle">Contact</h1>
      <form action="https://formspree.io/f/xkgjleww" method="POST">
        <div className={styles.formGroup}>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            required
          />
        </div>
        <div className={styles.formGroup}>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
          />
        </div>
        <div className={styles.formGroup}>
          <textarea
            id="message"
            name="message"
            placeholder="Message"
            required
          ></textarea>
        </div>
        <input type="submit" className={styles.submitBtn} value="Submit" />
      </form>
    </section>
  );
}

export default Contact;
