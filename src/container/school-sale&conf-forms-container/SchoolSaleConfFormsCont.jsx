import React, { useState } from "react";
import SchoolOverviewTopSection from "../../components/school-confirmation-components/SchoolOverviewTopSectionComponent/SchoolOverviewTopSection";
import SchoolSaleConfParentInfo from "../../components/school-sale-and-conformation-form/school-sale&conf-parent-information/SchoolSaleConfParentInfo";
import SchoolSaleConfSiblingInfo from "../../components/school-sale-and-conformation-form/school-sale&conf-sibling-info/SchoolSaleConfSiblingInfo";
import Button from "../../widgets/Button/Button";
import styles from "./SchoolSaleConfFormsCont.module.css";
import SchoolSaleConfAcadeInfo from "../../components/school-sale-and-conformation-form/school-sale&conf-academic-info/SchoolSaleConfAcadeInfo";
import SchoolSaleConfLangInfo from "../../components/school-sale-and-conformation-form/school-sale&conf-language-info/SchoolSaleConfLangInfo";
import SchoolSaleConfConceInfo from "../../components/school-sale-and-conformation-form/school-sale&conf-concestion-info/SchoolSaleConfConceInfo";

const SchoolSaleConfFormsCont = ({ onBack }) => {
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
    
    // Sibling Info
    siblingName: "",
    siblingRelation: "",
    siblingClass: "",
    siblingSchool: "",
    siblingGender: "",
    
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddSibling = () => {
    console.log("Add another sibling");
  };

  const handleUploadAnnexure = () => {
    console.log("Upload Annexure");
  };

  const handleProceedToPayment = () => {
    console.log("Proceed to payment", formData);
  };

  return (
    <div className={styles.container}>
      <SchoolOverviewTopSection step={2} onBack={onBack} />

      <div className={styles.formContainer}>
        <SchoolSaleConfParentInfo 
          formData={formData} 
          onChange={handleChange} 
        />
        
        <SchoolSaleConfSiblingInfo 
          formData={formData} 
          onChange={handleChange}
          onAddSibling={handleAddSibling}
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
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
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

