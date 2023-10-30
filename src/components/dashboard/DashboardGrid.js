import React from 'react'
import styles from './dashboard.module.css'
import DashboardCard from './DashboardCard'

const DashboardGrid = ({positions}) => {

  return (
    <div className={styles.main_grid}>
      {positions?.map((position, index) => (
        <DashboardCard key={index} rankcount={position?.rankcount} rank={position?.rank}/>
      ))}
    </div>
  )
}

export default DashboardGrid


{/* <div className={styles.main_grid}>
  <DashboardCard cardTitle="Total Revenue" cardValue="$ 1,000,000" positions={positions}/>
</div> */}
