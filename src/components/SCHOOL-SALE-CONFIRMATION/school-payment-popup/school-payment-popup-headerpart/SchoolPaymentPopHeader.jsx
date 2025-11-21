import React from "react";
import styles from "./SchoolPaymentPopHeader.module.css";

const SchoolPaymentPopHeader = ({ step, onClose }) => {
  return (
    <div className={styles.headerContainer}>
      <div>
        <h2 className={styles.title}>Complete Application Sale</h2>
        <div className={styles.stepContainer}>
          <span className={styles.stepLabel}>Step:</span>
          <span className={styles.stepNumber}>{step}</span>
        </div>
        <div className={styles.progressBar}>
          <div className={`${styles.segment} ${step >= 1 ? styles.segmentActive : ''}`}></div>
          <div className={`${styles.segment} ${step >= 2 ? styles.segmentActive : ''}`}></div>
          <div className={`${styles.segment} ${step >= 3 ? styles.segmentActive : ''}`}></div>
        </div>
      </div>

      <button className={styles.closeBtn} onClick={onClose}>✕</button>
    </div>
  );
};

export default SchoolPaymentPopHeader;
