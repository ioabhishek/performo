import React, { useState, useEffect } from 'react'
import styles from './dashboard.module.css'
import { useAccess } from '@/context/accessContext';

function DashboardCardm({startDate, endDate, categoryId}) {
  const { userPubId } = useAccess();
  const [mpositions, setMositions] = useState([]);

  useEffect(() => {
    const fetchMposition = async () => {
      const data = await fetch('https://performo.in/api/ranking_position_time.php', {
        method: 'POST',
        headers: {
            Authorization: 'Bearer 0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
        },
        body: new URLSearchParams({date_from : startDate, date_to : endDate, publisher_id : userPubId, category_id: categoryId})
      });
      const json = await data.json();
      setMositions(json);
    };
    fetchMposition();
  }, [startDate, endDate, categoryId])

  return (
    <>
      {
        mpositions.map((mposition, index) => (
          <div key={index} className={styles.main_card}>
            <span className={styles.dcard_ttl}>TOP {mposition.rank}</span>
            <span>{mposition.rank_minute} min</span>
          </div>
        ))
      }
    </>
  )
}

export default DashboardCardm