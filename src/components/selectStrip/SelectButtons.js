import React, { useState, useEffect } from "react";
import styles from "./selectStrip.module.css";
import SelectButton from "@/components/button/SelectButton";
import { useDispatch, useSelector } from 'react-redux'
import { fetchPublishers } from "@/redux/slice";
import { useAccess } from '@/context/accessContext';
const SelectButtons = ({
   selectedButtons,
   handleButtonSelect,
   savedData,
   setSavedData,
}) => {
   const dispatch = useDispatch();
   const pubList = useSelector((state) => state.data);
   const { token } = useAccess();
   useEffect(() => {
      dispatch(fetchPublishers(token));
   }, [dispatch]);

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
