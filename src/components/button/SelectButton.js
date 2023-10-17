import React from 'react'
import styles from './button.module.css'

const SelectButton = ({ pubname, selected, onSelect, setSavedData }) => {

   const handleClick = () => {
      setSavedData(prevSavedData => prevSavedData.filter(item => item !== pubname));
      onSelect(pubname);
   };

   return (
      <button className={`${styles.sel_btn} ${selected ? styles.selected : ''}`} onClick={handleClick}>{pubname}</button>
   )
}

export default SelectButton  