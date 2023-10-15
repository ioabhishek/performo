import React from 'react'
import styles from './button.module.css'

const SelectButton = ({ id, label, selected, onSelect, setSavedData }) => {
   const handleClick = () => {
      setSavedData([])
      onSelect(id);
   };

   return (
      <button className={`${styles.sel_btn} ${selected ? styles.selected : ''}`} onClick={handleClick}>{label}</button>
   )
}

export default SelectButton