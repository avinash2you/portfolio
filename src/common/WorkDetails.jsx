import React, { useState } from "react";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import styles from "../sections/Work/Work.module.css";
import Modal from "../common/Modal";

function WorkDetails({ workItems }) {
  const [activeItem, setActiveItem] = useState(null);

  return (
    <div className={styles.workDetailsContainer}>
      <div className={styles.workItemList}>
        {workItems.map((item, index) => (
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
        <Modal
          title={activeItem.title}
          description={activeItem.description}
          onClose={() => setActiveItem(null)}
        />
      )}
    </div>
  );
}

export default WorkDetails;
