import React from "react";
import Inputbox from "../../../widgets/Inputbox/InputBox";
import Dropdown from "../../../widgets/Dropdown/Dropdown";
import Button from "../../../widgets/Button/Button";
import styles from "./SchoolSaleConfSiblingInfo.module.css";

const SchoolSaleConfSiblingInfo = ({
  formData,
  onChange,
  onAddSibling,
  onUploadAnnexure,
}) => {
  const relationOptions = ["Brother", "Sister"];
  const classOptions = [
    "Class 1",
    "Class 2",
    "Class 3",
    "Class 4",
    "Class 5",
    "Class 6",
    "Class 7",
    "Class 8",
    "Class 9",
    "Class 10",
  ];
  const genderOptions = ["Male", "Female"];

  return (
    <div className={styles.section}>
      {/* Header */}
      <div className={styles.headerRow}>
        <span className={styles.sectionTitle}>Sibling Information</span>
        <div className={styles.line}></div>
      </div>

      {/* Row 1 (3 boxes) */}
      <div className={styles.formGrid3}>
        <Inputbox
          label="Full Name"
          name="siblingName"
          placeholder="Enter full name"
          value={formData.siblingName}
          onChange={onChange}
        />
        <Dropdown
          dropdownname="Relation Type"
          name="siblingRelation"
          results={relationOptions}
          value={formData.siblingRelation}
          onChange={onChange}
        />
        <Dropdown
          dropdownname="Select Class"
          name="siblingClass"
          results={classOptions}
          value={formData.siblingClass}
          onChange={onChange}
        />
      </div>

      {/* Row 2 (ONLY 2 boxes — EXACT SCREENSHOT) */}
      <div className={styles.formGrid2}>
        <Inputbox
          label="School Name"
          name="siblingSchool"
          value={formData.siblingSchool}
          placeholder="Enter School Name"
          onChange={onChange}
        />
        <Dropdown
          dropdownname="Gender"
          name="siblingGender"
          results={genderOptions}
          value={formData.siblingGender}
          onChange={onChange}
        />
      </div>

      {/* Buttons Row */}
      <div className={styles.buttonRow}>
        <Button
          buttonname="Upload Annexure"
          variant="secondary"
          onClick={onUploadAnnexure}
        />

        <Button
          buttonname="Add Another Sibling"
          variant="outline"
          onClick={onAddSibling}
        />
      </div>
    </div>
  );
};

export default SchoolSaleConfSiblingInfo;
