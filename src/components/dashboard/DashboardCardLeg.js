'use client'
import React, { useState } from 'react'
import styles from './dashboard.module.css'

function DashboardCardLeg({legaard,leggardall}) {
 const [load,setload]=useState(legaard);
  const showmore =()=>{
    if(load===leggardall){
      setload(legaard);
    }
    else{
      setload(leggardall);
    }
  }

  return (
    <div className={styles.main_card_special}>
      <span>Legaard</span>
      {
        load.map((load, index) => (
          <span key={index}>{load}</span>
        ))
      }
      <button onClick={showmore} > load more</button>
    </div>
  )
}

export default DashboardCardLeg
