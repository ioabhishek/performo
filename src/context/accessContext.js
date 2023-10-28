'use client'
import { createContext, useContext, useState } from "react";

const AccessContext = createContext();

export const useAccess = () => {
  return useContext(AccessContext);
};

export const AccessProvider = ({ children }) => {
   const [accessStatus, setAccessStatus] = useState("checking"); // You can use "checking," "authenticated," or "unauthenticated"

   const checkAccess = async (userEmail) => {
      try {
         const checkResponse = await fetch("/api/check", {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: userEmail }),
         });
         const checkData = await checkResponse.json();

         if (checkData.result === "subscriber") {
            setAccessStatus("authenticated");
         } else {
            setAccessStatus("unauthenticated");
         }
      } catch (error) {
         console.error("Error checking user status:", error);
         setAccessStatus("error");
         // Handle errors if necessary
      }
   };

   return (
      <AccessContext.Provider value={{ accessStatus, checkAccess }}>
         {children}
      </AccessContext.Provider>
   );
};
