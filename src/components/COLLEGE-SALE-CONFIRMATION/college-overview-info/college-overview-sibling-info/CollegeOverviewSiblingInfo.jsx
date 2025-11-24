import React from "react";
import styles from "./CollegeOverviewSiblingInfo.module.css";

const CollegeOverviewSiblingInfo = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Sibling Information</h3>

      {/* ROW 1 */}
      <div className={styles.row}>
        <div className={styles.field}>
          <label>Full Name</label>
          <p>Anil Londonker Sinka</p>
        </div>

        <div className={styles.field}>
          <label>Relation Type</label>
          <p>Brother</p>
        </div>

        <div className={styles.field}>
          <label>Class</label>
          <p>8</p>
        </div>

        <div className={styles.field}>
          <label>School</label>
          <p>Sri Chaitanya Schools</p>
        </div>
      </div>

      {/* ROW 2 - ONLY ONE FIELD (Gender) */}
      <div className={styles.rowSingle}>
        <div className={styles.field}>
          <label>Gender</label>
          <p>Male</p>
        </div>
      </div>
    </div>
  );
};

export default CollegeOverviewSiblingInfo;
