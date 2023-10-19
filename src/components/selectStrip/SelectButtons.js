import React, { useState, useEffect } from "react";
import styles from "./selectStrip.module.css";
import SelectButton from "@/components/button/SelectButton";
import { PUBLISHER } from "../../utils/constants";

const SelectButtons = ({
   selectedButtons,
   handleButtonSelect,
   savedData,
   setSavedData,
}) => {
   const [pubList, setPubList] = useState([]);
   // const [uniquePublisherNames, setUniquePublisherNames] = useState([]);

   useEffect(() => {
      const fetchPubs = async () => {
         const data = await fetch(PUBLISHER);
         const json = await data.json();
         setPubList(json);
      };
      fetchPubs();
   }, []);

   // useEffect(() => {
   //    const uniqueNames = Array.from(
   //       new Set(pubList.map((pub) => pub.publisher_name))
   //    );
   //    setUniquePublisherNames(uniqueNames);
   // }, [pubList]);

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
