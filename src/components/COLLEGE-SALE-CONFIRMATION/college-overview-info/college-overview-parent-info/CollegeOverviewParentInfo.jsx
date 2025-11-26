import React from "react";
import styles from "./CollegeOverviewParentInfo.module.css";

const CollegeOverviewParentInfo = () => {
  return (
    <div className={styles.wrapper}>
      {/* Title + line */}
      <div className={styles.headerRow}>
        <span className={styles.title}>Parent Information</span>
        <div className={styles.line}></div>
      </div>

      {/* Content grid */}
      <div className={styles.infoGrid}>
        <div className={styles.infoItem}>
          <span className={styles.label}>Father Name</span>
          <span className={styles.value}>Anil Londonker</span>
        </div>

        <div className={styles.infoItem}>
          <span className={styles.label}>Phone Number</span>
          <span className={styles.value}>+91-9876543210</span>
        </div>

        <div className={styles.infoItem}>
          <span className={styles.label}>Email</span>
          <span className={styles.value}>Anillondonker@gmail.com</span>
        </div>

        <div className={styles.infoItem}>
          <span className={styles.label}>Occupation</span>
          <span className={styles.value}>Business Analyst</span>
        </div>

        <div className={styles.infoItem}>
          <span className={styles.label}>Mother Name</span>
          <span className={styles.value}>Sumegha Sinka</span>
        </div>

        <div className={styles.infoItem}>
          <span className={styles.label}>Phone Number</span>
          <span className={styles.value}>+91-9876543210</span>
        </div>

        <div className={styles.infoItem}>
          <span className={styles.label}>Email</span>
          <span className={styles.value}>Anillondonker@gmail.com</span>
        </div>

        <div className={styles.infoItem}>
          <span className={styles.label}>Occupation</span>
          <span className={styles.value}>Business Analyst</span>
        </div>
      </div>
    </div>
  );
};

export default CollegeOverviewParentInfo;
