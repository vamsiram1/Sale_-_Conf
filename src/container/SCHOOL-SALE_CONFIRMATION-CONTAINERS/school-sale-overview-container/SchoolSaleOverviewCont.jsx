import React from "react";
import SchoolOverviewTopSection from "../../../widgets/ApplicationSaleAndConTopSection/ApplicationSaleAndConfTopSec";
import SchoolOverviewPersonalInformation from "../../../components/SCHOOL-SALE-CONFIRMATION/school-confirmation-overview-components/school-overview-personal-information/SchoolOverviewPersonalInformation";
import SchoolOverviewParentInformation from "../../../components/SCHOOL-SALE-CONFIRMATION/school-confirmation-overview-components/school-overview-parent-information/SchoolOverviewParentInformation";
import SchoolOverviewAddressInformation from "../../../components/SCHOOL-SALE-CONFIRMATION/school-confirmation-overview-components/school-overview-address-information/SchoolOverviewAddressInformation";
import SchoolOverviewAcademicInformation from "../../../components/SCHOOL-SALE-CONFIRMATION/school-confirmation-overview-components/school-overview-orientation-information/SchoolOverviewAcademicInformation";
import SchoolOverviewOrientaionInfo from "../../../components/SCHOOL-SALE-CONFIRMATION/school-confirmation-overview-components/school-overview-academic-info/SchoolOverviewOrientaionInfo";
import Button from "../../../widgets/Button/Button";
import styles from "./SchoolSaleOverviewCont.module.css";
import EditIcon from "../../../assets/school-sale-conf-assets/EditIcon";
import ButtonRightArrow from "../../../assets/school-sale-conf-assets/ButtonRightArrow";

const SchoolSaleOverviewCont = ({ onNext, onEdit }) => {
  return (
    <div className={styles.container}>
      <SchoolOverviewTopSection
        step={1}
        title="Application Sale & Confirmation"
      />

      <div className={styles.contentContainer}>
        <SchoolOverviewPersonalInformation />
        <SchoolOverviewParentInformation />
        <SchoolOverviewAcademicInformation />
        <SchoolOverviewOrientaionInfo />
        <SchoolOverviewAddressInformation />
      </div>
      {/* Bottom Action Buttons */}
      <div className={styles.bottomActions}>
        <Button
          buttonname="Edit"
          variant="secondary"
          onClick={onEdit}
          lefticon={<EditIcon/>}
        />
        <Button
          buttonname="Next"
          righticon={<ButtonRightArrow />}
          variant="primary"
          onClick={onNext}
        />
      </div>
    </div>
  );
};

export default SchoolSaleOverviewCont;
