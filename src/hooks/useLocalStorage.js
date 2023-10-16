import { useEffect, useState } from 'react';

// Custom hook for retrieving and parsing an array from local storage
const useLocalStorage = (key) => {
   const [savedData, setSavedData] = useState([]);

   useEffect(() => {
      const savedDataString = localStorage.getItem(key);
      if (savedDataString) {
         const parsedData = JSON.parse(savedDataString);
         setSavedData(parsedData);
      }
   }, [key]);

  return [savedData, setSavedData];
}

export default useLocalStorage