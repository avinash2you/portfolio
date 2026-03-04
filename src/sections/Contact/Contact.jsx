import React, { useState } from "react";
import styles from "./Contact.module.css";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [modalMessage, setModalMessage] = useState(null);
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      const response = await fetch("https://formspree.io/f/xkgjleww", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setSuccess(true);
        setModalMessage("Your message has been sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSuccess(false);
        setModalMessage("Failed to send message. Please try again.");
      }
    } catch (err) {
      setSuccess(false);
      setModalMessage("Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className={styles.contactContainer}>
      <div className={styles.header}>
        <div className={styles.eyebrow}>Get in touch</div>
        <h1 className={styles.pageSectionTitle}>Contact</h1>
        <p className={styles.subtitle}>
          Have a project in mind or just want to say hello? I'd love to hear from you.
        </p>
      </div>

      <div className={styles.formCard}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
              className={styles.formInput}
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Email</label>
            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={handleChange}
              required
              className={styles.formInput}
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Message</label>
            <textarea
              name="message"
              placeholder="What's on your mind?"
              value={formData.message}
              onChange={handleChange}
              required
              className={styles.formTextarea}
            />
          </div>
          <button type="submit" className={styles.submitBtn} disabled={sending}>
            {sending ? "Sending..." : "Send Message →"}
          </button>
        </form>
      </div>

      {modalMessage && (
        <div className={styles.modalOverlay} onClick={() => setModalMessage(null)}>
          <div className={styles.modalCard} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalIcon}>{success ? "✅" : "❌"}</div>
            <h3 className={styles.modalTitle}>{modalMessage}</h3>
            <button className={styles.modalClose} onClick={() => setModalMessage(null)}>
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Contact;
