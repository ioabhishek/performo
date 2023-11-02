'use client'
import React, { useState } from 'react'
import styles from './dashboard.module.css'

function DashboardCardLeg({leggards}) {
  
  return (
    <div className={styles.main_card}>
      <span className={styles.dcard_ttl}>LEGGARD</span>
      <div className={styles.dcard_wrap}>
        {
          leggards.map((leggard, index) => (
            <span key={index}>{leggard.legard_keyword_name}</span>
          ))
        }
      </div>
    </div>
  )
}

export default DashboardCardLeg
