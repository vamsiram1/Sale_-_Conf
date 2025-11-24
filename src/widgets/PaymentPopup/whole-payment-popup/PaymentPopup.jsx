import React, { useState } from "react";
import styles from "./PaymentPopup.module.css";
import PopupHeader from "../popup-headerpart/PopupHeader";
import PopupNavTabs from "../popup-navtabs/PopupNavTabs";
import CashForms from "../popup-formspart/CashForms";
import DDForms from "../popup-formspart/DDForms";
import ChequeForms from "../popup-formspart/ChequeForms";
import CardForms from "../popup-formspart/CardForms";
import Button from "../../Button/Button";



const PaymentPopup = ({ onClose,title }) => {
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
          <PopupHeader step={3} onClose={onClose} title={title} />

          <PopupNavTabs onChange={handleTabChange} />

          {activeTab === "cash" && (
            <CashForms formData={formData} onChange={handleFormChange} />
          )}
          
          {activeTab === "dd" && (
            <DDForms formData={formData} onChange={handleFormChange} />
          )}

          {activeTab === "cheque" && (
            <ChequeForms formData={formData} onChange={handleFormChange} />
          )}

          {activeTab === "card" && (
            <CardForms formData={formData} onChange={handleFormChange} />
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

export default PaymentPopup;
