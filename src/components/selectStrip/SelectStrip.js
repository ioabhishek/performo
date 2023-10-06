import React from 'react'
import styles from './selectStrip.module.css'
import Button from '../button/Button'
import SelectWrap from './SelectWrap'

function SelectStrip() {
   return (
      <div className={styles.tstrip_wrap}>
         <SelectWrap/>
         <Button name="Save"/>
      </div>
   )
}

export default SelectStrip