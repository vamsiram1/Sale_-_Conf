import React from "react";
import Inputbox from "../../../../widgets/Inputbox/InputBox";
import Dropdown from "../../../../widgets/Dropdown/Dropdown";
import styles from "./SchoolSaleConfAcadeInfo.module.css";
import { useOrientations, getOrientationFee, useFoodTypes, useBloodGroups, useCastes, useReligions } from "./hooks/SchoolAcedemic";

const SchoolSaleConfAcadeInfo = ({ formData, onChange, overviewData }) => {
  // Extract branchId and joiningClassId from overviewData
  const branchId = overviewData?.branchId;
  const joiningClassId = overviewData?.joiningClassId;
  
  // Fetch orientations from API using branchId and joiningClassId
  const { orientationOptions, getOrientationIdByLabel, getOrientationLabelById, loading: orientationsLoading } = useOrientations(joiningClassId, branchId);
  
  // Fetch food types from API
  const { foodTypeOptions, getFoodTypeIdByLabel, getFoodTypeLabelById, loading: foodTypesLoading } = useFoodTypes();
  
  // Fetch blood groups from API
  const { bloodGroupOptions, getBloodGroupIdByLabel, getBloodGroupLabelById, loading: bloodGroupsLoading } = useBloodGroups();
  
  // Fetch castes from API
  const { casteOptions, getCasteIdByLabel, getCasteLabelById, loading: castesLoading } = useCastes();
  
  // Fetch religions from API
  const { religionOptions, getReligionIdByLabel, getReligionLabelById, loading: religionsLoading } = useReligions();

  // Handle orientation change - convert label to ID before storing and fetch fee
  const handleOrientationChange = async (e) => {
    const selectedLabel = e.target.value;
    const orientationId = getOrientationIdByLabel(selectedLabel);
    
    // Create a synthetic event with the ID value
    const syntheticEvent = {
      target: {
        name: "orientationName",
        value: orientationId !== undefined ? orientationId : selectedLabel // Fallback to label if ID not found
      }
    };
    
    onChange(syntheticEvent);

    // Fetch orientation fee if orientationId is available
    if (orientationId !== undefined) {
      try {
        const feeResponse = await getOrientationFee(orientationId);
        console.log('Orientation Fee Response:', feeResponse);
        
        // Helper function to extract fee value from response
        const extractFeeValue = (response) => {
          // If response is a primitive (number or string), return it
          if (typeof response === 'number' || typeof response === 'string') {
            return response;
          }
          
          // If response is null or undefined, return empty string
          if (response === null || response === undefined) {
            return "";
          }
          
          // If response has a data property
          if (response.data !== undefined) {
            const data = response.data;
            // If data is a primitive, return it
            if (typeof data === 'number' || typeof data === 'string') {
              return data;
            }
            // If data is an object, try to find fee property
            if (typeof data === 'object' && data !== null) {
              return data.fee || data.orientationFee || data.amount || data.value || "";
            }
          }
          
          // If response is an object, try common property names
          if (typeof response === 'object' && response !== null) {
            // Try common property names
            const fee = response.fee || response.orientationFee || response.amount || response.value;
            if (fee !== undefined && fee !== null) {
              // If fee is still an object, try to extract a number from it
              if (typeof fee === 'object') {
                const numericValue = Object.values(fee).find(val => 
                  typeof val === 'number' || (typeof val === 'string' && !isNaN(parseFloat(val)))
                );
                return numericValue !== undefined ? numericValue : "";
              }
              return fee;
            }
          }
          
          return "";
        };
        
        // Extract and convert fee value
        const fee = extractFeeValue(feeResponse);
        const feeValue = fee !== null && fee !== undefined 
          ? (typeof fee === 'number' ? fee.toString() : String(fee))
          : "";
        
        console.log('Extracted Fee Value:', feeValue);
        
        // Update orientation fee field
        const feeEvent = {
          target: {
            name: "orientationFee",
            value: feeValue
          }
        };
        onChange(feeEvent);
      } catch (err) {
        console.error('Error fetching orientation fee:', err);
        // Optionally clear the fee field on error
        const feeEvent = {
          target: {
            name: "orientationFee",
            value: ""
          }
        };
        onChange(feeEvent);
      }
    } else {
      // Clear fee if no valid orientation ID
      const feeEvent = {
        target: {
          name: "orientationFee",
          value: ""
        }
      };
      onChange(feeEvent);
    }
  };

  // Get display value for orientation (convert ID to label if needed)
  const getOrientationDisplayValue = (orientationValue) => {
    if (!orientationValue) return "";
    // If it's already a label (string that exists in options), return it
    if (orientationOptions.includes(orientationValue)) {
      return orientationValue;
    }
    // Otherwise, try to convert ID to label
    const label = getOrientationLabelById(orientationValue);
    return label || orientationValue;
  };

  // Handle food type change - convert label to ID before storing
  const handleFoodTypeChange = (e) => {
    const selectedLabel = e.target.value;
    const foodTypeId = getFoodTypeIdByLabel(selectedLabel);
    
    // Create a synthetic event with the ID value
    const syntheticEvent = {
      target: {
        name: "foodType",
        value: foodTypeId !== undefined ? foodTypeId : selectedLabel // Fallback to label if ID not found
      }
    };
    
    onChange(syntheticEvent);
  };

  // Get display value for food type (convert ID to label if needed)
  const getFoodTypeDisplayValue = (foodTypeValue) => {
    if (!foodTypeValue) return "";
    // If it's already a label (string that exists in options), return it
    if (foodTypeOptions.includes(foodTypeValue)) {
      return foodTypeValue;
    }
    // Otherwise, try to convert ID to label
    const label = getFoodTypeLabelById(foodTypeValue);
    return label || foodTypeValue;
  };

  // Handle blood group change - convert label to ID before storing
  const handleBloodGroupChange = (e) => {
    const selectedLabel = e.target.value;
    const bloodGroupId = getBloodGroupIdByLabel(selectedLabel);
    
    // Create a synthetic event with the ID value
    const syntheticEvent = {
      target: {
        name: "bloodGroup",
        value: bloodGroupId !== undefined ? bloodGroupId : selectedLabel // Fallback to label if ID not found
      }
    };
    
    onChange(syntheticEvent);
  };

  // Get display value for blood group (convert ID to label if needed)
  const getBloodGroupDisplayValue = (bloodGroupValue) => {
    if (!bloodGroupValue) return "";
    // If it's already a label (string that exists in options), return it
    if (bloodGroupOptions.includes(bloodGroupValue)) {
      return bloodGroupValue;
    }
    // Otherwise, try to convert ID to label
    const label = getBloodGroupLabelById(bloodGroupValue);
    return label || bloodGroupValue;
  };

  // Handle caste change - convert label to ID before storing
  const handleCasteChange = (e) => {
    const selectedLabel = e.target.value;
    const casteId = getCasteIdByLabel(selectedLabel);
    
    // Create a synthetic event with the ID value
    const syntheticEvent = {
      target: {
        name: "caste",
        value: casteId !== undefined ? casteId : selectedLabel // Fallback to label if ID not found
      }
    };
    
    onChange(syntheticEvent);
  };

  // Get display value for caste (convert ID to label if needed)
  const getCasteDisplayValue = (casteValue) => {
    if (!casteValue) return "";
    // If it's already a label (string that exists in options), return it
    if (casteOptions.includes(casteValue)) {
      return casteValue;
    }
    // Otherwise, try to convert ID to label
    const label = getCasteLabelById(casteValue);
    return label || casteValue;
  };

  // Handle religion change - convert label to ID before storing
  const handleReligionChange = (e) => {
    const selectedLabel = e.target.value;
    const religionId = getReligionIdByLabel(selectedLabel);
    
    // Create a synthetic event with the ID value
    const syntheticEvent = {
      target: {
        name: "religion",
        value: religionId !== undefined ? religionId : selectedLabel // Fallback to label if ID not found
      }
    };
    
    onChange(syntheticEvent);
  };

  // Get display value for religion (convert ID to label if needed)
  const getReligionDisplayValue = (religionValue) => {
    if (!religionValue) return "";
    // If it's already a label (string that exists in options), return it
    if (religionOptions.includes(religionValue)) {
      return religionValue;
    }
    // Otherwise, try to convert ID to label
    const label = getReligionLabelById(religionValue);
    return label || religionValue;
  };

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
          results={orientationsLoading ? [] : orientationOptions}
          value={getOrientationDisplayValue(formData.orientationName)}
          onChange={handleOrientationChange}
          disabled={orientationsLoading || !branchId || !joiningClassId}
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
          results={foodTypesLoading ? [] : foodTypeOptions}
          value={getFoodTypeDisplayValue(formData.foodType)}
          onChange={handleFoodTypeChange}
          disabled={foodTypesLoading}
        />

        <Dropdown
          dropdownname="Blood Group"
          name="bloodGroup"
          results={bloodGroupsLoading ? [] : bloodGroupOptions}
          value={getBloodGroupDisplayValue(formData.bloodGroup)}
          onChange={handleBloodGroupChange}
          disabled={bloodGroupsLoading}
        />
      </div>

      {/* Row 3 */}
      <div className={styles.formGrid}>
        <Dropdown
          dropdownname="Caste"
          name="caste"
          results={castesLoading ? [] : casteOptions}
          value={getCasteDisplayValue(formData.caste)}
          onChange={handleCasteChange}
          disabled={castesLoading}
        />

        <Dropdown
          dropdownname="Religion"
          name="religion"
          results={religionsLoading ? [] : religionOptions}
          value={getReligionDisplayValue(formData.religion)}
          onChange={handleReligionChange}
          disabled={religionsLoading}
        />
      </div>
    </div>
  );
};

export default SchoolSaleConfAcadeInfo;


