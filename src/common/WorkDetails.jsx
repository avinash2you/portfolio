import React, { useState } from "react";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import info from "../info.json";
import styles from "../sections/Work/Work.module.css";

function WorkDetails() {
  const [activeItem, setActiveItem] = useState(null);

  return (
    <div className={styles.workDetailsContainer}>
      <h3 className={styles.sectionTitle}>KEY HIGHLIGHTS</h3>
      <div className={styles.workItemList}>
        {info.workItems.map((item, index) => (
          <div key={index} className={styles.workItem}>
            <div className={styles.workItemTitle}>
              <IoCheckmarkCircleOutline className={styles.checkmarkIcon} />
              <span className={styles.workItemHeading}>{item.title}</span>
            </div>
            <button
              onClick={() => setActiveItem(item)}
              className={styles.learnMoreButton}
            >
              Learn more
            </button>
          </div>
        ))}
      </div>

      {activeItem && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <div className={styles.modalHeader}>
              <h4 className={styles.modalTitle}>{activeItem.title}</h4>
              <button
                onClick={() => setActiveItem(null)}
                className={styles.closeButton}
              >
                &times;
              </button>
            </div>

            <p className={styles.modalDescription}>{activeItem.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default WorkDetails;
