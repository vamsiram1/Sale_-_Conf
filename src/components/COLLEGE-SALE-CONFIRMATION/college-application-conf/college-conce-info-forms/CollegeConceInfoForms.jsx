import React, { useState } from "react";
import Inputbox from "../../../../widgets/Inputbox/InputBox";
import Dropdown from "../../../../widgets/Dropdown/Dropdown";
import styles from "./CollegeConceInfoForms.module.css";

const CollegeConceInfoForms = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  return (
    <div className={styles.section}>
      {/* Title */}
      <div className={styles.headerRow}>
        <span className={styles.title}>Concession Information</span>
        <div className={styles.line}></div>
      </div>

      {/* Row 1 */}
      <div className={styles.grid}>
        <Inputbox
          label="1st Year Concession"
          name="firstYearConcession"
          placeholder="Enter 1st Year Concession"
        />

        <Inputbox
          label="2nd Year Concession"
          name="secondYearConcession"
          placeholder="Enter 2nd Year Concession"
        />

        <Dropdown
          dropdownname="Referred By"
          name="referredBy"
          results={["Select Referred By"]}
        />
      </div>

      {/* Row 2 */}
      <div className={styles.grid}>
        <Inputbox
          label="Description"
          name="description"
          placeholder="Enter Description"
        />

        <Dropdown
          dropdownname="Authorized By"
          name="authorizedBy"
          results={["Select Authorized By"]}
        />

        <Inputbox
          label="Concession Reason"
          name="concessionReason"
          placeholder="Enter Concession Reason"
        />
      </div>

      {/* Row 3 - Checkbox */}
      <div className={styles.checkboxRow}>
        <label className={styles.checkboxLabel}>
          <input 
            type="checkbox" 
            className={styles.checkbox}
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <span>Concession Written on Application</span>
        </label>
        <div className={styles.line}></div>
      </div>

      {/* Conditional Row - Only show when checkbox is checked */}
      {isChecked && (
        <div className={styles.grid}>
          <Inputbox
            label="Concession Amount"
            name="concessionAmount"
            placeholder="Enter Concession Amount"
          />

          <Dropdown
            dropdownname="Concession Referred By"
            name="concessionReferredBy"
            results={["Select Concession Referred By"]}
          />

          <Inputbox
            label="Reason"
            name="reason"
            placeholder="Enter Reason"
          />
        </div>
      )}
    </div>
  );
};

export default CollegeConceInfoForms;