import React from 'react'
import styles from './selectStrip.module.css'
import Button from '../button/Button'
import SelectWrap from './SelectWrap'

const SelectStrip = ({selectedButtons, handleButtonSelect}) => {
   return (
      <div className={styles.tstrip_wrap}>
         <SelectWrap selectedButtons={selectedButtons} handleButtonSelect={handleButtonSelect}/>
         <Button selectedButtons={selectedButtons}/>
      </div>
   )
}

export default SelectStrip