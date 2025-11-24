import React from "react";
import PaymentPopup from "../../../widgets/PaymentPopup/whole-payment-popup/PaymentPopup";

const SchoolPaymentPopup = ({ onClose }) => {
  return <PaymentPopup onClose={onClose} title="Complete Application Sale & Confirmation" />;
};

export default SchoolPaymentPopup;
