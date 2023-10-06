import React from 'react'
import styles from './dashboardMainWrap.module.css'
import GranularityWrapper from '../granularityWrapper/GranularityWrapper'
import DashboardGrid from '../dashboardGrid/DashboardGrid'
import Navbar from '@/components/navbar/Navbar'
import NavbarMain from '@/components/newNavbar/navbarMain/NavbarMain'
function DashboardMainWrap() {
  return (
    <div>
      <div className={styles.main_content}>
      
     <NavbarMain></NavbarMain>
      <div className={styles.main_wrap}>
        <GranularityWrapper />
        <DashboardGrid/>
        
      </div>
    </div>
    </div>
  )
}

export default DashboardMainWrap
