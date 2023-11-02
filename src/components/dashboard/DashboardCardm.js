import React from 'react'
import styles from './dashboard.module.css'

function DashboardCardm({rankminute, rank}) {
  return (
    <div className={styles.main_card}>
      <span className={styles.dcard_ttl}>TOP {rank}</span>
      <span>{rankminute} min</span>
    </div>
  )
}

export default DashboardCardm
