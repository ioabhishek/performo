import React from 'react'
import styles from './dashboard.module.css'
function DashboardCardMissed({miss_trained}) {
  console.log(miss_trained+"inside");
  return (
    <div className={styles.main_card_special}>
        <span>MISSED TRAIN</span>
      {
        miss_trained.map((miss_trained, index) => (
          <span key={index}>{miss_trained}</span>
        ))
      }
    </div>
  )
}

export default DashboardCardMissed
