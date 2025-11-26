import React from "react";
import styles from "./CollegeOverviewConWrtAppl.module.css";

const CollegeOverviewConWrtAppl = () => {
  return (
    <div className={styles.wrapper}>
      {/* Title + Divider */}
      <div className={styles.headerRow}>
        <span className={styles.title}>Concession Written On Application</span>
        <div className={styles.line}></div>
      </div>

      {/* GRID */}
      <div className={styles.infoGrid}>
        <div className={styles.infoItem}>
          <span className={styles.label}>Concession Amount</span>
          <span className={styles.value}>10,000</span>
        </div>

        <div className={styles.infoItem}>
          <span className={styles.label}>Concession Written By</span>
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

export default CollegeOverviewConWrtAppl;
