import styles from "./SchoolOverviewAcademicInformation.module.css";

const OrientationInformationDetails = () => {
  return (
    <div className={styles.wrapper}>
      {/* Title + Divider */}
      <div className={styles.headerRow}>
        <span className={styles.title}>Academic Information</span>
        <div className={styles.line}></div>
      </div>

      {/* GRID */}
      <div className={styles.infoGrid}>

        <div className={styles.infoItem}>
          <span className={styles.label}>Academic Year</span>
          <span className={styles.value}>A.Y 2025-2026</span>
        </div>

        <div className={styles.infoItem}>
          <span className={styles.label}>Branch</span>
          <span className={styles.value}>Jubileehills</span>
        </div>

        <div className={styles.infoItem}>
          <span className={styles.label}>Student Type</span>
          <span className={styles.value}>Days Scholar</span>
        </div>

        <div className={styles.infoItem}>
          <span className={styles.label}>Joining Class</span>
          <span className={styles.value}>Class 8</span>
        </div>

        <div className={styles.infoItem}>
          <span className={styles.label}>Orientation Name</span>
          <span className={styles.value}>Icon</span>
        </div>

        <div className={styles.infoItem}>
          <span className={styles.label}>City</span>
          <span className={styles.value}>Hyderabad</span>
        </div>

        <div className={styles.infoItem}>
          <span className={styles.label}>Branch Type</span>
          <span className={styles.value}>Jubilee Hills</span>
        </div>

        <div className={styles.infoItem}>
          <span className={styles.label}>Admission Type</span>
          <span className={styles.value}>Walkin</span>
        </div>

      </div>
    </div>
  );
}

export default OrientationInformationDetails;