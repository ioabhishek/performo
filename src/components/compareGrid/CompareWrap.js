import React from 'react'
import styles from './compareGrid.module.css'
import CompareCard from './CompareCard'
import CompareLabel from './CompareLabel'

function CompareWrap() {
   return (
      <div className={styles.compare_wrap}>
         <CompareLabel name="Mfg 1"/>
         <CompareCard/>
         <CompareCard/>
      </div>
   )
}

export default CompareWrap