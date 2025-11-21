import styles from "./SchoolOverviewTopSection.module.css";
import backArrow from "../../../../assets/school-sale-conf-assets/backArrow.svg"; 

const SchoolOverviewTopSection = ({ step = 1, onBack }) => {
  const handleBackClick = () => {
    if (onBack) {
      onBack();
    }
  };

  return (
    <div className={styles.headerWrapper}>
      {/* LEFT BLOCK */}
      <div className={styles.leftBlock}>
        <img 
          src={backArrow} 
          alt="back" 
          className={styles.backIcon} 
          onClick={handleBackClick}
          style={{ cursor: onBack ? 'pointer' : 'default' }}
        />
        <div>
          <h2 className={styles.title}>Application Sale & Confirmation</h2>

          <div className={styles.stepContainer}>
            <span className={styles.stepLabel}>Step:</span>
            <span className={styles.stepNumber}>{step}</span>
          </div>

          <div className={styles.progressBar}>
            <div className={`${styles.segment} ${step >= 1 ? styles.segmentActive : ''}`}></div>
            <div className={`${styles.segment} ${step >= 2 ? styles.segmentActive : ''}`}></div>
            <div className={`${styles.segment} ${step >= 3 ? styles.segmentActive : ''}`}></div>
          </div>
        </div>
      </div>

      {/* RIGHT BLOCK */}
      <div className={styles.rightBlock}>
        <div className={styles.infoItem}>
          <span className={styles.label}>Academic Year</span>
          <span className={styles.value}>2026-2027</span>
        </div>

        <div className={styles.infoItem}>
          <span className={styles.label}>Application No</span>
          <span className={styles.value}>246189267</span>
        </div>

        <div className={styles.infoItem}>
          <span className={styles.label}>Branch</span>
          <span className={styles.value}>Kavuri hills _ 01</span>
        </div>

        <div className={styles.infoItem}>
          <span className={styles.label}>Zone</span>
          <span className={styles.value}>Hyderabad_Central</span>
        </div>

        <div className={styles.infoItem}>
          <span className={styles.label}>Application Fee</span>
          <span className={styles.value}>500</span>
        </div>
      </div>
    </div>
  );
}


export default SchoolOverviewTopSection;