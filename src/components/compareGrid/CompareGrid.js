import React from 'react'
import styles from './compareGrid.module.css'
import CompareWrap from './components/compareWrap/CompareWrap'

function CompareGrid() {
   return (
      <div className={styles.compare_grid}>
         <CompareWrap/>
         <CompareWrap/>
         <CompareWrap/>
         <CompareWrap/>
      </div>
   )
}

export default CompareGrid