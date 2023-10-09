import React from 'react'
import styles from './mainWrap.module.css'
import DashboardMainWrap from '../dashboard/DashboardMainWrap'
// import SelectStrip from '../selectStrip/SelectStrip'
// import CompareGrid from '../compareGrid/CompareGrid'

const MainWrap = () => {
   return (
      <div className={styles.main_wrap}>
         {/* <SelectStrip/> */}
         {/* <CompareGrid/> */}

         <DashboardMainWrap/>
      </div>
   )
}

export default MainWrap