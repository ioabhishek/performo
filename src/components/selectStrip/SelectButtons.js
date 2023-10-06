import React from 'react'
import styles from './selectStrip.module.css'
import SelectButton from '@/components/button/SelectButton'

const SelectButtons = () => {
   return (
      <ul className={styles.tab_strip}>
         <SelectButton name="Mfg 1"/>
         <SelectButton name="Mfg 2"/>
         <SelectButton name="Mfg 3"/>
         <SelectButton name="Mfg 4"/>
         <SelectButton name="Mfg 5"/>
         <SelectButton name="Mfg 6"/>
         <SelectButton name="Mfg 7"/>
         <SelectButton name="Mfg 8"/>
      </ul>
   )
}

export default SelectButtons