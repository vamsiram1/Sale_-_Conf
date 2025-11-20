import React from "react";
import SchoolOverviewTopSection from "../../components/school-confirmation-components/SchoolOverviewTopSectionComponent/SchoolOverviewTopSection";
import SchoolOverviewPersonalInformation from "../../components/school-confirmation-components/school-overview-personal-information/SchoolOverviewPersonalInformation";
import SchoolOverviewParentInformation from "../../components/school-confirmation-components/school-overview-parent-information/SchoolOverviewParentInformation";
import SchoolOverviewOrientationInformation from "../../components/school-confirmation-components/school-overview-orientation-information/SchoolOverviewOrientationInformation";
import SchoolOverviewAddressInformation from "../../components/school-confirmation-components/school-overview-address-information/SchoolOverviewAddressInformation";
import Button from "../../widgets/Button/Button";
import styles from "./SchoolSaleOverviewCont.module.css";

const SchoolSaleOverviewCont = ({ onNext, onEdit }) => {
  const handleNext = () => {
    if (onNext) {
      onNext();
    }
  };

  const handleEdit = () => {
    if (onEdit) {
      onEdit();
    }
  };

  return (
    <div className={styles.container}>
      <SchoolOverviewTopSection />
      <div className={styles.contentWrapper}>
        <SchoolOverviewPersonalInformation />
        <SchoolOverviewParentInformation />
        <SchoolOverviewOrientationInformation />
        <SchoolOverviewAddressInformation />
      </div>

      <div className={styles.buttonContainer}>
        <Button 
          buttonname="Edit" 
          lefticon={
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 16H16M9 3L3 9V13H7L13 7M9 3L11.8686 0.131372L11.8704 0.129576C12.2652 -0.265228 12.463 -0.463078 12.691 -0.53619C12.8919 -0.600571 13.1082 -0.600571 13.309 -0.53619C13.5369 -0.463078 13.7345 -0.265286 14.1288 0.129478L17.8686 3.86926C18.2652 4.26582 18.463 4.46357 18.5361 4.69148C18.6005 4.89223 18.6005 5.10844 18.5361 5.30919C18.463 5.5371 18.2652 5.73485 17.8686 6.13141L14.1213 9.87868M9 3L14.1213 9.87868" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          }
          variant="outline"
          width="180px"
          onClick={handleEdit}
        />
        <Button 
          buttonname="Next" 
          righticon={
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          }
          variant="primary"
          width="180px"
          onClick={handleNext}
        />
      </div>
    </div>
  );
};

export default SchoolSaleOverviewCont;