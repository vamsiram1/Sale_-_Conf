import React from "react";
import styles from "./CollegeOverviewOrientInfo.module.css";

const CollegeOverviewOrientInfo = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Orientation Information</h3>

      <div className={styles.grid}>
        <div className={styles.field}>
          <label>Academic Year</label>
          <p>A.Y 2025-2026</p>
        </div>

        <div className={styles.field}>
          <label>Orientation Batch</label>
          <p>Jubileehills</p>
        </div>

        <div className={styles.field}>
          <label>Orientation Dates</label>
          <p>Days Scholar</p>
        </div>

        <div className={styles.field}>
          <label>Orientation Fee</label>
          <p>Class 8</p>
        </div>

        <div className={styles.field}>
          <label>School State</label>
          <p>Andhra Pradesh</p>
        </div>

        <div className={styles.field}>
          <label>School District</label>
          <p>Guntur</p>
        </div>

        <div className={styles.field}>
          <label>School Type</label>
          <p>Residential</p>
        </div>

        <div className={styles.field}>
          <label>School name</label>
          <p>Sri Chaitanya Schools</p>
        </div>

        <div className={styles.field}>
          <label>Additional Orientation Fee</label>
          <p>80,000</p>
        </div>

        <div className={styles.field}>
          <label>Score App No</label>
          <p>8765</p>
        </div>

        <div className={styles.field}>
          <label>Marks</label>
          <p>50</p>
        </div>

        <div className={styles.field}>
          <label>Food Type</label>
          <p>Non-Veg</p>
        </div>

        <div className={styles.field}>
          <label>Blood Group</label>
          <p>A-</p>
        </div>
      </div>
    </div>
  );
};

export default CollegeOverviewOrientInfo;
