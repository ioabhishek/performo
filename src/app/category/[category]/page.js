"use client";
import React, {useState, useEffect} from "react";
import SelectStrip from "@/components/selectStrip/SelectStrip";
import CompareGrid from "@/components/compareGrid/CompareGrid";
import useButtonSelection from "@/hooks/useButtonSelection";
import { UPREFS } from "@/utils/constants";
import { redirect, usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react'
import { useAccess } from '@/context/accessContext';

const Page = () => {
   const [selectedButtons, handleButtonSelect] = useButtonSelection();
   const [savedData, setSavedData] = useState([]);
   const pathname = usePathname();
   const match = pathname.match(/\/category\/(.+)/);
   const session = useSession();
   const { accessStatus, checkAccess } = useAccess();

   useEffect(() => {
      if (session.status === "authenticated" && accessStatus === "checking") {
         const userEmail = session.data.user.email;
         checkAccess(userEmail);
      }
   }, [session, accessStatus, checkAccess]);

   useEffect(() => {
      const fetchPref = async () => {
         try {
            const data = await fetch(`${UPREFS}${match[1]}&userid=1`);
            if (!data.ok) {
               throw new Error(`Failed to fetch data. Status: ${data.status}`);
            }
            const json = await data.json();
            if (Array.isArray(json) && json.length === 0) {
               setSavedData([]);
            } else {
               setSavedData(json[0].publisher_name.split(','));
            }
         } catch (error) {
            console.error("An error occurred:", error);
         }
      };
      fetchPref();
   }, []);

   if (accessStatus === "authenticated"){
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
   } else if (accessStatus === "unauthenticated"){
      redirect('/access')
   } else if (session.status === "unauthenticated") {
      redirect('/login')
   }
};

export default Page;