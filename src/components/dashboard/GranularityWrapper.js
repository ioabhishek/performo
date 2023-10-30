import React, { useState, useEffect } from 'react'
// import DurationWrapper from './DurationWrapper'
import CategorySelector from './CategorySelector'
import styles from './dashboard.module.css'
import DateRangeSelector from './DateRangeSelector'
import UserProfile from '../navbar/UserProfile'


const GranularityWrapper = ({date, setDate, selectedCategory, setSelectedCategory}) => {

  return (
    <div className={styles.top_strip}>
      {/* <span className={styles.tstrip_label}>Granularity</span> */}
      {/* <DurationWrapper /> */}

      <span className={styles.tstrip_label}>Select Date</span>
      <DateRangeSelector  date={date} setDate={setDate}/>
      <span className={styles.tstrip_label}>Select Category</span>
      <CategorySelector selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
      {/* <button className={styles.details_btn}>Get Details</button> */}
      <UserProfile/>
    </div>
  )
}

export default GranularityWrapper
