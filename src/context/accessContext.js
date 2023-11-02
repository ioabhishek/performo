'use client'
import { createContext, useContext, useState } from "react";

const AccessContext = createContext();

export const useAccess = () => {
  return useContext(AccessContext);
};

export const AccessProvider = ({ children }) => {
   const [accessStatus, setAccessStatus] = useState("checking");

   const checkAccess = async (userEmail) => {
      try {
         const checkResponse = await fetch('https://performo.in/api/access.php', {
            method: 'POST',
            headers: {
               Authorization: 'Bearer 0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
            },
            body: new URLSearchParams({email: userEmail})
         });
         const checkData = await checkResponse.json();

         if (checkData.subscriber === "true") {  
            setAccessStatus("authenticated");
         } else {
            setAccessStatus("unauthenticated");
         }
      } catch (error) {
         console.error("Error checking user status:", error);
         setAccessStatus("error");
      }
   };

   return (
      <AccessContext.Provider value={{ accessStatus, checkAccess }}>
         {children}
      </AccessContext.Provider>
   );
};
