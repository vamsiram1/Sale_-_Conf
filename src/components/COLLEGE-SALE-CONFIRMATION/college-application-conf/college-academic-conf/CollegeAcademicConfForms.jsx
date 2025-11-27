import React from "react";
import Inputbox from "../../../../widgets/Inputbox/InputBox";
import Dropdown from "../../../../widgets/Dropdown/Dropdown";
import styles from "./CollegeAcademicConfForms.module.css";

const CollegeAcademicConfForms = () => {
  return (
    <div className={styles.section}>
      {/* Title */}
      <div className={styles.headerRow}>
        <span className={styles.title}>Orientation Information</span>
        <div className={styles.line}></div>
      </div>

      <div className={styles.grid}>
        {/* Row 1: Academic Year, City, Branch */}
        <Inputbox
          label="Academic Year"
          name="academicYear"
          placeholder="Academic Year"
        />

        <Dropdown
          dropdownname="City"
          name="city"
          results={["Hyderabad", "Bangalore", "Chennai", "Mumbai"]}
        />

        <Dropdown
          dropdownname="Branch"
          name="branch"
          results={["Branch 1", "Branch 2", "Branch 3"]}
        />

        {/* Row 2: Joining Class, Course Name, Student Type */}
        <Dropdown
          dropdownname="Joining Class"
          name="joiningClass"
          results={["Class 1", "Class 2", "Class 3"]}
        />

        <Dropdown
          dropdownname="Course Name"
          name="courseName"
          results={["Course 1", "Course 2", "Course 3"]}
        />

        <Dropdown
          dropdownname="Student Type"
          name="studentType"
          results={["Day Scholar", "Hostel", "Semi Residential"]}
        />

        {/* Row 3: Course Start Date, Course End Date, Course Fee */}
        <Inputbox
          label="Course Start Date"
          name="courseStartDate"
          placeholder="Course Start Date"
          type="date"
        />

        <Inputbox
          label="Course End Date"
          name="courseEndDate"
          placeholder="Course End Date"
          type="date"
        />

        <Inputbox
          label="Course Fee"
          name="courseFee"
          placeholder="Course Fee"
        />
      </div>
    </div>
  );
};

export default CollegeAcademicConfForms;
