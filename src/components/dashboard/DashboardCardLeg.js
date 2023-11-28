'use client'
import React, { useEffect, useState } from 'react'
import styles from './dashboard.module.css'
import { useAccess } from '@/context/accessContext';

const DashboardCardLeg = ({startDate, endDate, categoryId}) => {
  const { userPubId } = useAccess();
  const [leggards, setLeggards] = useState([]);

  useEffect(() => {
    const fetchLagaard = async () => {
      const data = await fetch('https://performo.in/api/leggard.php', {
        method: 'POST',
        headers: {
            Authorization: 'Bearer 0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
        },
        body: new URLSearchParams({ date_from : startDate, date_to : endDate, publisher_id : userPubId, category_id: categoryId })
      });
      const json = await data.json();
      setLeggards(json)
    };
    if(startDate && endDate && categoryId) {
      fetchLagaard();
    }
  }, [startDate, endDate, categoryId])

  return (
    <div className={styles.main_card}>
      <span className={styles.dcard_ttl}>LEGGARD</span>
      {leggards.length > 0 ? (
        <div className={styles.dcard_wrap}>
          {
            leggards.map((leggard, index) => (
              <span key={index}>{leggard.legard_keyword_name}</span>
            ))
          }
        </div>
      ): (
        <div className={styles.dcard_wrap}>
          <span>...</span>
        </div>
      )}
    </div>
  )
}
  
export default DashboardCardLeg