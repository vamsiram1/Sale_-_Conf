import React from "react";
import Inputbox from "../../../../widgets/Inputbox/InputBox";
import Dropdown from "../../../../widgets/Dropdown/Dropdown";
import styles from "./SchoolPaymentCheque.module.css";

const SchoolPaymentCheque = ({ formData, onChange }) => {
  const orgOptions = ["Org 1", "Org 2", "Org 3"];
  const bankOptions = ["HDFC Bank", "ICICI Bank", "SBI Bank", "Axis Bank"];
  const branchOptions = ["Jubilee Hills", "Madhapur", "Gachibowli"];
  const cityOptions = ["Hyderabad", "Bangalore", "Chennai"];

  return (
    <div className={styles.wrapper}>

      {/* ROW 1 */}
      <div className={styles.grid}>
        <Inputbox
          label="Payment Date *"
          name="cheque_paymentDate"
          placeholder="MM/DD/YYYY"
          value={formData.cheque_paymentDate}
          onChange={onChange}
          type="date"
        />

        <Inputbox
          label="Amount *"
          name="cheque_amount"
          placeholder="Enter Amount (numbers only)"
          value={formData.cheque_amount}
          onChange={onChange}
          type="number"
        />
      </div>

      {/* ROW 2 */}
      <div className={styles.grid}>
        <Inputbox
          label="Pre Printed Receipt No *"
          name="cheque_receiptNo"
          placeholder="Enter Pre Printed Receipt No"
          value={formData.cheque_receiptNo}
          onChange={onChange}
        />

        <Inputbox
          label="Cheque Number *"
          name="cheque_number"
          placeholder="Enter Cheque Number"
          value={formData.cheque_number}
          onChange={onChange}
        />
      </div>

      {/* ROW 3 */}
      <div className={styles.grid}>
        <Inputbox
          label="Cheque Date *"
          name="cheque_date"
          placeholder="MM/DD/YYYY"
          value={formData.cheque_date}
          onChange={onChange}
          type="date"
        />

        <Dropdown
          dropdownname="Organisation Name *"
          name="cheque_org"
          results={orgOptions}
          value={formData.cheque_org}
          onChange={onChange}
        />
      </div>

      {/* ROW 4 */}
      <div className={styles.grid}>
        <Dropdown
          dropdownname="Bank Name *"
          name="cheque_bank"
          results={bankOptions}
          value={formData.cheque_bank}
          onChange={onChange}
        />

        <Dropdown
          dropdownname="Branch Name *"
          name="cheque_branch"
          results={branchOptions}
          value={formData.cheque_branch}
          onChange={onChange}
        />
      </div>

      {/* ROW 5 */}
      <div className={styles.grid}>
        <Inputbox
          label="IFSC Code *"
          name="cheque_ifsc"
          placeholder="Enter IFSC Code"
          value={formData.cheque_ifsc}
          onChange={onChange}
        />

        <Dropdown
          dropdownname="City Name *"
          name="cheque_city"
          results={cityOptions}
          value={formData.cheque_city}
          onChange={onChange}
        />
      </div>

      {/* ROW 6 */}
      <div className={styles.grid}>
        <Inputbox
          label="Remarks"
          name="cheque_remarks"
          placeholder="Enter Remarks"
          value={formData.cheque_remarks}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default SchoolPaymentCheque;
