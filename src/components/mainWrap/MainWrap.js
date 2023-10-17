import React from 'react'
import styles from './mainWrap.module.css'
import DashboardMainWrap from '../dashboard/DashboardMainWrap'

const MainWrap = () => {
   return (
      <div className={styles.main_wrap}>
         <DashboardMainWrap/>
      </div>
   )
}

export default MainWrap