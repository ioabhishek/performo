"use client";
import React, {useState, useEffect} from "react";
import SelectStrip from "@/components/selectStrip/SelectStrip";
import CompareGrid from "@/components/compareGrid/CompareGrid";
import NavbarMain from "@/components/newNavbar/NavbarMain";
import useButtonSelection from "@/hooks/useButtonSelection";

const Page = () => {
   const [selectedButtons, handleButtonSelect] = useButtonSelection();
   const [savedData, setSavedData] = useState([]);

   useEffect(() => {
      const savedDataString = localStorage.getItem("selectedButtonsData");
      if (savedDataString) {
         const parsedData = JSON.parse(savedDataString);
         setSavedData(parsedData);
      }
   }, []);

   

   return (
      <>
         <div className="main_content">
            <div className="main_wrap">
               <NavbarMain />
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
            </div>
         </div>
      </>
   );
};

export default Page;
