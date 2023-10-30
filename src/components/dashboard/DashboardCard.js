import React from 'react'
import styles from './dashboard.module.css'

function DashboardCard({rankcount, rank}) {
  return (
    <div className={styles.main_card}>
      <span>TOP {rank}</span>
      <span>{rankcount}</span>
    </div>
  )
}

export default DashboardCard
