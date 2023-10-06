import React from 'react'
import styles from './mainWrap.module.css'
import SelectStrip from '../selectStrip/SelectStrip'
import CompareGrid from '../compareGrid/CompareGrid'

const MainWrap = () => {
   return (
      <div className={styles.main_wrap}>
         <SelectStrip/>
         <CompareGrid/>
      </div>
   )
}

export default MainWrap