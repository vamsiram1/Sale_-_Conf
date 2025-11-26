import React from "react";
import styles from "./CollegeOverviewOrientInfo.module.css";

const CollegeOverviewOrientInfo = () => {
  return (
    <div className={styles.wrapper}>
      {/* Title + Divider */}
      <div className={styles.headerRow}>
        <span className={styles.title}>Orientation Information</span>
        <div className={styles.line}></div>
      </div>

      {/* GRID */}
      <div className={styles.infoGrid}>
        <div className={styles.infoItem}>
          <span className={styles.label}>Academic Year</span>
          <span className={styles.value}>A.Y 2025-2026</span>
        </div>

        <div className={styles.infoItem}>
          <span className={styles.label}>Orientation Batch</span>
          <span className={styles.value}>Jubileehills</span>
        </div>

        <div className={styles.infoItem}>
          <span className={styles.label}>Orientation Dates</span>
          <span className={styles.value}>Days Scholar</span>
        </div>

        <div className={styles.infoItem}>
          <span className={styles.label}>Orientation Fee</span>
          <span className={styles.value}>Class 8</span>
        </div>

        <div className={styles.infoItem}>
          <span className={styles.label}>School State</span>
          <span className={styles.value}>Andhra Pradesh</span>
        </div>

        <div className={styles.infoItem}>
          <span className={styles.label}>School District</span>
          <span className={styles.value}>Guntur</span>
        </div>

        <div className={styles.infoItem}>
          <span className={styles.label}>School Type</span>
          <span className={styles.value}>Residential</span>
        </div>

        <div className={styles.infoItem}>
          <span className={styles.label}>School name</span>
          <span className={styles.value}>Sri Chaitanya Schools</span>
        </div>

        <div className={styles.infoItem}>
          <span className={styles.label}>Additional Orientation Fee</span>
          <span className={styles.value}>80,000</span>
        </div>

        <div className={styles.infoItem}>
          <span className={styles.label}>Score App No</span>
          <span className={styles.value}>8765</span>
        </div>

        <div className={styles.infoItem}>
          <span className={styles.label}>Marks</span>
          <span className={styles.value}>50</span>
        </div>

        <div className={styles.infoItem}>
          <span className={styles.label}>Food Type</span>
          <span className={styles.value}>Non-Veg</span>
        </div>

        <div className={styles.infoItem}>
          <span className={styles.label}>Blood Group</span>
          <span className={styles.value}>A-</span>
        </div>
      </div>
    </div>
  );
};

export default CollegeOverviewOrientInfo;
