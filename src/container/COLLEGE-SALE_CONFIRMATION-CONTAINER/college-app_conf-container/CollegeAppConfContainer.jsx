import React from 'react';
import CollegeAcademicConfForms from '../../../components/COLLEGE-SALE-CONFIRMATION/college-application-conf/college-academic-conf/CollegeAcademicConfForms';
import CollegeConceInfoForms from '../../../components/COLLEGE-SALE-CONFIRMATION/college-application-conf/college-conce-info-forms/CollegeConceInfoForms';
import ApplicationSaleAndConfTopSec from '../../../widgets/ApplicationSaleAndConTopSection/ApplicationSaleAndConfTopSec';
import Button from '../../../widgets/Button/Button';
import ButtonRightArrow from '../../../assets/school-sale-conf-assets/ButtonRightArrow';
import styles from './CollegeAppConfContainer.module.css';

const CollegeAppConfContainer = ({ onBack, onProceedToPayment }) => {
  return (
    <div className={styles.container}>
      <ApplicationSaleAndConfTopSec step={2} onBack={onBack}  title="Application Confirmation"/>
      
      <div className={styles.contentContainer}>
        <CollegeAcademicConfForms />
        <CollegeConceInfoForms />

        {/* Bottom Action Buttons */}
        <div className={styles.bottomActions}>
          <Button
            buttonname="Proceed to payment"
            righticon={<ButtonRightArrow />}
            variant="primary"
            width="220px"
            onClick={onProceedToPayment}
          />
        </div>
      </div>
    </div>
  );
};

export default CollegeAppConfContainer;
