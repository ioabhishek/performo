import React from 'react'
import styles from './selectStrip.module.css'
import Button from '../button/Button'
import SelectWrap from './SelectWrap'

function SelectStrip({selectedButtons, handleButtonSelect}) {
   return (
      <div className={styles.tstrip_wrap}>
         <SelectWrap selectedButtons={selectedButtons} handleButtonSelect={handleButtonSelect}/>
         <Button name="Save"/>
      </div>
   )
}

export default SelectStrip