import React from 'react'
import SelectButtons from './SelectButtons'
import styles from './selectStrip.module.css'

const SelectWrap = ({selectedButtons, handleButtonSelect}) => {
   return (
      <div className={styles.tstrip_con}>
         <SelectButtons selectedButtons={selectedButtons} handleButtonSelect={handleButtonSelect}/>
         <span>Please select above options to compare. Max of 4 can be be selected at once.</span>
      </div>
   )
}

export default SelectWrap