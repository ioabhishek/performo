import React from 'react'
import styles from './dashboard.module.css'
function DashboardCardMissed({missedTrain}) {

  return (
    <div className={styles.main_card}>
        <span>MISSED TRAIN</span>
      {
        missed_train.map((missed_train, index) => (
          <span key={index}>{missed_train}</span>
        ))
      }
    </div>
  )
}

export default DashboardCardMissed
