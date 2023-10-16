import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const useButtonSelection = () => {
   const [selectedButtons, setSelectedButtons] = useState([]);
   const [savedData, setSavedData] = useState([]);

   const pathname = usePathname();
   const match = pathname.match(/\/category\/(.+)/);

   useEffect(() => {
      const savedDataString = localStorage.getItem("selectedButtons"+match[1]);
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
