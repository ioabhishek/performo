import React from 'react'
import DurationWrapper from './DurationWrapper'
import CategorySelector from './CategorySelector'
import styles from './dashboard.module.css'

function GranularityWrapper() {
  return (
    <div className={styles.top_strip}>
      <span className={styles.tstrip_label}>Granularity</span>
      <DurationWrapper />
      <span className={styles.tstrip_label}>Select Category</span>
      <CategorySelector/>
    </div>
  )
}

export default GranularityWrapper
