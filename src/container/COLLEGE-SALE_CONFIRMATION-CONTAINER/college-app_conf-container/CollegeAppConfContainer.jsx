import React from 'react';
import CollegeAppliConf from '../../../components/COLLEGE-SALE-CONFIRMATION/college-application-conf/CollegeAppliConf';
import ApplicationSaleAndConfTopSec from '../../../widgets/ApplicationSaleAndConTopSection/ApplicationSaleAndConfTopSec';
import Button from '../../../widgets/Button/Button';
import styles from './CollegeAppConfContainer.module.css';

const CollegeAppConfContainer = ({ onBack, onProceedToPayment }) => {
  return (
    <div className={styles.container}>
      <ApplicationSaleAndConfTopSec step={2} onBack={onBack}  title="Application Confirmation"/>
      
      <div className={styles.contentContainer}>
        <CollegeAppliConf />

        {/* Bottom Action Buttons */}
        <div className={styles.bottomActions}>
         
          <Button
            buttonname="Proceed to payment"
            variant="primary"
            onClick={onProceedToPayment}
          />
        </div>
      </div>
    </div>
  );
};

export default CollegeAppConfContainer;
