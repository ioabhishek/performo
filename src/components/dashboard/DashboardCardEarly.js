import React, { useState, useEffect } from 'react'
import styles from './dashboard.module.css'
import { useAccess } from '@/context/accessContext';

function DashboardCardEarly({startDate, endDate, categoryId,counter}) {
  const { userPubId } = useAccess();
  const [earlyBirds, setEarlyBirds] = useState([]);
  const { token } = useAccess();
  useEffect(() => {
    const fetchEarly = async () => {
      const data = await fetch('https://performo.in/api/early_offer.php', {
        method: 'POST',
        headers: {
            Authorization: token
        },
        body: new URLSearchParams({ date_from : startDate, date_to : endDate, publisher_id : userPubId, category_id: categoryId })
      });
      const json = await data.json();
      setEarlyBirds(json)
    };
    if(startDate && endDate && categoryId) {
      fetchEarly();
    }
  }, [counter])

  return (
    <div className={styles.main_card}>
      <span className={styles.dcard_ttl}>EARLY BIRD</span>
      {earlyBirds.length>0? (
        <div className={styles.dcard_wrap}>
          {
            earlyBirds.map((earlyBird, index) => (
              <span key={index}>{earlyBird.early_keyword_name}</span>
            ))
          }
        </div>
        ) : (
        <div className={styles.dcard_wrap}>
          <span>...</span>
        </div>
        )
      }
    </div>
  )
}

export default DashboardCardEarly
