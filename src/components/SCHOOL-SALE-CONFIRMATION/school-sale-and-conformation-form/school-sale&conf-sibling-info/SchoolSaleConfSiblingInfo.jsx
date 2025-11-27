import React from "react";
import Inputbox from "../../../../widgets/Inputbox/InputBox";
import Dropdown from "../../../../widgets/Dropdown/Dropdown";
import Button from "../../../../widgets/Button/Button";
import styles from "./SchoolSaleConfSiblingInfo.module.css";
import UploadIcon from "../../../../assets/school-sale-conf-assets/UploadIcon";
import PlusIcon from "../../../../assets/school-sale-conf-assets/PlusIcon";

const SchoolSaleConfSiblingInfo = ({
  siblings,
  onSiblingChange,
  onAddSibling,
  onClearSibling,
  onDeleteSibling,
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

  return (
    <div className={styles.section}>
      {/* Main Header - Only shown once */}
      {siblings.length > 0 && (
        <div className={styles.mainHeaderRow}>
          <span className={styles.mainTitle}>Sibling Information</span>
          <div className={styles.line}></div>
        </div>
      )}

      {/* Render each sibling card */}
      {siblings.map((sibling, index) => (
        <div key={sibling.id} className={styles.siblingCard}>
          {/* Card Header with Clear and Delete buttons */}
          <div className={styles.cardHeaderRow}>
            <span className={styles.siblingNumber}>Sibling {index + 1}</span>

            <div className={styles.siblingActions}>
              <button
                className={styles.clearBtn}
                onClick={() => onClearSibling(sibling.id)}
              >
                Clear
              </button>

              <button
                className={styles.deleteBtn}
                onClick={() => onDeleteSibling(sibling.id)}
              >
                ✕
              </button>
            </div>
          </div>

          {/* Row 1 (3 boxes) */}
          <div className={styles.formGrid3}>
            <Inputbox
              label="Full Name"
              name="siblingName"
              placeholder="Enter Full Name"
              value={sibling.siblingName}
              onChange={(e) =>
                onSiblingChange(sibling.id, "siblingName", e.target.value)
              }
            />

            <Dropdown
              dropdownname="Relation Type"
              name="siblingRelation"
              results={relationOptions}
              value={sibling.siblingRelation}
              onChange={(e) =>
                onSiblingChange(sibling.id, "siblingRelation", e.target.value)
              }
            />

            <Dropdown
              dropdownname="Select Class"
              name="siblingClass"
              results={classOptions}
              value={sibling.siblingClass}
              onChange={(e) =>
                onSiblingChange(sibling.id, "siblingClass", e.target.value)
              }
            />
          </div>

          {/* Row 2 (Organization Name) */}
          <div className={styles.formGrid1}>
            <Inputbox
              label="Organization Name"
              name="siblingSchool"
              value={sibling.siblingSchool}
              placeholder="Enter Organization Name"
              onChange={(e) =>
                onSiblingChange(sibling.id, "siblingSchool", e.target.value)
              }
            />
          </div>
        </div>
      ))}

      {/* Buttons Row */}
      <div className={styles.buttonRow}>
        <Button
          buttonname="Upload Annexure"
          variant="secondary"
          onClick={onUploadAnnexure}
          lefticon={<UploadIcon />}
        />

        <Button
          buttonname="Add Another Sibling"
          variant="outline"
          onClick={onAddSibling}
          lefticon={<PlusIcon />}
        />
      </div>
    </div>
  );
};

export default SchoolSaleConfSiblingInfo;
