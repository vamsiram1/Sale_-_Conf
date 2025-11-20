import React from "react";
import styles from "./PaymentSaleModal.module.css";

// import ModalHeader from "./components/ModalHeader";
// import PaymentModeTabs from "./components/PaymentModeTabs";
// import SaleInputSection from "./components/SaleInputSection";

const PaymentSaleModal = ({ onClose }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        
        {/* <ModalHeader step={2} onClose={onClose} />

        <PaymentModeTabs />

        <SaleInputSection /> */}

        <div className={styles.footer}>
          <button className={styles.finishBtn}>Finish Sale →</button>
        </div>

      </div>
    </div>
  );
};

export default PaymentSaleModal;
