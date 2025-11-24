import React from "react";
import styles from "./CollegeOverviewPersonalInfo.module.css";

const CollegeOverviewPersonalInfo = () => {
  return (
    <div className={styles.container}>
      {/* ---- LEFT PROFILE SECTION ---- */}
      <div className={styles.profileSection}>
        <div className={styles.avatarWrapper}>
          <img
            src="/student.png" 
            alt="Profile"
            className={styles.avatar}
          />
          <button className={styles.editBtn}>✎ Edit</button>
        </div>
        <p className={styles.maxSize}>max image size is 300kb</p>
      </div>

      {/* ---- INFORMATION SECTION ---- */}
      <div className={styles.infoSection}>
        <h3 className={styles.title}>Personal Information</h3>

        <div className={styles.grid}>
          <div className={styles.field}>
            <label>PRO Receipt No</label>
            <p>0</p>
          </div>

          <div className={styles.field}>
            <label>First Name</label>
            <p>First Name</p>
          </div>

          <div className={styles.field}>
            <label>Last Name</label>
            <p>Last Name</p>
          </div>

          <div className={styles.field}>
            <label>Gender</label>
            <p>Male</p>
          </div>

          <div className={styles.field}>
            <label>Aapar No</label>
            <p>9828e77</p>
          </div>

          <div className={styles.field}>
            <label>Date of Birth</label>
            <p>07-12-2004</p>
          </div>

          <div className={styles.field}>
            <label>Admission Referred by</label>
            <p>Venkat Boppana</p>
          </div>

          <div className={styles.field}>
            <label>Quota</label>
            <p>General</p>
          </div>

          <div className={styles.field}>
            <label>Aadhar Card No</label>
            <p>8892 2898 6273</p>
          </div>

          <div className={styles.field}>
            <label>PRO Receipt No</label>
            <p>6274528362yrts729</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegeOverviewPersonalInfo;
