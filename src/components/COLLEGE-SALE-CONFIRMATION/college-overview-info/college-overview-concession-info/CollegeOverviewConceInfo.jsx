import React from "react";
import styles from "./CollegeOverviewConceInfo.module.css";

const CollegeOverviewConceInfo = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Concession Information</h3>

      {/* ROW 1 */}
      <div className={styles.row}>
        <div className={styles.field}>
          <label>1st Year Concession</label>
          <p>10,000</p>
        </div>

        <div className={styles.field}>
          <label>2nd Year Concession</label>
          <p>10,000</p>
        </div>

        <div className={styles.field}>
          <label>3rd Year Concession</label>
          <p>10,000</p>
        </div>

        <div className={styles.field}>
          <label>Given By</label>
          <p>Vamsi Ramana</p>
        </div>
      </div>

      {/* ROW 2 */}
      <div className={styles.row}>
        <div className={styles.field}>
          <label>Description</label>
          <p>Loreum Ipsum</p>
        </div>

        <div className={styles.field}>
          <label>Authorized By</label>
          <p>Shashank</p>
        </div>

        <div className={styles.field}>
          <label>Reason</label>
          <p>Special Concession</p>
        </div>

        {/* 4th empty column for alignment */}
        <div></div>
      </div>
    </div>
  );
};

export default CollegeOverviewConceInfo;
