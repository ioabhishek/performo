import React from 'react'
import styles from './compareWrap.styles.css'
import CompareCard from '../compareCard/compareCard'

function CompareWrap() {
   return (
      <div className={styles.compare_wrap}>
         <span class={styles.compare_tabn}>Mfg 1</span>
         <CompareCard/>
         <CompareCard/>
      </div>
   )
}

export default CompareWrap