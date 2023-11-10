import React, { useState, useEffect } from 'react'
import styles from './dashboard.module.css'
import { useAccess } from '@/context/accessContext';

function DashboardCardEarly({startDate, endDate, categoryId}) {
  const { userPubId } = useAccess();
  const [earlyBirds, setEarlyBirds] = useState([]);

  useEffect(() => {
    const fetchEarly = async () => {
      const data = await fetch('https://performo.in/api/early_offer.php', {
        method: 'POST',
        headers: {
            Authorization: 'Bearer 0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
        },
        body: new URLSearchParams({ date_from : startDate, date_to : endDate, publisher_id : userPubId, category_id: categoryId })
      });
      const json = await data.json();
      setEarlyBirds(json)
    };
    fetchEarly();
  }, [startDate, endDate, categoryId])

  return (earlyBirds.length > 0 &&
    <div className={styles.main_card}>
      <span className={styles.dcard_ttl}>EARLY BIRD</span>
      <div className={styles.dcard_wrap}>
        {
          earlyBirds.map((earlyBird, index) => (
            <span key={index}>{earlyBird.early_keyword_name}</span>
          ))
        }
      </div>
    </div>
  )
}

export default DashboardCardEarly
