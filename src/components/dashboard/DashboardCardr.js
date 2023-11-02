import React from 'react'
import styles from './dashboard.module.css'

function DashboardCardr({rankcount, rank}) {
  return (
    <div className={styles.main_card}>
      <span className={styles.dcard_ttl}>TOP {rank}</span>
      <span>{rankcount}</span>
    </div>
  )
}

export default DashboardCardr
