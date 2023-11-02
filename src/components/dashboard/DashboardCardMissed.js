import React from 'react'
import styles from './dashboard.module.css'
function DashboardCardMissed({missedTrain}) {

  return (
    <div className={styles.main_card}>
      <span className={styles.dcard_ttl}>MISSED TRAIN</span>
      <div className={styles.dcard_wrap}>
        {
          missedTrain.map((missed, index) => (
            <span key={index}>{missed.missed_train}</span>
          ))
        }
      </div>
    </div>
  )
}

export default DashboardCardMissed
