import React from 'react'
import styles from './dashboard.module.css'

function DashboardCard({topKeywords}) {
  return (
    <div className={styles.main_card}>
      <span className={styles.dcard_ttl}>TOP KEYWORDS</span>
      <div className={styles.dcard_wrap}>
        {
          topKeywords.map((topKeyword, index) => (
            <span key={index}>#{topKeyword?.topkeycount} </span>
          ))
        }
      </div>
    </div>
  )
}

export default DashboardCard
