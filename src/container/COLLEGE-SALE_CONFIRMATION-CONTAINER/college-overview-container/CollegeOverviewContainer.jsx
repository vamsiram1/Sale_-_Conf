import React from 'react';
import CollegeOverviewPersonalInfo from '../../../components/COLLEGE-SALE-CONFIRMATION/college-overview-info/college-overview-personal-info/CollegeOverviewPersonalInfo';
import CollegeOverviewParentInfo from '../../../components/COLLEGE-SALE-CONFIRMATION/college-overview-info/college-overview-parent-info/CollegeOverviewParentInfo';
import CollegeOverviewSiblingInfo from '../../../components/COLLEGE-SALE-CONFIRMATION/college-overview-info/college-overview-sibling-info/CollegeOverviewSiblingInfo';
import CollegeOverviewOrientInfo from '../../../components/COLLEGE-SALE-CONFIRMATION/college-overview-info/college-overview-orientation-info/CollegeOverviewOrientInfo';
import CollegeOverviewAddressInfo from '../../../components/COLLEGE-SALE-CONFIRMATION/college-overview-info/college-overview-address-info/CollegeOverviewAddressInfo';
import CollegeOverviewConceInfo from '../../../components/COLLEGE-SALE-CONFIRMATION/college-overview-info/college-overview-concession-info/CollegeOverviewConceInfo';
import CollegeOverviewConWrtAppl from '../../../components/COLLEGE-SALE-CONFIRMATION/college-overview-info/college-overview-con-wrtn-appl/CollegeOverviewConWrtAppl';
import ApplicationSaleAndConfTopSec from '../../../widgets/ApplicationSaleAndConTopSection/ApplicationSaleAndConfTopSec';
import Button from '../../../widgets/Button/Button';
import styles from './CollegeOverviewContainer.module.css';

const CollegeOverviewContainer = ({ onNext, onEdit }) => {
  return (
    <div>
      <ApplicationSaleAndConfTopSec step={1} title="Application Confirmation"/>
      
      <CollegeOverviewPersonalInfo />
      <CollegeOverviewParentInfo />
      <CollegeOverviewSiblingInfo/>
      <CollegeOverviewOrientInfo />
      <CollegeOverviewAddressInfo />
      <CollegeOverviewConceInfo />
      <CollegeOverviewConWrtAppl/>


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
  )
}

export default CollegeOverviewContainer
