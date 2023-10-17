import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { UPREFS, UPREFE } from "@/utils/constants";

const useButtonSelection = () => {
   const [selectedButtons, setSelectedButtons] = useState([]);
   const [savedData, setSavedData] = useState([]);

   const pathname = usePathname();
   const match = pathname.match(/\/category\/(.+)/);

   useEffect(() => {
      const fetchPref = async () => {
         try {
            const data = await fetch(UPREFS + match[1] + "&userid=" + 1 + UPREFE);
            if (data.ok) {
               const json = await data.json();
   
               // Create an object to track encountered user IDs
               const encounteredUserIds = {};
   
               // Extract the publisher_name values for "user_id":"1" encountered first
               const publisherNames = json.map(item => {
                  if (item.user_id === "1" && !encounteredUserIds[item.user_id]) {
                     encounteredUserIds[item.user_id] = true;
                     // Split the comma-separated values into an array
                     return item.publisher_name.split(',') //.map(name => name.trim());
                  }
                  return null;
               }).filter(Boolean); // Remove null values from the array
   
               // Flatten the array of arrays to get a single array of publisher names
               const flattenedPublisherNames = [].concat(...publisherNames);
   
               setSavedData(flattenedPublisherNames);
            } else {
               console.error("Failed to fetch data");
            }
         } catch (error) {
            console.error("Error fetching data:", error);
         }
      }
   
      fetchPref();
   }, []);
   
   // console.log(savedData)

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
