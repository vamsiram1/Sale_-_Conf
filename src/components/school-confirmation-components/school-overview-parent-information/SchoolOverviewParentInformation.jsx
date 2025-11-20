import React from 'react'
import styles from "./SchoolOverviewParentInformation.module.css";
const SchoolOverviewParentInformation = () => {
  return (
    <div className={styles.wrapper}>
      {/* Title + line */}
      <div className={styles.headerRow}>
        <span className={styles.title}>Parent Information</span>
        <div className={styles.line}></div>
      </div>

      {/* Content grid */}
      <div className={styles.infoGrid}>
        <div className={styles.infoItem}>
          <span className={styles.label}>Father Name</span>
          <span className={styles.value}>Anil Londonker</span>
        </div>

        <div className={styles.infoItem}>
          <span className={styles.label}>Phone Number</span>
          <span className={styles.value}>+91-9876543210</span>
        </div>
      </div>
    </div>
  )
}

export default SchoolOverviewParentInformation
