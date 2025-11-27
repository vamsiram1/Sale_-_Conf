import React, { useState } from "react";
import SchoolOverviewTopSection from "../../../widgets/ApplicationSaleAndConTopSection/ApplicationSaleAndConfTopSec";
import SchoolSaleConfParentInfo from "../../../components/SCHOOL-SALE-CONFIRMATION/school-sale-and-conformation-form/school-sale&conf-parent-information/SchoolSaleConfParentInfo";
import SchoolSaleConfSiblingInfo from "../../../components/SCHOOL-SALE-CONFIRMATION/school-sale-and-conformation-form/school-sale&conf-sibling-info/SchoolSaleConfSiblingInfo";
import Button from "../../../widgets/Button/Button";
import styles from "./SchoolSaleConfFormsCont.module.css";
import SchoolSaleConfAcadeInfo from "../../../components/SCHOOL-SALE-CONFIRMATION/school-sale-and-conformation-form/school-sale&conf-academic-info/SchoolSaleConfAcadeInfo";
import SchoolSaleConfLangInfo from "../../../components/SCHOOL-SALE-CONFIRMATION/school-sale-and-conformation-form/school-sale&conf-language-info/SchoolSaleConfLangInfo";
import SchoolSaleConfConceInfo from "../../../components/SCHOOL-SALE-CONFIRMATION/school-sale-and-conformation-form/school-sale&conf-concestion-info/SchoolSaleConfConceInfo";
import ButtonRightArrow from "../../../assets/school-sale-conf-assets/ButtonRightArrow";

const SchoolSaleConfFormsCont = ({ onBack, onProceedToPayment, detailsObject }) => {
  const [formData, setFormData] = useState({
    // Father Info
    fatherName: "",
    fatherPhone: "",
    fatherEmail: "",
    fatherSector: "",
    fatherOccupation: "",
    
    // Mother Info
    motherName: "",
    motherPhone: "",
    motherEmail: "",
    motherSector: "",
    motherOccupation: "",
    
    // Academic Info
    orientationName: "",
    orientationFee: "",
    scoreAppNo: "",
    scoreMarks: "",
    foodType: "",
    bloodGroup: "",
    caste: "",
    religion: "",
    
    // Language Info
    firstLanguage: "",
    secondLanguage: "",
    thirdLanguage: "",
    
    // Concession Info
    admissionConcession: "",
    tuitionConcession: "",
    referredBy: "",
    concessionDescription: "",
    concessionReason: "",
    authorizedBy: "",
  });

  // Separate state for siblings array
  const [siblings, setSiblings] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSiblingChange = (id, field, value) => {
    setSiblings((prev) =>
      prev.map((sibling) =>
        sibling.id === id ? { ...sibling, [field]: value } : sibling
      )
    );
  };

  const handleAddSibling = () => {
    const newSibling = {
      id: Date.now(),
      siblingName: "",
      siblingRelation: "",
      siblingClass: "",
      siblingSchool: "",
    };
    setSiblings((prev) => [...prev, newSibling]);
  };

  const handleClearSibling = (id) => {
    setSiblings((prev) =>
      prev.map((sibling) =>
        sibling.id === id
          ? {
              ...sibling,
              siblingName: "",
              siblingRelation: "",
              siblingClass: "",
              siblingSchool: "",
            }
          : sibling
      )
    );
  };

  const handleDeleteSibling = (id) => {
    setSiblings((prev) => prev.filter((sibling) => sibling.id !== id));
  };

  const handleUploadAnnexure = () => {
    console.log("Upload Annexure");
  };

  const handleProceedToPayment = () => {
    console.log("Proceed to payment", formData);
    if (onProceedToPayment) {
      onProceedToPayment();
    }
  };

  return (
    <div className={styles.container}>
      <SchoolOverviewTopSection step={2} onBack={onBack} title="Application Sale & Confirmation" detailsObject={detailsObject} />

      <div className={styles.formContainer}>
        <SchoolSaleConfParentInfo 
          formData={formData} 
          onChange={handleChange} 
        />
        
        <SchoolSaleConfSiblingInfo 
          siblings={siblings}
          onSiblingChange={handleSiblingChange}
          onAddSibling={handleAddSibling}
          onClearSibling={handleClearSibling}
          onDeleteSibling={handleDeleteSibling}
          onUploadAnnexure={handleUploadAnnexure}
        />

        <SchoolSaleConfAcadeInfo
          formData={formData}
          onChange={handleChange}
        />

        <SchoolSaleConfLangInfo
          formData={formData}
          onChange={handleChange}
        />

        <SchoolSaleConfConceInfo
          formData={formData}
          onChange={handleChange}
        />

        {/* Bottom Action Button */}
        <div className={styles.bottomActions}>
          <Button
            buttonname="Proceed to payment"
            righticon={
              <ButtonRightArrow/>
            }
            variant="primary"
            width="220px"
            onClick={handleProceedToPayment}
          />
        </div>
      </div>
    </div>
  );
};

export default SchoolSaleConfFormsCont;

