import React, { useState } from "react";
import CollegeOverviewContainer from "../college-overview-container/CollegeOverviewContainer";
import CollegeAppConfContainer from "../college-app_conf-container/CollegeAppConfContainer";
import CollegePaymentPopup from "../college-payment-popup-container/CollegePaymentPopup";

const CollegeSaleConfirmationContainer = () => {
  const [currentStep, setCurrentStep] = useState(1); // 1 = Overview, 2 = Application Confirmation
  const [showPaymentPopup, setShowPaymentPopup] = useState(false);

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
          <CollegeOverviewContainer onNext={handleNext} onEdit={handleEdit} />
        )}

        {currentStep === 2 && (
          <CollegeAppConfContainer
            onBack={handleBack}
            onProceedToPayment={handleProceedToPayment}
          />
        )}
      </div>

      {showPaymentPopup && <CollegePaymentPopup onClose={handleClosePayment} />}
    </div>
  );
};

export default CollegeSaleConfirmationContainer;
