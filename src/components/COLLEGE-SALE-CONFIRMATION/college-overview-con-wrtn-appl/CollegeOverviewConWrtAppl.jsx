import React from "react";
import styles from "./CollegeOverviewConWrtAppl.module.css";

const CollegeOverviewConWrtAppl = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Concession Written On Application</h3>

      <div className={styles.row}>
        <div className={styles.field}>
          <label>Concession Amount</label>
          <p>10,000</p>
        </div>

        <div className={styles.field}>
          <label>Concession Written By</label>
          <p>Shashank</p>
        </div>

        <div className={styles.field}>
          <label>Reason</label>
          <p>Special Concession</p>
        </div>
      </div>
    </div>
  );
};

export default CollegeOverviewConWrtAppl;
