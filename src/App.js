import React from "react";
import "./App.css";

import SchoolSaleConfirmationContainer from "./container/SCHOOL-SALE_CONFIRMATION-CONTAINERS/school-sale&confirmation-container/SchoolSaleConfirmationContainer";

function App() {
  return (
    <div className="whole_container">
      <div className="header"></div>

      <aside></aside>

      <div className="main_content">
        <SchoolSaleConfirmationContainer />
      </div>
    </div>
  );
}

export default App;
