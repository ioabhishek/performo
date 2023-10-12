import React from 'react'
import styles from './button.module.css'

const SelectButton = ({ id, label, selected, onSelect }) => {
   const handleClick = () => {
      onSelect(id);
   };

   return (
      <button className={`${styles.sel_btn} ${selected ? styles.selected : ''}`} onClick={handleClick}>{label}</button>
   )
}

export default SelectButton