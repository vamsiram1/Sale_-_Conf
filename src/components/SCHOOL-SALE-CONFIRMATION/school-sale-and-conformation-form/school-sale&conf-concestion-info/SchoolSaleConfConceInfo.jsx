import React from "react";
import Inputbox from "../../../../widgets/Inputbox/InputBox";
import Dropdown from "../../../../widgets/Dropdown/Dropdown";
import styles from "./SchoolSaleConfConceInfo.module.css";

const SchoolSaleConfConceInfo = ({ formData, onChange }) => {
  return (
    <div className={styles.section}>
      <div className={styles.headerRow}>
        <span className={styles.sectionTitle}>Concession Information</span>
        <div className={styles.line}></div>
      </div>

      {/* Row 1 */}
      <div className={styles.formGrid3}>
        <Inputbox
          label="Admission Fee Concession"
          name="admissionConcession"
          placeholder="Enter Concession amount"
          value={formData.admissionConcession}
          onChange={onChange}
        />

        <Inputbox
          label="Tuition Fee Concession"
          name="tuitionConcession"
          placeholder="Enter Concession Amount"
          value={formData.tuitionConcession}
          onChange={onChange}
        />

        <Dropdown
          dropdownname="Referred by"
          name="referredBy"
          results={["Employee 1", "Employee 2", "Employee 3"]}
          value={formData.referredBy}
          onChange={onChange}
        />
      </div>

      {/* Row 2 */}
      <div className={styles.formGrid3}>
        <Inputbox
          label="Description"
          name="concessionDescription"
          placeholder="Enter description"
          value={formData.concessionDescription}
          onChange={onChange}
        />

        <Inputbox
          label="Concession Reason"
          name="concessionReason"
          placeholder="Enter Reason"
          value={formData.concessionReason}
          onChange={onChange}
        />

        <Dropdown
          dropdownname="Authorized by"
          name="authorizedBy"
          results={["Employee 1", "Employee 2", "Employee 3"]}
          value={formData.authorizedBy}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default SchoolSaleConfConceInfo;
