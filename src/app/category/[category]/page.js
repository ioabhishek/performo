"use client";
import React, {useState, useEffect} from "react";
import SelectStrip from "@/components/selectStrip/SelectStrip";
import CompareGrid from "@/components/compareGrid/CompareGrid";
import useButtonSelection from "@/hooks/useButtonSelection";
import { usePathname } from 'next/navigation';
import { UPREFS } from "@/utils/constants";

const Page = () => {
   const [selectedButtons, handleButtonSelect] = useButtonSelection();
   const [savedData, setSavedData] = useState([]);

   const pathname = usePathname();
   const match = pathname.match(/\/category\/(.+)/);

   useEffect(() => {
      const fetchPref = async () => {
         try {
            const data = await fetch(`${UPREFS}${match[1]}&userid=1`);
            if (data.ok) {
               const json = await data.json();
   
               // Create an object to track encountered user IDs
               const encounteredUserIds = {};
   
               // Extract the publisher_name values for "user_id":"1" encountered first
               const publisherNames = json.map(item => {
                  if (item.user_id === "1" && !encounteredUserIds[item.user_id]) {
                     encounteredUserIds[item.user_id] = true;
                     // Split the comma-separated values into an array
                     return item.publisher_name.split(',')
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
   });

   return (
      <>
         <SelectStrip
            selectedButtons={selectedButtons}
            handleButtonSelect={handleButtonSelect}
            savedData={savedData}
            setSavedData={setSavedData}
         />
         <CompareGrid
            selectedButtons={selectedButtons}
            savedData={savedData}
         />
      </>
   );
};

export default Page;
