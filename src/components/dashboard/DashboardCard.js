import React from 'react'
import styles from './dashboard.module.css'

function DashboardCard(props) {
  return (
    <div className={styles.main_card}>
      <span>{props.cardTitle}</span>
      <span>{props.cardValue}</span>
    </div>
  )
}

export default DashboardCard
