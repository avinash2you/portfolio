import React from "react";
import styles from "../sections/Work/Work.module.css";

function Modal({ title, description, onClose }) {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <h4 className={styles.modalTitle}>{title}</h4>
          <button onClick={onClose} className={styles.closeButton}>
            &times;
          </button>
        </div>
        {description ? (
          <p className={styles.modalDescription}>{description}</p>
        ) : null}
      </div>
    </div>
  );
}

export default Modal;
