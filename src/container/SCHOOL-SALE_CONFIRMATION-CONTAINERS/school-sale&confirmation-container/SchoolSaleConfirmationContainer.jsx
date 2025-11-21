import React, { useState } from 'react'
import SchoolSaleOverviewCont from "../school-sale-overview-container/SchoolSaleOverviewCont";
import SchoolSaleConfFormsCont from "../school-sale&conf-forms-container/SchoolSaleConfFormsCont";
import SchoolPaymentPopup from "../school-payment-popup-container/SchoolPaymentPopup";

const SchoolSaleConfirmationContainer = () => {

  const [currentStep, setCurrentStep] = useState(1); // 1 = Overview, 2 = Forms
  const [showPaymentPopup, setShowPaymentPopup] = useState(false);

  const handleNext = () => {
    setCurrentStep(2);
  };

  const handleEdit = () => {
    // Handle edit functionality
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
          <SchoolSaleOverviewCont 
            onNext={handleNext}
            onEdit={handleEdit}
          />
        )}
        
        {currentStep === 2 && (
          <SchoolSaleConfFormsCont 
            onBack={handleBack}
            onProceedToPayment={handleProceedToPayment}
          />
        )}
      </div>

      {showPaymentPopup && (
        <SchoolPaymentPopup onClose={handleClosePayment} />
      )}
    </div>
  )
}

export default SchoolSaleConfirmationContainer