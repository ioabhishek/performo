import React from 'react'
import DurationWrapper from './DurationWrapper'
import CategorySelector from './CategorySelector'
import styles from './dashboard.module.css'
import DateRangeSelector from './DateRangeSelector'
import UserProfile from '../navbar/UserProfile'

function GranularityWrapper() {
  return (
    <div className={styles.top_strip}>
      <span className={styles.tstrip_label}>Granularity</span>
      <DurationWrapper />
      <DateRangeSelector />
      <span className={styles.tstrip_label}>Select Category</span>
      <CategorySelector/>
      <UserProfile/>
    </div>
  )
}

export default GranularityWrapper
