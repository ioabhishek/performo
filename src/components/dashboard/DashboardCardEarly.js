'use client'
import React from 'react'
import styles from './dashboard.module.css'
function DashboardCardEarly({earlyBirds}) {
  return (
    <div className={styles.main_card}>
      <span className={styles.dcard_ttl}>EARLY BIRD</span>
      <div className={styles.dcard_wrap}>
        {
          earlyBirds.map((earlyBird, index) => (
            <span key={index}>{earlyBird.early_keyword_name}</span>
          ))
        }
      </div>
    </div>
  )
}

export default DashboardCardEarly
