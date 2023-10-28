import React from 'react'
import styles from './dashboard.module.css'
import GranularityWrapper from './GranularityWrapper'
import DashboardGrid from './DashboardGrid'

function DashboardMainWrap() {
  return (
    <>
      <GranularityWrapper />
      <DashboardGrid/>
    </>
  )
}

export default DashboardMainWrap