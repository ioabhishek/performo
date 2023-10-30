import React from 'react'
import styles from './dashboard.module.css'

function DashboardCard({topKeywords}) {
  return (
    <div className={styles.main_card}>
      <span>Top Keywords</span>
      {
        topKeywords.map((topKeyword, index) => (
          <span key={index}>#{topKeyword?.topkeycount}</span>
        ))
      }
    </div>
  )
}

export default DashboardCard
