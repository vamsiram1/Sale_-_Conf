import React, { useState } from "react";
import CollegeOverviewContainer from "../college-overview-container/CollegeOverviewContainer";
import CollegeAppConfContainer from "../college-app_conf-container/CollegeAppConfContainer";
import CollegePaymentPopup from "../college-payment-popup-container/CollegePaymentPopup";
import { useAdmissionSaleData, useCollegeOverviewData } from "../../../hooks/college-apis/CollegeOverviewApis";

const CollegeSaleConfirmationContainer = () => {
  const [currentStep, setCurrentStep] = useState(1); // 1 = Overview, 2 = Application Confirmation
  const [showPaymentPopup, setShowPaymentPopup] = useState(false);

  // Fetch data once at parent level
  const { data: detailsObject } = useAdmissionSaleData("2815502");
  const { overviewData } = useCollegeOverviewData("2815502");

  const handleNext = () => {
    setCurrentStep(2);
  };

  const handleEdit = () => {
    console.log("Edit clicked");
  };

  const handleBack = () => {
    setCurrentStep(1);
  };

  const handleProceedToPayment = () => {
    setShowPaymentPopup(true);
  };

  const handleClosePayment = () => {
    setShowPaymentPopup(false);
  };

  return (
    <div>
      <div>
        {currentStep === 1 && (
          <CollegeOverviewContainer 
            onNext={handleNext} 
            onEdit={handleEdit}
            detailsObject={detailsObject}
            overviewData={overviewData}
          />
        )}

        {currentStep === 2 && (
          <CollegeAppConfContainer
            onBack={handleBack}
            onProceedToPayment={handleProceedToPayment}
            detailsObject={detailsObject}
          />
        )}
      </div>

      {showPaymentPopup && <CollegePaymentPopup onClose={handleClosePayment} />}
    </div>
  );
};

export default CollegeSaleConfirmationContainer;
