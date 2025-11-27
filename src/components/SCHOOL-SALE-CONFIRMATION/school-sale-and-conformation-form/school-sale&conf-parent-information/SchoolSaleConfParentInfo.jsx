import React from "react";
import Inputbox from "../../../../widgets/Inputbox/InputBox";
import Dropdown from "../../../../widgets/Dropdown/Dropdown";
import styles from "./SchoolSaleConfParentInfo.module.css";
import { useSectors, useOccupations } from "./hooks/SchoolParentInfo";

const SchoolSaleConfParentInfo = ({ formData, onChange }) => {
  // Fetch sectors from API
  const { sectorOptions, getSectorIdByName, getSectorNameById, loading: sectorsLoading } = useSectors();
  
  // Fetch occupations from API
  const { occupationOptions, getOccupationIdByName, getOccupationNameById, loading: occupationsLoading } = useOccupations();

  // Handle sector change - convert name to ID before storing
  const handleSectorChange = (fieldName) => (e) => {
    const selectedName = e.target.value;
    const sectorId = getSectorIdByName(selectedName);
    
    // Create a synthetic event with the ID value
    const syntheticEvent = {
      target: {
        name: fieldName,
        value: sectorId !== undefined ? sectorId : selectedName // Fallback to name if ID not found
      }
    };
    
    onChange(syntheticEvent);
  };

  // Get display value for sector (convert ID to name if needed)
  const getSectorDisplayValue = (sectorValue) => {
    if (!sectorValue) return "";
    // If it's already a name (string that exists in options), return it
    if (sectorOptions.includes(sectorValue)) {
      return sectorValue;
    }
    // Otherwise, try to convert ID to name
    const name = getSectorNameById(sectorValue);
    return name || sectorValue;
  };

  // Handle occupation change - convert name to ID before storing
  const handleOccupationChange = (fieldName) => (e) => {
    const selectedName = e.target.value;
    const occupationId = getOccupationIdByName(selectedName);
    
    // Create a synthetic event with the ID value
    const syntheticEvent = {
      target: {
        name: fieldName,
        value: occupationId !== undefined ? occupationId : selectedName // Fallback to name if ID not found
      }
    };
    
    onChange(syntheticEvent);

    // If occupation changed away from "Other"/"Others", clear the "Other Occupation Name" field
    const selectedLower = selectedName?.toLowerCase().trim();
    const isOther = selectedLower === "other" || selectedLower === "others";
    const otherOccupationFieldName = fieldName === "fatherOccupation" ? "fatherOtherOccupation" : "motherOtherOccupation";
    
    if (!isOther && formData[otherOccupationFieldName]) {
      const resetOtherEvent = {
        target: {
          name: otherOccupationFieldName,
          value: ""
        }
      };
      onChange(resetOtherEvent);
    }
  };

  // Get display value for occupation (convert ID to name if needed)
  const getOccupationDisplayValue = (occupationValue) => {
    if (!occupationValue) return "";
    // If it's already a name (string that exists in options), return it
    if (occupationOptions.includes(occupationValue)) {
      return occupationValue;
    }
    // Otherwise, try to convert ID to name
    const name = getOccupationNameById(occupationValue);
    return name || occupationValue;
  };

  // Check if sector is "Other" or "Others" (case-insensitive, trimmed)
  const isSectorOther = (sectorValue) => {
    if (!sectorValue) return false;
    const sectorName = getSectorDisplayValue(sectorValue);
    const sectorNameLower = sectorName?.toLowerCase().trim();
    const sectorValueLower = String(sectorValue || "").toLowerCase().trim();
    return sectorNameLower === "other" || 
           sectorNameLower === "others" ||
           sectorValueLower === "other" || 
           sectorValueLower === "others";
  };

  // Check if occupation is "Other" or "Others" (case-insensitive, trimmed)
  const isOccupationOther = (occupationValue) => {
    const occupationName = getOccupationDisplayValue(occupationValue);
    const occupationLower = occupationName?.toLowerCase().trim();
    return occupationLower === "other" || occupationLower === "others";
  };

  // Get filtered occupation options based on sector selection
  const getFilteredOccupationOptions = (sectorValue) => {
    if (!sectorValue) return occupationOptions;
    
    // Check if sector is "Other" or "Others" - check both the stored value and display value
    const sectorDisplayName = getSectorDisplayValue(sectorValue);
    const sectorNameLower = sectorDisplayName?.toLowerCase().trim();
    const sectorValueLower = String(sectorValue || "").toLowerCase().trim();
    
    // Check if either the display name or the stored value is "other" or "others"
    const isOther = 
      sectorNameLower === "other" || 
      sectorNameLower === "others" ||
      sectorValueLower === "other" || 
      sectorValueLower === "others";
    
    if (isOther) {
      // If sector is "Other" or "Others", only show "Other"/"Others" in occupations
      // Find the "Other" or "Others" option (case-insensitive match, but return original case)
      const otherOption = occupationOptions.find(opt => {
        const optLower = String(opt || "").toLowerCase().trim();
        return optLower === "other" || optLower === "others";
      });
      
      // Return array with "Other"/"Others" option if found, otherwise return empty array
      return otherOption ? [otherOption] : [];
    }
    return occupationOptions;
  };

  // Handle sector change with occupation reset logic
  const handleSectorChangeWithReset = (fieldName) => (e) => {
    const selectedName = e.target.value;
    const sectorId = getSectorIdByName(selectedName);
    
    // Create a synthetic event with the ID value
    const syntheticEvent = {
      target: {
        name: fieldName,
        value: sectorId !== undefined ? sectorId : selectedName
      }
    };
    
    onChange(syntheticEvent);

    // If sector changed to/from "Other"/"Others", reset the corresponding occupation and other occupation name
    const selectedLower = selectedName?.toLowerCase().trim();
    const isOther = selectedLower === "other" || selectedLower === "others";
    const occupationFieldName = fieldName === "fatherSector" ? "fatherOccupation" : "motherOccupation";
    const otherOccupationFieldName = fieldName === "fatherSector" ? "fatherOtherOccupation" : "motherOtherOccupation";
    const currentOccupation = getOccupationDisplayValue(formData[occupationFieldName]);
    const currentOccupationLower = currentOccupation?.toLowerCase().trim();
    const currentIsOther = currentOccupationLower === "other" || currentOccupationLower === "others";
    
    // If sector is now "Other" and occupation is not "Other", reset occupation
    // Or if sector is not "Other" and occupation is "Other", reset occupation
    if ((isOther && !currentIsOther) || (!isOther && currentIsOther)) {
      const resetEvent = {
        target: {
          name: occupationFieldName,
          value: ""
        }
      };
      onChange(resetEvent);
      
      // Also clear the "Other Occupation Name" field
      const resetOtherEvent = {
        target: {
          name: otherOccupationFieldName,
          value: ""
        }
      };
      onChange(resetOtherEvent);
    }
  };

  // Get current sector display values
  const fatherSectorDisplay = getSectorDisplayValue(formData.fatherSector);
  const motherSectorDisplay = getSectorDisplayValue(formData.motherSector);
  
  // Get filtered occupation options for father and mother
  const fatherOccupationOptions = getFilteredOccupationOptions(formData.fatherSector);
  const motherOccupationOptions = getFilteredOccupationOptions(formData.motherSector);
  
  // Check if "Other Occupation Name" should be visible
  const showFatherOtherOccupation = isOccupationOther(formData.fatherOccupation);
  const showMotherOtherOccupation = isOccupationOther(formData.motherOccupation);

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
          <svg
            className={styles.inputIcon}
            width="20"
            height="20"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              d="M18.333 14.1v2.5c.001.232-.047.462-.14.675a1.67 1.67 0 0 1-.994.959c-.22.074-.453.102-.684.081A17.09 17.09 0 0 1 9.325 15.708 17.11 17.11 0 0 1 4.325 10.708 17.1 17.1 0 0 1 1.767 3.483c-.02-.23.008-.462.082-.681.074-.22.194-.421.35-.592.155-.17.345-.307.556-.4.212-.094.44-.143.672-.143H5.925c.404-.004.796.139 1.103.403.307.263.507.629.563 1.03.105.8.301 1.586.583 2.342.112.298.136.622.07.933-.067.312-.221.598-.445.825L6.742 8.258a14.35 14.35 0 0 0 5 5l1.058-1.058c.227-.224.513-.378.825-.445.312-.066.636-.042.934.07.756.282 1.542.478 2.342.583.404.056.77.256 1.034.563.264.307.407.699.403 1.103Z"
              stroke="#98A2B3"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
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
          <svg
            className={styles.inputIcon}
            width="20"
            height="20"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              d="M18.333 5c0-.917-.75-1.667-1.667-1.667H3.333C2.417 3.333 1.667 4.083 1.667 5m16.666 0v10c0 .917-.75 1.667-1.667 1.667H3.333C2.417 16.667 1.667 15.917 1.667 15V5m16.666 0L10 10.833 1.667 5"
              stroke="#98A2B3"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Father Row 2 */}
      <div className={styles.formGrid}>
        <Dropdown
          dropdownname="Sector"
          name="fatherSector"
          results={sectorsLoading ? [] : sectorOptions}
          value={getSectorDisplayValue(formData.fatherSector)}
          onChange={handleSectorChangeWithReset("fatherSector")}
          disabled={sectorsLoading}
        />
        <Dropdown
          dropdownname="Occupation"
          name="fatherOccupation"
          results={occupationsLoading ? [] : fatherOccupationOptions}
          value={getOccupationDisplayValue(formData.fatherOccupation)}
          onChange={handleOccupationChange("fatherOccupation")}
          disabled={occupationsLoading}
        />
        {showFatherOtherOccupation && (
          <Inputbox
            label="Other Occupation Name"
            name="fatherOtherOccupation"
            placeholder="Enter other occupation name"
            value={formData.fatherOtherOccupation}
            onChange={onChange}
          />
        )}
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
          <svg
            className={styles.inputIcon}
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path d="M18.333 14.1v2.5..." stroke="#98A2B3" />
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
          <svg
            className={styles.inputIcon}
            width="20"
            height="20"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              d="M18.333 5L10 10.833 1.667 5"
              stroke="#98A2B3"
              strokeWidth="1.6"
            />
          </svg>
        </div>
      </div>

      {/* Mother Row 2 */}
      <div className={styles.formGrid}>
        <Dropdown
          dropdownname="Sector"
          name="motherSector"
          results={sectorsLoading ? [] : sectorOptions}
          value={getSectorDisplayValue(formData.motherSector)}
          onChange={handleSectorChangeWithReset("motherSector")}
          disabled={sectorsLoading}
        />
        <Dropdown
          dropdownname="Occupation"
          name="motherOccupation"
          results={occupationsLoading ? [] : motherOccupationOptions}
          value={getOccupationDisplayValue(formData.motherOccupation)}
          onChange={handleOccupationChange("motherOccupation")}
          disabled={occupationsLoading}
        />
        {showMotherOtherOccupation && (
          <Inputbox
            label="Other Occupation Name"
            name="motherOtherOccupation"
            placeholder="Enter other occupation name"
            value={formData.motherOtherOccupation}
            onChange={onChange}
          />
        )}
      </div>
    </div>
  );
};

export default SchoolSaleConfParentInfo;
