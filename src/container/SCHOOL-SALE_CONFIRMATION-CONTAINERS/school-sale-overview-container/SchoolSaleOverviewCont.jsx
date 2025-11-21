import React from "react";
import SchoolOverviewTopSection from "../../../components/SCHOOL-SALE-CONFIRMATION/school-confirmation-overview-components/SchoolOverviewTopSectionComponent/SchoolOverviewTopSection";
import SchoolOverviewPersonalInformation from "../../../components/SCHOOL-SALE-CONFIRMATION/school-confirmation-overview-components/school-overview-personal-information/SchoolOverviewPersonalInformation";
import SchoolOverviewParentInformation from "../../../components/SCHOOL-SALE-CONFIRMATION/school-confirmation-overview-components/school-overview-parent-information/SchoolOverviewParentInformation";
import SchoolOverviewAddressInformation from "../../../components/SCHOOL-SALE-CONFIRMATION/school-confirmation-overview-components/school-overview-address-information/SchoolOverviewAddressInformation";
import SchoolOverviewAcademicInformation from "../../../components/SCHOOL-SALE-CONFIRMATION/school-confirmation-overview-components/school-overview-orientation-information/SchoolOverviewAcademicInformation";
import SchoolOverviewOrientaionInfo from "../../../components/SCHOOL-SALE-CONFIRMATION/school-confirmation-overview-components/school-overview-academic-info/SchoolOverviewOrientaionInfo";
import Button from "../../../widgets/Button/Button";
import styles from "./SchoolSaleOverviewCont.module.css";

const SchoolSaleOverviewCont = ({ onNext, onEdit }) => {
  return (
    <div className={styles.container}>
      <SchoolOverviewTopSection step={1} />

      <div className={styles.contentContainer}>
        <SchoolOverviewPersonalInformation />
        <SchoolOverviewParentInformation />
        <SchoolOverviewAcademicInformation />
        <SchoolOverviewOrientaionInfo />
        <SchoolOverviewAddressInformation />
        

        {/* Bottom Action Buttons */}
        <div className={styles.bottomActions}>
          <Button
            buttonname="Edit"
            variant="secondary"
            onClick={onEdit}
          />
          <Button
            buttonname="Next"
            righticon={
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            }
            variant="primary"
            onClick={onNext}
          />
        </div>
      </div>
    </div>
  );
};

export default SchoolSaleOverviewCont;
