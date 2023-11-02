import React, { useState, useEffect } from "react";
import styles from "./selectStrip.module.css";
import SelectButton from "@/components/button/SelectButton";

const SelectButtons = ({
   selectedButtons,
   handleButtonSelect,
   savedData,
   setSavedData,
}) => {
   const [pubList, setPubList] = useState([]);

   useEffect(() => {
      const fetchPubs = async () => {
         try {
            const data = await fetch('https://performo.in/api/get_publisher.php', {
               method: 'POST',
               headers: {
                     Authorization: 'Bearer 0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
               },
            });
            const json = await data.json();
            setPubList(json);
         } catch (error) {
            // console.error('Error fetching publishers:', error);
         }
      };
   
      fetchPubs();
   }, []);
   

   const renderMenuItems = () => {
      return pubList.map((publisher) => {
         return (
            <SelectButton
               key={publisher.publisher_name}
               pubname={publisher.publisher_name}
               selected={
                  selectedButtons.includes(publisher.publisher_name) ||
                  savedData.includes(publisher.publisher_name)
               }
               onSelect={() => handleButtonSelect(publisher.publisher_name)}
               setSavedData={setSavedData}
            />
         );
      });
   };

   return <div className={styles.tab_strip}>{renderMenuItems()}</div>;
};

export default SelectButtons;
