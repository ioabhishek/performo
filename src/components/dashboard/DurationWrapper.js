import React from 'react'
import DurationButton from './DurationButton'
import styles from './dashboard.module.css'

function DurationWrapper() {
  return (
    <div className={styles.period_strip}>
      <DurationButton lable="Day"  />
      <DurationButton lable="Week"  />
      <DurationButton lable="Month"  />
    </div>
  )
}

export default DurationWrapper
