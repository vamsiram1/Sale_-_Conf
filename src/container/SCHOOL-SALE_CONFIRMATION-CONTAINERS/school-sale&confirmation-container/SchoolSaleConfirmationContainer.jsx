import React, { useState } from 'react'
import SchoolSaleOverviewCont from "../school-sale-overview-container/SchoolSaleOverviewCont";
import SchoolSaleConfFormsCont from "../school-sale&conf-forms-container/SchoolSaleConfFormsCont";
import PaymentPopupContainer from "../scool-payment-popup-container/PaymentPopupContainer";
import { useAdmissionSaleData } from "../../../hooks/college-apis/CollegeOverviewApis";

const SchoolSaleConfirmationContainer = () => {
  const [currentStep, setCurrentStep] = useState(1); // 1 = Overview, 2 = Forms
  const [showPaymentPopup, setShowPaymentPopup] = useState(false);

  // Fetch data once at parent level
  const { data: detailsObject } = useAdmissionSaleData('2815502');

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
          <SchoolSaleOverviewCont 
            onNext={handleNext}
            onEdit={handleEdit}
            detailsObject={detailsObject}
          />
        )}
        
        {currentStep === 2 && (
          <SchoolSaleConfFormsCont 
            onBack={handleBack}
            onProceedToPayment={handleProceedToPayment}
            detailsObject={detailsObject}
          />
        )}
      </div>

      {showPaymentPopup && (
        <PaymentPopupContainer onClose={handleClosePayment} />
      )}
    </div>
  )
}

export default SchoolSaleConfirmationContainer