import React from 'react'
import PaymentPopup from '../../../widgets/PaymentPopup/whole-payment-popup/PaymentPopup';

const CollegePaymentPopup = ({ onClose }) => {
  return <PaymentPopup onClose={onClose} title="Complete Application Confirmation" />;
}

export default CollegePaymentPopup
