import React, { useState } from "react";
import styles from "./SchoolPaymentPopup.module.css";
import SchoolPaymentPopHeader from "../../../components/SCHOOL-SALE-CONFIRMATION/school-payment-popup/school-payment-popup-headerpart/SchoolPaymentPopHeader";
import SchoolPaymentPopupNavTabs from "../../../components/SCHOOL-SALE-CONFIRMATION/school-payment-popup/school-payment-popup-navtabs/SchoolPaymentPopupNavTabs";
import SchoolPaymentCashForms from "../../../components/SCHOOL-SALE-CONFIRMATION/school-payment-popup/school-payment-popup-formspart/SchoolPaymentCashForms";
import DDSection from "../../../components/SCHOOL-SALE-CONFIRMATION/school-payment-popup/school-payment-popup-formspart/SchoolPayementDDforms";
import ChequeSection from "../../../components/SCHOOL-SALE-CONFIRMATION/school-payment-popup/school-payment-popup-formspart/SchoolPaymentCheque";
import SchoolPaymentCredDebitForms from "../../../components/SCHOOL-SALE-CONFIRMATION/school-payment-popup/school-payment-popup-formspart/SchoolPaymentCredDebitForms";
import Button from "../../../widgets/Button/Button";



const SchoolPaymentPopup = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState("cash");
  const [formData, setFormData] = useState({});

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFinishSale = () => {
    console.log("Finish Sale clicked with data:", formData);
    // Add your finish sale logic here
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        
        <div className={styles.modalContent}>
          <SchoolPaymentPopHeader step={3} onClose={onClose} />

          <SchoolPaymentPopupNavTabs onChange={handleTabChange} />

          {activeTab === "cash" && (
            <SchoolPaymentCashForms formData={formData} onChange={handleFormChange} />
          )}
          
          {activeTab === "dd" && (
            <DDSection formData={formData} onChange={handleFormChange} />
          )}

          {activeTab === "cheque" && (
            <ChequeSection formData={formData} onChange={handleFormChange} />
          )}

          {activeTab === "card" && (
            <SchoolPaymentCredDebitForms formData={formData} onChange={handleFormChange} />
          )}
        </div>

        <div className={styles.footer}>
          <Button
            buttonname="Finish Sale & Confirmation"
            righticon={
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            }
            variant="primary"
            onClick={handleFinishSale}
          />
        </div>

      </div>
    </div>
  );
};

export default SchoolPaymentPopup;
