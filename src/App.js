import React from "react";
import "./App.css";

import SchoolSaleConfirmationContainer from "./container/SCHOOL-SALE_CONFIRMATION-CONTAINERS/school-sale&confirmation-container/SchoolSaleConfirmationContainer";
import CollegeOverviewContainer from "./container/COLLEGE-SALE_CONFIRMATION-CONTAINER/college-overview-container/CollegeOverviewContainer";
function App() {
  return (
    <div className="whole_container">
      <div className="header"></div>

      <aside></aside>

      <div className="main_content">
        {/* <SchoolSaleConfirmationContainer /> */}
        <CollegeOverviewContainer/>
      </div>
    </div>
  );
}

export default App;
