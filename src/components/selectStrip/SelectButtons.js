import React, { useState, useEffect } from 'react';
import styles from "./selectStrip.module.css";
import SelectButton from "@/components/button/SelectButton";
import { PUB_CATEGORY } from "../../utils/constants";

const SelectButtons = ({ selectedButtons, handleButtonSelect }) => {
   const [pubList, setPubList] = useState([]);
   const [uniquePublisherNames, setUniquePublisherNames] = useState([]);
   const [savedData, setSavedData] = useState([]);

   useEffect(() => {
      fetchPubs();
   }, []);

   const fetchPubs = async () => {
      const data = await fetch(PUB_CATEGORY);
      const json = await data.json();
      setPubList(json);
   };

   useEffect(() => {
      const uniqueNames = Array.from(new Set(pubList.map(pub => pub.publisher_name)));
      setUniquePublisherNames(uniqueNames);
   }, [pubList]);

   useEffect(() => {
      const savedDataString = localStorage.getItem('selectedButtonsData');
      if (savedDataString) {
         const parsedData = JSON.parse(savedDataString);
         setSavedData(parsedData);
      }
   }, []);

   // console.log(savedData)

   const renderMenuItems = () => {
      return uniquePublisherNames.map((publisherName) => {
         return (
            <SelectButton
               key={publisherName}
               id={publisherName}
               label={publisherName}   
               selected={selectedButtons.includes(publisherName) || savedData.includes(publisherName)}
               onSelect={() => handleButtonSelect(publisherName)}
               setSavedData={setSavedData}
            />
         );
      });
   };

   return (
      <div className={styles.tab_strip}>
         {renderMenuItems()}
      </div>
   );
};

export default SelectButtons;
