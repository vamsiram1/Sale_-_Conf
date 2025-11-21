import React from "react";
import Dropdown from "../../../../widgets/Dropdown/Dropdown";
import styles from "./SchoolSaleConfLangInfo.module.css";

const SchoolSaleConfLangInfo = ({ formData, onChange }) => {
  const langOptions = ["English", "Hindi", "Telugu", "Urdu", "Tamil"];

  return (
    <div className={styles.section}>
      <div className={styles.headerRow}>
        <span className={styles.sectionTitle}>Language Information</span>
        <div className={styles.line}></div>
      </div>

      <div className={styles.formGrid3}>
        <Dropdown
          dropdownname="1st Language"
          name="firstLanguage"
          results={langOptions}
          value={formData.firstLanguage}
          onChange={onChange}
        />

        <Dropdown
          dropdownname="2nd Language"
          name="secondLanguage"
          results={langOptions}
          value={formData.secondLanguage}
          onChange={onChange}
        />

        <Dropdown
          dropdownname="3rd Language"
          name="thirdLanguage"
          results={langOptions}
          value={formData.thirdLanguage}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default SchoolSaleConfLangInfo;
