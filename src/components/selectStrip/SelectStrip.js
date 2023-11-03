import React, {useState, useEffect} from "react";
import styles from "./selectStrip.module.css";
import Button from "../button/SavePreference";
import SelectWrap from "./SelectWrap";

const SelectStrip = ({
   selectedButtons,
   handleButtonSelect,
   savedData,
   setSavedData,
}) => {

   return (
      <div className={styles.tstrip_wrap}>
         <SelectWrap
            selectedButtons={selectedButtons}
            handleButtonSelect={handleButtonSelect}
            savedData={savedData}
            setSavedData={setSavedData}
         />
         <Button selectedButtons={selectedButtons} />
      </div>
   );
};

export default SelectStrip;
