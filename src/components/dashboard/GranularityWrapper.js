import React, { useState, useEffect } from 'react'
// import DurationWrapper from './DurationWrapper'
import CategorySelector from './CategorySelector'
import styles from './dashboard.module.css'
import DateRangeSelector from './DateRangeSelector'
import UserProfile from '../navbar/UserProfile'


const GranularityWrapper = ({date, setDate, selectedCategory, setSelectedCategory,counter,setCounter,startDate,endDate}) => {
  // const [once, setOnce] = useState(true);
function increment() {
  setCounter(counter + 1);
}
if((counter === 0 || counter === 1)) {
  const formatDate = new Date().toLocaleDateString("en-GB");
const parts = formatDate.split('/');
const formattedDate = `${parts[2]}-${parts[1]-1}-${parts[0]}`
  
   startDate = formattedDate;
  //  setOnce(false);
}
  return (
    <div className={styles.top_strip}>
      {/* <span className={styles.tstrip_label}>Granularity</span> */}
      {/* <DurationWrapper /> */}

      <span className={styles.tstrip_label}>Date</span>
      <DateRangeSelector  date={date} setDate={setDate} startDate={startDate}
        endDate={endDate}/>
      <span className={styles.tstrip_label}>Category</span>
      <CategorySelector selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} counter={counter} setCounter={setCounter}  />
      <button className={styles.button} onClick={increment} id={styles.getdetails}>Get Details</button>
      <UserProfile/>
    </div>
  )
}

export default GranularityWrapper
