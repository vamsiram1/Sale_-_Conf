import React from "react";
import CollegeOverviewPersonalInfo from "../../../components/COLLEGE-SALE-CONFIRMATION/college-overview-info/college-overview-personal-info/CollegeOverviewPersonalInfo";
import CollegeOverviewParentInfo from "../../../components/COLLEGE-SALE-CONFIRMATION/college-overview-info/college-overview-parent-info/CollegeOverviewParentInfo";
import CollegeOverviewSiblingInfo from "../../../components/COLLEGE-SALE-CONFIRMATION/college-overview-info/college-overview-sibling-info/CollegeOverviewSiblingInfo";
import CollegeOverviewOrientInfo from "../../../components/COLLEGE-SALE-CONFIRMATION/college-overview-info/college-overview-orientation-info/CollegeOverviewOrientInfo";
import CollegeOverviewAddressInfo from "../../../components/COLLEGE-SALE-CONFIRMATION/college-overview-info/college-overview-address-info/CollegeOverviewAddressInfo";
import CollegeOverviewConceInfo from "../../../components/COLLEGE-SALE-CONFIRMATION/college-overview-info/college-overview-concession-info/CollegeOverviewConceInfo";
import CollegeOverviewConWrtAppl from "../../../components/COLLEGE-SALE-CONFIRMATION/college-overview-info/college-overview-con-wrtn-appl/CollegeOverviewConWrtAppl";
import ApplicationSaleAndConfTopSec from "../../../widgets/ApplicationSaleAndConTopSection/ApplicationSaleAndConfTopSec";
import Button from "../../../widgets/Button/Button";
import styles from "./CollegeOverviewContainer.module.css";
import EditIcon from "../../../assets/school-sale-conf-assets/EditIcon";
import ButtonRightArrow from "../../../assets/school-sale-conf-assets/ButtonRightArrow";
const CollegeOverviewContainer = ({ onNext, onEdit }) => {
  return (
    <div className={styles.container}>
      <ApplicationSaleAndConfTopSec step={1} title="Application Confirmation" />
      <div className={styles.overviewContainer}>
        <CollegeOverviewPersonalInfo />
        <CollegeOverviewParentInfo />
        <CollegeOverviewSiblingInfo />
        <CollegeOverviewOrientInfo />
        <CollegeOverviewAddressInfo />
        <CollegeOverviewConceInfo />
        <CollegeOverviewConWrtAppl />
      </div>
      {/* Bottom Action Buttons */}
      <div className={styles.bottomActions}>
        <Button
          buttonname="Edit"
          variant="secondary"
          onClick={onEdit}
          lefticon={<EditIcon />}
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

export default CollegeOverviewContainer;
