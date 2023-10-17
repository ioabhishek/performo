import React from 'react'
import styles from './button.module.css'

const CompareButton = ({ label, selected, onClick }) => {
   return (
      <button className={`${styles.compare_btn} ${selected ? styles.active : ''}`} onClick={onClick}>
         {label}
      </button>
   )
}

export default CompareButton