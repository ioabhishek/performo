import React from 'react'
import DurationButton from '../durationButton/DurationButton'
import styles from './durationWrapper.module.css'
function DurationWrapper() {
  return (
    <div>
        <div className={styles.period_strip}>
      <DurationButton lable="Day"  />
      <DurationButton lable="Week"  />
      <DurationButton lable="Month"  />
      </div>
    </div>
  )
}

export default DurationWrapper
