import React from 'react'
import styles from './dashboard.module.css'
function DashboardCardMissed({missedTrain}) {

  return (
    <div className={styles.main_card}>
        <span>MISSED TRAIN</span>
      {
        missedTrain.map((missedTrain, index) => (
          <span key={index}>{missedTrain}</span>
        ))
      }
    </div>
  )
}

export default DashboardCardMissed
