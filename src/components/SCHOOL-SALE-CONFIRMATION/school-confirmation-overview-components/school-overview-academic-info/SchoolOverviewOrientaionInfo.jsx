import React from "react";
import styles from "./SchoolOverviewOrientaionInfo.module.css";

const SchoolOverviewAcademicInfo = () => {
  return (
    <div className={styles.wrapper}>
      {/* Title */}
      <div className={styles.headerRow}>
        <span className={styles.title}>Orientation Information</span>
        <div className={styles.line}></div>
      </div>

      {/* Content grid */}
      <div className={styles.infoGrid}>
        <div className={styles.infoItem}>
          <span className={styles.label}>Orientation Name</span>
          <span className={styles.value}>Orientation 2024</span>
        </div>

        <div className={styles.infoItem}>
          <span className={styles.label}>Orientation Fee</span>
          <span className={styles.value}>5000.00</span>
        </div>

        <div className={styles.infoItem}>
          <span className={styles.label}>Score App No</span>
          <span className={styles.value}>SCR2024001</span>
        </div>

        <div className={styles.infoItem}>
          <span className={styles.label}>Score Marks</span>
          <span className={styles.value}>85</span>
        </div>

        <div className={styles.infoItem}>
          <span className={styles.label}>Food Type</span>
          <span className={styles.value}>Veg</span>
        </div>

        <div className={styles.infoItem}>
          <span className={styles.label}>Blood Group</span>
          <span className={styles.value}>O+</span>
        </div>

        <div className={styles.infoItem}>
          <span className={styles.label}>Caste</span>
          <span className={styles.value}>OC</span>
        </div>

        <div className={styles.infoItem}>
          <span className={styles.label}>Religion</span>
          <span className={styles.value}>Hindu</span>
        </div>
      </div>
    </div>
  );
};

export default SchoolOverviewAcademicInfo;
