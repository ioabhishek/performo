"use client";
import React, {useState, useEffect} from "react";
import SelectStrip from "@/components/selectStrip/SelectStrip";
import CompareGrid from "@/components/compareGrid/CompareGrid";
import NavbarMain from "@/components/newNavbar/NavbarMain";
import useButtonSelection from "@/hooks/useButtonSelection";
import { usePathname } from 'next/navigation';

const Page = () => {
   const [selectedButtons, handleButtonSelect] = useButtonSelection();
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
