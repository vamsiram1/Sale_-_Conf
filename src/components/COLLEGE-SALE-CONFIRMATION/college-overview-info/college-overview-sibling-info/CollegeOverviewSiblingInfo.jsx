import React from "react";
import styles from "./CollegeOverviewSiblingInfo.module.css";

const CollegeOverviewSiblingInfo = () => {
  return (
    <div className={styles.wrapper}>
      {/* Title + line */}
      <div className={styles.headerRow}>
        <span className={styles.title}>Sibling Information</span>
        <div className={styles.line}></div>
      </div>

      {/* Content grid */}
      <div className={styles.infoGrid}>
        <div className={styles.infoItem}>
          <span className={styles.label}>Full Name</span>
          <span className={styles.value}>Anil Londonker Sinka</span>
        </div>

        <div className={styles.infoItem}>
          <span className={styles.label}>Relation Type</span>
          <span className={styles.value}>Brother</span>
        </div>

        <div className={styles.infoItem}>
          <span className={styles.label}>Class</span>
          <span className={styles.value}>8</span>
        </div>

        <div className={styles.infoItem}>
          <span className={styles.label}>School</span>
          <span className={styles.value}>Sri Chaitanya Schools</span>
        </div>

        <div className={styles.infoItem}>
          <span className={styles.label}>Gender</span>
          <span className={styles.value}>Male</span>
        </div>
      </div>
    </div>
  );
};

export default CollegeOverviewSiblingInfo;
