import React from 'react'
import DurationWrapper from '../durationWrapper/DurationWrapper'
import CategorySelector from '../categorySelector/CategorySelector'
import styles from './granularityWrapper.module.css'
function GranularityWrapper() {
  return (
    <div>
      <div className={styles.top_strip}>
        <span>Granularity</span>
        <DurationWrapper />
         <span>Select Category</span>
        <CategorySelector/>
      </div>
    </div>
  )
}

export default GranularityWrapper
