import React from "react";
import Inputbox from "../../../../widgets/Inputbox/InputBox";
import Dropdown from "../../../../widgets/Dropdown/Dropdown";
import styles from "./CollegeAcademicConfForms.module.css";

const CollegeAcademicConfForms = () => {
  return (
    <div className={styles.section}>
      {/* Title */}
      <div className={styles.headerRow}>
        <span className={styles.title}>Conform Academic Information</span>
        <div className={styles.line}></div>
      </div>

      <div className={styles.grid}>
        {/* Orientation Batch */}

        <Inputbox
          label="Academic Year"
          name="academicYear"
          placeholder="Academic year"
        />


        <Dropdown
          dropdownname="Orientation Batch"
          name="orientationBatch"
          results={["Batch 1", "Batch 2", "Batch 3"]}
        />

        {/* Orientation Dates */}
        <Inputbox
          label="Orientation Dates"
          name="orientationDates"
          type="date"
        />

        {/* Orientation Fee */}
        <Inputbox
          label="Orientation Fee"
          name="orientationFee"
          placeholder="0.0"
        />

        {/* School State */}
        <Dropdown
          dropdownname="School State"
          name="schoolState"
          results={["Telangana", "Andhra Pradesh", "Karnataka", "Tamil Nadu"]}
        />

        {/* School District */}
        <Dropdown
          dropdownname="School District"
          name="schoolDistrict"
          results={["Hyderabad", "Rangareddy", "Medchal", "Sangareddy"]}
        />

        {/* School Type */}
        <Dropdown
          dropdownname="School Type"
          name="schoolType"
          results={["SSC", "CBSE", "ICSE", "IB"]}
        />

        {/* School Name */}
        <Inputbox
          label="School Name"
          name="schoolName"
          placeholder="Enter name of the school"
        />

        {/* Additional Orientation Fee */}
        <Inputbox
          label="Additional Orientation Fee"
          name="additionalOrientationFee"
          placeholder="Orientation fee"
        />

        {/* Score App No */}
        <Inputbox
          label="Score App NO"
          name="scoreAppNo"
          placeholder="Enter score app No"
        />

        {/* Marks */}
        <Inputbox label="Marks" name="marks" placeholder="Enter marks" />

        {/* Food Type */}
        <Dropdown
          dropdownname="Food Type"
          name="foodType"
          results={["Veg", "Non-Veg", "Both"]}
        />
        {/* Blood Group */}
        <Dropdown
          dropdownname="Blood Group"
          name="bloodGroup"
          results={["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"]}
        />
      </div>
    </div>
  );
};

export default CollegeAcademicConfForms;
