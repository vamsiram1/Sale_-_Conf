import React from "react";
import Inputbox from "../../../../widgets/Inputbox/InputBox";
import Dropdown from "../../../../widgets/Dropdown/Dropdown";
import styles from "./SchoolSaleConfParentInfo.module.css";

const SchoolSaleConfParentInfo = ({ formData, onChange }) => {
  const sectorOptions = ["Technology", "Healthcare", "Education", "Finance", "Other"];
  const occupationOptions = ["Engineer", "Doctor", "Teacher", "Business", "Other"];

  return (
    <div className={styles.section}>
      {/* Section Header */}
      <div className={styles.headerRow}>
        <span className={styles.sectionTitle}>Parent Information</span>
        <div className={styles.line}></div>
      </div>

      {/* Father Row 1 */}
      <div className={styles.formGrid}>
        <Inputbox
          label="Father Name"
          name="fatherName"
          placeholder="Enter full name"
          value={formData.fatherName}
          onChange={onChange}
        />

        <div className={styles.inputWithIcon}>
          <Inputbox
            label="Phone Number"
            name="fatherPhone"
            placeholder="Enter phone number"
            value={formData.fatherPhone}
            onChange={onChange}
          />
          <svg className={styles.inputIcon} width="20" height="20" fill="none" viewBox="0 0 20 20">
            <path d="M18.333 14.1v2.5c.001.232-.047.462-.14.675a1.67 1.67 0 0 1-.994.959c-.22.074-.453.102-.684.081A17.09 17.09 0 0 1 9.325 15.708 17.11 17.11 0 0 1 4.325 10.708 17.1 17.1 0 0 1 1.767 3.483c-.02-.23.008-.462.082-.681.074-.22.194-.421.35-.592.155-.17.345-.307.556-.4.212-.094.44-.143.672-.143H5.925c.404-.004.796.139 1.103.403.307.263.507.629.563 1.03.105.8.301 1.586.583 2.342.112.298.136.622.07.933-.067.312-.221.598-.445.825L6.742 8.258a14.35 14.35 0 0 0 5 5l1.058-1.058c.227-.224.513-.378.825-.445.312-.066.636-.042.934.07.756.282 1.542.478 2.342.583.404.056.77.256 1.034.563.264.307.407.699.403 1.103Z" stroke="#98A2B3" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        <div className={styles.inputWithIcon}>
          <Inputbox
            label="Email"
            name="fatherEmail"
            placeholder="Enter Email"
            value={formData.fatherEmail}
            onChange={onChange}
            type="email"
          />
          <svg className={styles.inputIcon} width="20" height="20" fill="none" viewBox="0 0 20 20">
            <path d="M18.333 5c0-.917-.75-1.667-1.667-1.667H3.333C2.417 3.333 1.667 4.083 1.667 5m16.666 0v10c0 .917-.75 1.667-1.667 1.667H3.333C2.417 16.667 1.667 15.917 1.667 15V5m16.666 0L10 10.833 1.667 5" stroke="#98A2B3" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      {/* Father Row 2 */}
      <div className={styles.formGrid}>
        <Dropdown
          dropdownname="Sector"
          name="fatherSector"
          results={sectorOptions}
          value={formData.fatherSector}
          onChange={onChange}
        />
        <Dropdown
          dropdownname="Occupation"
          name="fatherOccupation"
          results={occupationOptions}
          value={formData.fatherOccupation}
          onChange={onChange}
        />
      </div>

      {/* Mother Row 1 */}
      <div className={styles.formGrid}>
        <Inputbox
          label="Mother Name"
          name="motherName"
          placeholder="Enter full name"
          value={formData.motherName}
          onChange={onChange}
        />
        <div className={styles.inputWithIcon}>
          <Inputbox
            label="Phone Number"
            name="motherPhone"
            placeholder="Enter phone number"
            value={formData.motherPhone}
            onChange={onChange}
          />
          <svg className={styles.inputIcon} width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M18.333 14.1v2.5..." stroke="#98A2B3"/>
          </svg>
        </div>

        <div className={styles.inputWithIcon}>
          <Inputbox
            label="Email"
            name="motherEmail"
            placeholder="Enter Email"
            value={formData.motherEmail}
            onChange={onChange}
            type="email"
          />
          <svg className={styles.inputIcon} width="20" height="20" fill="none" viewBox="0 0 20 20">
            <path d="M18.333 5L10 10.833 1.667 5" stroke="#98A2B3" strokeWidth="1.6"/>
          </svg>
        </div>
      </div>

      {/* Mother Row 2 */}
      <div className={styles.formGrid}>
        <Dropdown
          dropdownname="Sector"
          name="motherSector"
          results={sectorOptions}
          value={formData.motherSector}
          onChange={onChange}
        />
        <Dropdown
          dropdownname="Occupation"
          name="motherOccupation"
          results={occupationOptions}
          value={formData.motherOccupation}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default SchoolSaleConfParentInfo;
