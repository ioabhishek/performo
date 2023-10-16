import { useState, useEffect } from 'react';

const useButtonSelection = () => {
   const [selectedButtons, setSelectedButtons] = useState([]);
   const [savedData, setSavedData] = useState([]);

   useEffect(() => {
      const savedDataString = localStorage.getItem("selectedButtonsData");
      if (savedDataString) {
         const parsedData = JSON.parse(savedDataString);
         setSavedData(parsedData);
      }
   }, []);

   useEffect(() => {
      if (savedData.length > 0 && selectedButtons.length === 0) {
         setSelectedButtons(savedData);
      }
   }, [savedData]);

   const handleButtonSelect = (pubname) => {
      if (selectedButtons.includes(pubname)) {
         setSelectedButtons(selectedButtons.filter(id => id !== pubname));
      } else if (selectedButtons.length < 4) {
         setSelectedButtons([...selectedButtons, pubname]);
      }
   };

   return [selectedButtons, handleButtonSelect];
}

export default useButtonSelection;

// [
//    {
//       category: "India",
//       publishers: ["TOI", "HT", "CNBC", "NDTV"]
//    },
//    {
//       category: "Sports",
//       publishers: ["TOI", "HT", "CNBC", "NDTV"]
//    }
// ]
