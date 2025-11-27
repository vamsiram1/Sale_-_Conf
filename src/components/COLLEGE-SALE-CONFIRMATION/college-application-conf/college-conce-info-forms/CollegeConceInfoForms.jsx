import React, { useState } from "react";
import Inputbox from "../../../../widgets/Inputbox/InputBox";
import Dropdown from "../../../../widgets/Dropdown/Dropdown";
import styles from "./CollegeConceInfoForms.module.css";
import { useAuthorizedByList, useConcessionReasonList } from "../../../../hooks/college-apis/form-apis/ConcessionInfoApis";

const CollegeConceInfoForms = () => {
  const [isChecked, setIsChecked] = useState(false);

  // State to store selected values for display
  const [selectedReferredBy, setSelectedReferredBy] = useState("");
  const [selectedAuthorizedBy, setSelectedAuthorizedBy] = useState("");
  const [selectedConcessionReferredBy, setSelectedConcessionReferredBy] = useState("");
  const [selectedConcessionReason, setSelectedConcessionReason] = useState("");

  // Fetch authorized by list for all three dropdowns
  const { authorizedByList, loading, error } = useAuthorizedByList();

  // Fetch concession reason list for concession reason dropdown
  const { concessionReasonList, loading: reasonLoading, error: reasonError } = useConcessionReasonList();

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  // Handle dropdown changes
  const handleReferredByChange = (event) => {
    const value = event?.target?.value || event;
    console.log('Selected Referred By:', value);
    setSelectedReferredBy(value);
  };

  const handleAuthorizedByChange = (event) => {
    const value = event?.target?.value || event;
    console.log('Selected Authorized By:', value);
    setSelectedAuthorizedBy(value);
  };

  const handleConcessionReferredByChange = (event) => {
    const value = event?.target?.value || event;
    console.log('Selected Concession Referred By:', value);
    setSelectedConcessionReferredBy(value);
  };

  const handleConcessionReasonChange = (event) => {
    const value = event?.target?.value || event;
    console.log('Selected Concession Reason:', value);
    setSelectedConcessionReason(value);
  };

  console.log('Authorized By List:', authorizedByList);
  console.log('Loading:', loading);
  console.log('Error:', error);

  console.log('Concession Reason List:', concessionReasonList);
  console.log('Reason Loading:', reasonLoading);
  console.log('Reason Error:', reasonError);

  // Format options for dropdown - extract displayText
  const dropdownOptions = loading 
    ? ["Loading..."] 
    : authorizedByList.length > 0 
      ? authorizedByList.map(item => item.displayText)
      : ["No data available"];

  // Format options for concession reason dropdown
  const concessionReasonOptions = reasonLoading 
    ? ["Loading..."] 
    : concessionReasonList.length > 0 
      ? concessionReasonList.map(item => item.displayText)
      : ["No data available"];

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
          results={dropdownOptions}
          onChange={handleReferredByChange}
          value={selectedReferredBy}
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
          results={dropdownOptions}
          onChange={handleAuthorizedByChange}
          value={selectedAuthorizedBy}
        />

        <Dropdown
          dropdownname="Concession Reason"
          name="concessionReason"
          results={concessionReasonOptions}
          onChange={handleConcessionReasonChange}
          value={selectedConcessionReason}
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
            results={dropdownOptions}
            onChange={handleConcessionReferredByChange}
            value={selectedConcessionReferredBy}
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