'use client'
import React, { useEffect, useState } from 'react'
import styles from './dashboard.module.css'
import { useAccess } from '@/context/accessContext';

const DashboardCardLeg = ({startDate, endDate, categoryId,counter}) => {
  const { userPubId } = useAccess();
  const [leggards, setLeggards] = useState([]);
  const { token } = useAccess();
  if(counter === 1) {
    const formatDate = new Date().toLocaleDateString("en-GB");
  const parts = formatDate.split('/');
  const formattedDate = `${parts[2]}-${parts[1]-1}-${parts[0]}`
    
     startDate = formattedDate;
  }
  useEffect(() => {
    const fetchLagaard = async () => {
      const data = await fetch('https://performo.in/api/leggard.php', {
        method: 'POST',
        headers: {
            Authorization: token
        },
        body: new URLSearchParams({ date_from : startDate, date_to : endDate, publisher_id : userPubId, category_id: categoryId })
      });
      const json = await data.json();
      setLeggards(json)
    };
    if(startDate && endDate && categoryId) {
      fetchLagaard();
    }
  }, [counter])

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