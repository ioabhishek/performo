import React from 'react'
import styles from './dashboard.module.css'
import DashboardCard from './DashboardCard'

function DashboardGrid() {
  return (
      <div className={styles.main_grid}>
        <DashboardCard cardTitle="Total Revenue" cardValue="$ 1,000,000" />
        <DashboardCard cardTitle="Total Revenue" cardValue="$ 1,000,000" />
        <DashboardCard cardTitle="Total Revenue" cardValue="$ 1,000,000" />
        <DashboardCard cardTitle="Total Revenue" cardValue="$ 1,000,000" />
        <DashboardCard cardTitle="Total Revenue" cardValue="$ 1,000,000" />
        <DashboardCard cardTitle="Total Revenue" cardValue="$ 1,000,000" />
        <DashboardCard cardTitle="Total Revenue" cardValue="$ 1,000,000" />
        <DashboardCard cardTitle="Total Revenue" cardValue="$ 1,000,000" />
        <DashboardCard cardTitle="Total Revenue" cardValue="$ 1,000,000" />
      </div>
  )
}

export default DashboardGrid
