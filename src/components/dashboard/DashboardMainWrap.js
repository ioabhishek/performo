import React from 'react'
import styles from './dashboard.module.css'
import GranularityWrapper from './GranularityWrapper'
import DashboardGrid from './DashboardGrid'
import NavbarMain from '@/components/newNavbar/NavbarMain'

function DashboardMainWrap() {
  return (
    <>
      <NavbarMain/>
      <div className={styles.main_wrap}>
        <GranularityWrapper />
        <DashboardGrid/>
      </div>
    </>
  )
}

export default DashboardMainWrap
