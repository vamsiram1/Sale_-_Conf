import React from "react";
import Inputbox from "../../../../widgets/Inputbox/InputBox";
import Dropdown from "../../../../widgets/Dropdown/Dropdown";
import styles from "./SchoolSaleConfAcadeInfo.module.css";

const SchoolSaleConfAcadeInfo = ({ formData, onChange }) => {
  const foodTypeOptions = ["Veg", "Non-Veg", "Both"];
  const casteOptions = ["OC", "BC", "SC", "ST", "Others"];
  const religionOptions = ["Hindu", "Muslim", "Christian", "Other"];
  const bloodGroupOptions = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];

  return (
    <div className={styles.section}>
      {/* Title */}
      <div className={styles.headerRow}>
        <span className={styles.sectionTitle}>Academic Information</span>
        <div className={styles.line}></div>
      </div>

      {/* Row 1 */}
      <div className={styles.formGrid}>
        <Dropdown
          dropdownname="Orientation Name"
          name="orientationName"
          results={["Name 1", "Name 2", "Name 3"]}
          value={formData.orientationName}
          onChange={onChange}
        />

        <Inputbox
          label="Orientation Fee"
          name="orientationFee"
          placeholder="0.0"
          value={formData.orientationFee}
          onChange={onChange}
        />

        <Inputbox
          label="Score App No"
          name="scoreAppNo"
          placeholder="Enter score app No"
          value={formData.scoreAppNo}
          onChange={onChange}
        />
      </div>

      {/* Row 2 */}
      <div className={styles.formGrid}>
        <Inputbox
          label="Score Marks"
          name="scoreMarks"
          placeholder="Enter marks"
          value={formData.scoreMarks}
          onChange={onChange}
        />

        <Dropdown
          dropdownname="Food Type"
          name="foodType"
          results={foodTypeOptions}
          value={formData.foodType}
          onChange={onChange}
        />

        <Dropdown
          dropdownname="Blood Group"
          name="bloodGroup"
          results={bloodGroupOptions}
          value={formData.bloodGroup}
          onChange={onChange}
        />
      </div>

      {/* Row 3 */}
      <div className={styles.formGrid}>
        <Dropdown
          dropdownname="Caste"
          name="caste"
          results={casteOptions}
          value={formData.caste}
          onChange={onChange}
        />

        <Dropdown
          dropdownname="Religion"
          name="religion"
          results={religionOptions}
          value={formData.religion}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default SchoolSaleConfAcadeInfo;


