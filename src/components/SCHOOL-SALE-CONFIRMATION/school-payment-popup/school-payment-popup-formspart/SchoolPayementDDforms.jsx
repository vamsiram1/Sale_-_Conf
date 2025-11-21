import React from "react";
import Inputbox from "../../../../widgets/Inputbox/InputBox";
import Dropdown from "../../../../widgets/Dropdown/Dropdown";
import styles from "./SchoolPayementDDforms.module.css";

const SchoolPayementDDforms = ({ formData, onChange }) => {
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
          name="dd_paymentDate"
          placeholder="MM/DD/YYYY"
          value={formData.dd_paymentDate}
          onChange={onChange}
          type="date"
        />

        <Inputbox
          label="Amount *"
          name="dd_amount"
          placeholder="Enter Amount (numbers only)"
          value={formData.dd_amount}
          onChange={onChange}
          type="number"
        />
      </div>

      {/* ROW 2 */}
      <div className={styles.grid}>
        <Inputbox
          label="Pre Printed Receipt No *"
          name="dd_receiptNo"
          placeholder="Enter Pre Printed Receipt No"
          value={formData.dd_receiptNo}
          onChange={onChange}
        />

        <Inputbox
          label="DD Number *"
          name="dd_number"
          placeholder="Enter DD Number"
          value={formData.dd_number}
          onChange={onChange}
        />
      </div>

      {/* ROW 3 */}
      <div className={styles.grid}>
        <Inputbox
          label="DD Date *"
          name="dd_date"
          placeholder="MM/DD/YYYY"
          value={formData.dd_date}
          onChange={onChange}
          type="date"
        />

        <Dropdown
          dropdownname="Organisation Name *"
          name="dd_org"
          results={orgOptions}
          value={formData.dd_org}
          onChange={onChange}
        />
      </div>

      {/* ROW 4 */}
      <div className={styles.grid}>
        <Dropdown
          dropdownname="Bank Name *"
          name="dd_bank"
          results={bankOptions}
          value={formData.dd_bank}
          onChange={onChange}
        />

        <Dropdown
          dropdownname="Branch Name *"
          name="dd_branch"
          results={branchOptions}
          value={formData.dd_branch}
          onChange={onChange}
        />
      </div>

      {/* ROW 5 */}
      <div className={styles.grid}>
        <Inputbox
          label="IFSC Code *"
          name="dd_ifsc"
          placeholder="Enter IFSC Code"
          value={formData.dd_ifsc}
          onChange={onChange}
        />

        <Dropdown
          dropdownname="City Name *"
          name="dd_city"
          results={cityOptions}
          value={formData.dd_city}
          onChange={onChange}
        />
      </div>

      {/* ROW 6 */}
      <div className={styles.grid}>
        <Inputbox
          label="Remarks"
          name="dd_remarks"
          placeholder="Enter Remarks"
          value={formData.dd_remarks}
          onChange={onChange}
        />
      </div>

      
    </div>
  );
};

export default SchoolPayementDDforms;
