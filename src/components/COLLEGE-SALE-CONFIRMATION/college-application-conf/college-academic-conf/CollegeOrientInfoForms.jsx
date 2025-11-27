import React, { useState, useEffect } from "react";
import Inputbox from "../../../../widgets/Inputbox/InputBox";
import Dropdown from "../../../../widgets/Dropdown/Dropdown";
import styles from "./CollegeOrientInfoForms.module.css";
import { 
  useCities, 
  useCampusesByCity, 
  useClassesByCampus, 
  useOrientationsByClassAndCampus,
  useStudentTypesByOrientationAndCampus,
  useOrientationFeeDetails 
} from "../../../../hooks/college-apis/form-apis/OrientationInfoJs";

const CollegeAcademicConfForms = () => {
  // State to store selected IDs
  const [selectedCityId, setSelectedCityId] = useState(null);
  const [selectedCampusId, setSelectedCampusId] = useState(null);
  const [selectedClassId, setSelectedClassId] = useState(null);
  const [selectedOrientationId, setSelectedOrientationId] = useState(null);

  // State to store selected values for display in input boxes
  const [selectedCityName, setSelectedCityName] = useState("");
  const [selectedBranchName, setSelectedBranchName] = useState("");
  const [selectedClassName, setSelectedClassName] = useState("");
  const [selectedCourseName, setSelectedCourseName] = useState("");
  const [selectedStudentType, setSelectedStudentType] = useState("");

  // State to store course details (auto-populated from API)
  const [courseStartDate, setCourseStartDate] = useState("");
  const [courseEndDate, setCourseEndDate] = useState("");
  const [courseFee, setCourseFee] = useState("");

  // Fetch cities from API
  const { cities, loading: citiesLoading, error: citiesError } = useCities();
  
  // Fetch campuses/branches based on selected city ID
  const { campuses, loading: campusesLoading, error: campusesError } = useCampusesByCity(selectedCityId);
  
  // Fetch classes based on selected campus ID
  const { classes, loading: classesLoading, error: classesError } = useClassesByCampus(selectedCampusId);
  
  // Fetch orientations based on selected class ID and campus ID
  const { orientations, loading: orientationsLoading, error: orientationsError } = useOrientationsByClassAndCampus(selectedClassId, selectedCampusId);
  
  // Fetch student types based on selected orientation ID and campus ID
  const { studentTypes, loading: studentTypesLoading, error: studentTypesError } = useStudentTypesByOrientationAndCampus(selectedOrientationId, selectedCampusId);

  // Fetch orientation fee details based on selected orientation ID
  const { feeDetails, loading: feeDetailsLoading, error: feeDetailsError } = useOrientationFeeDetails(selectedOrientationId);

  // Auto-populate course dates and fee when feeDetails are fetched
  useEffect(() => {
    if (feeDetails) {
      console.log('=== Fee Details received ===');
      console.log('Full feeDetails object:', feeDetails);
      console.log('feeDetails keys:', Object.keys(feeDetails));
      
      // Helper function to format date to YYYY-MM-DD for input type="date"
      const formatDate = (dateValue) => {
        if (!dateValue) return "";
        
        // If it's already in YYYY-MM-DD format, return as is
        if (typeof dateValue === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(dateValue)) {
          return dateValue;
        }
        
        // Try to parse and format the date
        try {
          const date = new Date(dateValue);
          if (!isNaN(date.getTime())) {
            const year = date.getFullYear();
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const day = String(date.getDate()).padStart(2, '0');
            return `${year}-${month}-${day}`;
          }
        } catch (error) {
          console.error('Error formatting date:', error);
        }
        
        return "";
      };
      
      // Extract and set course start date - try multiple possible field names
      const rawStartDate = feeDetails.courseStartDate || feeDetails.startDate || feeDetails.orientationStartDate 
                          || feeDetails.courseStartedDate || feeDetails.start_date || feeDetails.fromDate || "";
      const startDate = formatDate(rawStartDate);
      console.log('Raw Start Date:', rawStartDate);
      console.log('Formatted Start Date:', startDate);
      setCourseStartDate(startDate);
      
      // Extract and set course end date - try multiple possible field names
      const rawEndDate = feeDetails.courseEndDate || feeDetails.endDate || feeDetails.orientationEndDate 
                        || feeDetails.courseEndedDate || feeDetails.end_date || feeDetails.toDate || "";
      const endDate = formatDate(rawEndDate);
      console.log('Raw End Date:', rawEndDate);
      console.log('Formatted End Date:', endDate);
      setCourseEndDate(endDate);
      
      // Extract and set course fee
      const fee = feeDetails.courseFee || feeDetails.fee || feeDetails.orientationFee || feeDetails.totalFee 
                 || feeDetails.amount || feeDetails.feeAmount || "";
      console.log('Course Fee:', fee);
      setCourseFee(fee);
      
      console.log('=== Auto-populated values ===', { startDate, endDate, fee });
    } else {
      console.log('No fee details - resetting fields');
      // Reset fields when no orientation is selected
      setCourseStartDate("");
      setCourseEndDate("");
      setCourseFee("");
    }
  }, [feeDetails]);

  console.log('Selected City ID:', selectedCityId);
  console.log('Selected Campus ID:', selectedCampusId);
  console.log('Selected Class ID:', selectedClassId);
  console.log('Selected Orientation ID:', selectedOrientationId);
  console.log('Campuses Loading:', campusesLoading);
  console.log('Campuses Data:', campuses);
  console.log('Classes Loading:', classesLoading);
  console.log('Classes Data:', classes);
  console.log('Orientations Loading:', orientationsLoading);
  console.log('Orientations Data:', orientations);
  console.log('Student Types Loading:', studentTypesLoading);
  console.log('Student Types Data:', studentTypes);

  // Format cities for dropdown - adjust based on your API response structure
  const cityOptions = cities?.map(city => city.cityName || city.name || city) || [];
  
  // Format campuses for dropdown - adjust based on your API response structure
  const branchOptions = campuses?.map(campus => campus.campusName || campus.branchName || campus.name || campus) || [];
  
  // Format classes for dropdown - adjust based on your API response structure
  const classOptions = classes?.map(cls => cls.className || cls.name || cls) || [];
  
  // Format orientations for dropdown - adjust based on your API response structure
  const orientationOptions = orientations?.map(orientation => orientation.orientationName || orientation.courseName || orientation.name || orientation) || [];
  
  // Format student types for dropdown - handle both array and string responses
  const studentTypeOptions = Array.isArray(studentTypes) 
    ? studentTypes.map(type => {
        // Handle if type is a string
        if (typeof type === 'string') return type;
        // Handle if type is an object
        return type.studentTypeName || type.typeName || type.name || type;
      })
    : [];
  
  console.log('Class Options:', classOptions);
  console.log('Orientation Options:', orientationOptions);
  console.log('Student Type Options:', studentTypeOptions);

  // Handle city selection
  const handleCityChange = (event) => {
    // Extract the selected city value from the event
    const selectedCity = event?.target?.value || event;
    console.log('Selected City:', selectedCity);
    
    // Find the city object that matches the selected city name
    const selectedCityObj = cities?.find(
      city => (city.cityName || city.name || city) === selectedCity
    );
    
    console.log('Selected City Object:', selectedCityObj);
    
    // Set the city ID and name
    const cityId = selectedCityObj?.cityId || selectedCityObj?.id;
    console.log('Selected City ID:', cityId);
    setSelectedCityId(cityId);
    setSelectedCityName(selectedCity);
    
    // Reset campus and class selections when city changes
    setSelectedCampusId(null);
    setSelectedBranchName("");
    setSelectedClassId(null);
    setSelectedClassName("");
    setSelectedOrientationId(null);
    setSelectedCourseName("");
    setSelectedStudentType("");
  };

  // Handle branch selection
  const handleBranchChange = (event) => {
    // Extract the selected branch value from the event
    const selectedBranch = event?.target?.value || event;
    console.log('Selected Branch:', selectedBranch);
    
    // Find the campus object that matches the selected branch name
    const selectedCampus = campuses?.find(
      campus => (campus.campusName || campus.branchName || campus.name || campus) === selectedBranch
    );
    
    console.log('Selected Campus Object:', selectedCampus);
    
    // Set the campus ID and name
    const campusId = selectedCampus?.campusId || selectedCampus?.id || selectedCampus?.branchId;
    console.log('Selected Campus ID:', campusId);
    setSelectedCampusId(campusId);
    setSelectedBranchName(selectedBranch);
    
    // Reset class selection when campus changes
    setSelectedClassId(null);
    setSelectedClassName("");
    setSelectedOrientationId(null);
    setSelectedCourseName("");
    setSelectedStudentType("");
  };

  // Handle class selection
  const handleClassChange = (event) => {
    // Extract the selected class value from the event
    const selectedClass = event?.target?.value || event;
    console.log('Selected Class:', selectedClass);
    
    // Find the class object that matches the selected class name
    const selectedClassObj = classes?.find(
      cls => (cls.className || cls.name || cls) === selectedClass
    );
    
    console.log('Selected Class Object:', selectedClassObj);
    
    // Set the class ID and name
    const classId = selectedClassObj?.classId || selectedClassObj?.id;
    console.log('Selected Class ID:', classId);
    setSelectedClassId(classId);
    setSelectedClassName(selectedClass);
    
    // Reset orientation and student type when class changes
    setSelectedOrientationId(null);
    setSelectedCourseName("");
    setSelectedStudentType("");
    // Reset course details
    setCourseStartDate("");
    setCourseEndDate("");
    setCourseFee("");
  };

  // Handle orientation/course selection
  const handleOrientationChange = (event) => {
    // Extract the selected orientation value from the event
    const selectedOrientation = event?.target?.value || event;
    console.log('=== Orientation Change Handler ===');
    console.log('Selected Orientation/Course:', selectedOrientation);
    
    // Find the orientation object that matches the selected orientation name
    const selectedOrientationObj = orientations?.find(
      orientation => (orientation.orientationName || orientation.courseName || orientation.name || orientation) === selectedOrientation
    );
    
    console.log('Selected Orientation Object:', selectedOrientationObj);
    console.log('Orientations array:', orientations);
    
    // Set the orientation ID and name
    const orientationId = selectedOrientationObj?.orientationId || selectedOrientationObj?.id || selectedOrientationObj?.courseId;
    console.log('Selected Orientation ID:', orientationId);
    console.log('Current Campus ID (for student types):', selectedCampusId);
    setSelectedOrientationId(orientationId);
    setSelectedCourseName(selectedOrientation);
    
    // Reset student type when course changes
    setSelectedStudentType("");
  };

  // Handle student type selection
  const handleStudentTypeChange = (event) => {
    const selectedType = event?.target?.value || event;
    console.log('Selected Student Type:', selectedType);
    setSelectedStudentType(selectedType);
  };

  return (
    <div className={styles.section}>
      {/* Title */}
      <div className={styles.headerRow}>
        <span className={styles.title}>Orientation Information</span>
        <div className={styles.line}></div>
      </div>

      <div className={styles.grid}>
        {/* Row 1: Academic Year, City, Branch */}
        <Inputbox
          label="Academic Year"
          name="academicYear"
          placeholder="Academic Year"
        />

        <Dropdown
          dropdownname="City"
          name="city"
          results={citiesLoading ? ["Loading..."] : cityOptions.length > 0 ? cityOptions : ["No cities available"]}
          onChange={handleCityChange}
          value={selectedCityName}
        />

        <Dropdown
          dropdownname="Branch"
          name="branch"
          results={
            !selectedCityId 
              ? ["Select a city first"] 
              : campusesLoading 
                ? ["Loading..."] 
                : branchOptions.length > 0 
                  ? branchOptions 
                  : ["No branches available"]
          }
          onChange={handleBranchChange}
          value={selectedBranchName}
        />

        {/* Row 2: Joining Class, Course Name, Student Type */}
        <Dropdown
          dropdownname="Joining Class"
          name="joiningClass"
          results={
            !selectedCampusId 
              ? ["Select a branch first"] 
              : classesLoading 
                ? ["Loading..."] 
                : classOptions.length > 0 
                  ? classOptions 
                  : ["No classes available"]
          }
          onChange={handleClassChange}
          value={selectedClassName}
        />

        <Dropdown
          dropdownname="Course Name"
          name="courseName"
          results={
            !selectedClassId || !selectedCampusId
              ? ["Select a branch and class first"] 
              : orientationsLoading 
                ? ["Loading..."] 
                : orientationOptions.length > 0 
                  ? orientationOptions 
                  : ["No courses available"]
          }
          onChange={handleOrientationChange}
          value={selectedCourseName}
        />

        <Dropdown
          dropdownname="Student Type"
          name="studentType"
          results={
            !selectedOrientationId || !selectedCampusId
              ? ["Select a branch and course first"] 
              : studentTypesLoading 
                ? ["Loading..."] 
                : studentTypeOptions.length > 0 
                  ? studentTypeOptions 
                  : ["No student types available"]
          }
          onChange={handleStudentTypeChange}
          value={selectedStudentType}
        />

        {/* Row 3: Course Start Date, Course End Date, Course Fee */}
        <Inputbox
          label="Course Start Date"
          name="courseStartDate"
          placeholder="Course Start Date"
          type="date"
          value={courseStartDate}
          readOnly
        />

        <Inputbox
          label="Course End Date"
          name="courseEndDate"
          placeholder="Course End Date"
          type="date"
          value={courseEndDate}
          readOnly
        />

        <Inputbox
          label="Course Fee"
          name="courseFee"
          placeholder="Course Fee"
          value={courseFee}
          readOnly
        />
      </div>
    </div>
  );
};

export default CollegeAcademicConfForms;
