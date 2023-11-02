'use client'
import React from 'react'
import styles from './dashboard.module.css'
import { useState } from 'react';
function DashboardCardEarly({early_bird,early_birdall}) {
  const [load,setload]=useState(early_bird);
  const loadmore =()=>{
    if(load===early_birdall){
      setload(early_bird);
    }
    else{
      setload(early_birdall);
    }
  }
  return (
    <div className={styles.main_card_special}>
    <span>Early Bird</span>
    {load.map((load, index) => (
          <span key={index}>{load}</span>
        ))}
        <button onClick={loadmore}>load more</button>
  </div>
  )
}

export default DashboardCardEarly
