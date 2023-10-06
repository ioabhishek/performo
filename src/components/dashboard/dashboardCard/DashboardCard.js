import React from 'react'
import styles from './dashboardCard.module.css'
function DashboardCard(props) {
  return (
    <div>
      <div className={styles.main_card}>
              <span>{props.cardTitle}</span>
              <span>{props.cardValue}</span>
            </div>
    </div>
  )
}

export default DashboardCard
