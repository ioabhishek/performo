import React from 'react'
import styles from './dashboardGrid.module.css'
import DashboardCard from '../dashboardCard/DashboardCard'
function DashboardGrid() {
  return (
    <div>
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
    </div>
  )
}

export default DashboardGrid
