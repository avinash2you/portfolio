import React, { useState } from "react";
import styles from "./Contact.module.css";
import Modal from "../../common/Modal";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [modalMessage, setModalMessage] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/xkgjleww", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setModalMessage("Your message has been sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setModalMessage("Failed to send message. Please try again.");
      }
    } catch (err) {
      setModalMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className={styles.contactContainer}>
      <h1 className="sectionTitle">Contact</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <input type="submit" className={styles.submitBtn} value="Submit" />
      </form>

      {modalMessage && (
        <Modal title={modalMessage} onClose={() => setModalMessage(null)} />
      )}
    </section>
  );
}

export default Contact;
