import React from 'react'

import styles from "./SchoolOverviewPersonalInformation.module.css";

const SchoolOverviewPersonalInformation = () => {
  return (
    <div className={styles.wrapper}>
      {/* LEFT: Profile Image */}
      <div className={styles.leftBlock}>
        <div className={styles.imageWrapper}>
          <img
            src="https://via.placeholder.com/150"
            alt="profile"
            className={styles.profileImg}
          />

          <button className={styles.editBtn}>✎ Edit</button>

          <span className={styles.maxSizeText}>max image size is 300kb</span>
        </div>
      </div>

      {/* RIGHT: Personal Information */}
      <div className={styles.rightBlock}>
        <div className={styles.sectionTitle}>Personal Information</div>

        <div className={styles.infoGrid}>
          {/* ROW 1 */}
          <div className={styles.infoItem}>
            <span className={styles.label}>PRO Receipt No</span>
            <span className={styles.value}>0</span>
          </div>

          <div className={styles.infoItem}>
            <span className={styles.label}>First Name</span>
            <span className={styles.value}>First Name</span>
          </div>

          <div className={styles.infoItem}>
            <span className={styles.label}>Last Name</span>
            <span className={styles.value}>Last Name</span>
          </div>

          <div className={styles.infoItem}>
            <span className={styles.label}>Gender</span>
            <span className={styles.value}>Male</span>
          </div>

          {/* ROW 2 */}
          <div className={styles.infoItem}>
            <span className={styles.label}>Aapar No</span>
            <span className={styles.value}>9828e77</span>
          </div>

          <div className={styles.infoItem}>
            <span className={styles.label}>Date of Birth</span>
            <span className={styles.value}>07-12-2004</span>
          </div>

          <div className={styles.infoItem}>
            <span className={styles.label}>Admission Referred by</span>
            <span className={styles.value}>Venkat Boppana</span>
          </div>

          <div className={styles.infoItem}>
            <span className={styles.label}>Quota</span>
            <span className={styles.value}>General</span>
          </div>

          {/* ROW 3 */}
          <div className={styles.infoItem}>
            <span className={styles.label}>Aadhar Card No</span>
            <span className={styles.value}>8892 2898 6273</span>
          </div>

          <div className={styles.infoItem}>
            <span className={styles.label}>PRO Receipt No</span>
            <span className={styles.value}>6274528362yrts729</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SchoolOverviewPersonalInformation;