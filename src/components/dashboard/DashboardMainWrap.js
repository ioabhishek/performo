import React from 'react'
import styles from './dashboard.module.css'
import GranularityWrapper from './GranularityWrapper'
import DashboardGrid from './DashboardGrid'
import NavbarMain from '@/components/newNavbar/NavbarMain'

function DashboardMainWrap() {
  return (
    <div className={styles.main_content}>
      <NavbarMain/>
      <div className={styles.main_wrap}>
        <GranularityWrapper />
        <DashboardGrid/>
      </div>
    </div>
  )
}

export default DashboardMainWrap
