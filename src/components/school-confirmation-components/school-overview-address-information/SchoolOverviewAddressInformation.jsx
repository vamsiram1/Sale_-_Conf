import styles from "./SchoolOverviewAddressInformation.module.css";

const AddressInformationDetails = () => {
  return (
    <div className={styles.wrapper}>
      {/* Title + Divider */}
      <div className={styles.headerRow}>
        <span className={styles.title}>Address Information</span>
        <div className={styles.line}></div>
      </div>

      {/* GRID */}
      <div className={styles.infoGrid}>

        <div className={styles.infoItem}>
          <span className={styles.label}>Door No</span>
          <span className={styles.value}>A.Y 2025-2026</span>
        </div>

        <div className={styles.infoItem}>
          <span className={styles.label}>Street</span>
          <span className={styles.value}>Jubileehills</span>
        </div>

        <div className={styles.infoItem}>
          <span className={styles.label}>Landmark</span>
          <span className={styles.value}>Days Scholar</span>
        </div>

        <div className={styles.infoItem}>
          <span className={styles.label}>Area</span>
          <span className={styles.value}>Class 8</span>
        </div>

        <div className={styles.infoItem}>
          <span className={styles.label}>Pincode</span>
          <span className={styles.value}>Icon</span>
        </div>

        <div className={styles.infoItem}>
          <span className={styles.label}>District</span>
          <span className={styles.value}>Hyderabad</span>
        </div>

        <div className={styles.infoItem}>
          <span className={styles.label}>Mandal</span>
          <span className={styles.value}>Jubilee Hills</span>
        </div>

        <div className={styles.infoItem}>
          <span className={styles.label}>City</span>
          <span className={styles.value}>Walkin</span>
        </div>

      </div>
    </div>
  );
}


export default AddressInformationDetails;