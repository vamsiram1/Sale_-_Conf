import React from "react";
import styles from "./CollegeOverviewAddressInfo.module.css";

const CollegeOverviewAddressInfo = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Address Information</h3>

      <div className={styles.grid}>
        <div className={styles.field}>
          <label>Door No</label>
          <p>A.Y 2025-2026</p>
        </div>

        <div className={styles.field}>
          <label>Street</label>
          <p>Jubileehills</p>
        </div>

        <div className={styles.field}>
          <label>Landmark</label>
          <p>Days Scholar</p>
        </div>

        <div className={styles.field}>
          <label>Area</label>
          <p>Class 8</p>
        </div>

        <div className={styles.field}>
          <label>Pincode</label>
          <p>Icon</p>
        </div>

        <div className={styles.field}>
          <label>District</label>
          <p>Hyderabad</p>
        </div>

        <div className={styles.field}>
          <label>Mandal</label>
          <p>Jubilee Hills</p>
        </div>

        <div className={styles.field}>
          <label>City</label>
          <p>Walkin</p>
        </div>

        <div className={styles.field}>
          <label>G-pin</label>
          <p>Walkin</p>
        </div>
      </div>
    </div>
  );
};

export default CollegeOverviewAddressInfo;


