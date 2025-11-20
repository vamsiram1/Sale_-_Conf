import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import SchoolSaleOverviewCont from "./container/school-sale-overview-container/SchoolSaleOverviewCont";
import SchoolSaleConfFormsCont from "./container/school-sale&conf-forms-container/SchoolSaleConfFormsCont";




function App() {
  const [currentStep, setCurrentStep] = useState(1); // 1 = Overview, 2 = Forms

  const handleNext = () => {
    setCurrentStep(2);
  };

  const handleEdit = () => {
    // Handle edit functionality
    console.log("Edit clicked");
  };

  const handleBack = () => {
    setCurrentStep(1);
  };

  return (
    <div className="whole_container">
      <div className="header"></div>

      <aside></aside>

      <div className="main_content">
        {currentStep === 1 && (
          <SchoolSaleOverviewCont 
            onNext={handleNext}
            onEdit={handleEdit}
          />
        )}
        
        {currentStep === 2 && (
          <SchoolSaleConfFormsCont 
            onBack={handleBack}
          />
        )}
      </div>
    </div>
  );
}

export default App;
