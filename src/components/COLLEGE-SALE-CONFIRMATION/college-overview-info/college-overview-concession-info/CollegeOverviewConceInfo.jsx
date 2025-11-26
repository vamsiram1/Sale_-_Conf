import React from "react";
import styles from "./CollegeOverviewConceInfo.module.css";

const CollegeOverviewConceInfo = () => {
  return (
    <div className={styles.wrapper}>
      {/* Title + Divider */}
      <div className={styles.headerRow}>
        <span className={styles.title}>Concession Information</span>
        <div className={styles.line}></div>
      </div>

      {/* GRID */}
      <div className={styles.infoGrid}>
        <div className={styles.infoItem}>
          <span className={styles.label}>1st Year Concession</span>
          <span className={styles.value}>10,000</span>
        </div>

        <div className={styles.infoItem}>
          <span className={styles.label}>2nd Year Concession</span>
          <span className={styles.value}>10,000</span>
        </div>

        <div className={styles.infoItem}>
          <span className={styles.label}>3rd Year Concession</span>
          <span className={styles.value}>10,000</span>
        </div>

        <div className={styles.infoItem}>
          <span className={styles.label}>Given By</span>
          <span className={styles.value}>Vamsi Ramana</span>
        </div>

        <div className={styles.infoItem}>
          <span className={styles.label}>Description</span>
          <span className={styles.value}>Loreum Ipsum</span>
        </div>

        <div className={styles.infoItem}>
          <span className={styles.label}>Authorized By</span>
          <span className={styles.value}>Shashank</span>
        </div>

        <div className={styles.infoItem}>
          <span className={styles.label}>Reason</span>
          <span className={styles.value}>Special Concession</span>
        </div>
      </div>
    </div>
  );
};

export default CollegeOverviewConceInfo;
