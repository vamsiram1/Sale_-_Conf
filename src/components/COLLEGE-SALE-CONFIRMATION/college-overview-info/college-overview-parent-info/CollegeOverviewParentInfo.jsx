import React from "react";
import styles from "./CollegeOverviewParentInfo.module.css";

const CollegeOverviewParentInfo = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Parent Information</h3>

      {/* ROW 1 - Father */}
      <div className={styles.row}>
        <div className={styles.field}>
          <label>Father Name</label>
          <p>Anil Londonker Sinka</p>
        </div>

        <div className={styles.field}>
          <label>Phone Number</label>
          <p>+91-9876543210</p>
        </div>

        <div className={styles.field}>
          <label>Email</label>
          <p>Anillondonker@gmail.com</p>
        </div>

        <div className={styles.field}>
          <label>Occupation</label>
          <p>Business Analyst</p>
        </div>
      </div>

      {/* ROW 2 - Mother */}
      <div className={styles.row}>
        <div className={styles.field}>
          <label>Mother Name</label>
          <p>Sumegha Sinka</p>
        </div>

        <div className={styles.field}>
          <label>Phone Number</label>
          <p>+91-9876543210</p>
        </div>

        <div className={styles.field}>
          <label>Email</label>
          <p>Anillondonker@gmail.com</p>
        </div>

        <div className={styles.field}>
          <label>Occupation</label>
          <p>Business Analyst</p>
        </div>
      </div>
    </div>
  );
};

export default CollegeOverviewParentInfo;
