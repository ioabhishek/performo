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
      <div className={styles.main_card}>
        <span className={styles.dcard_ttl}>TOP 1</span>
        {mpositions.slice(0, 1).length > 0 ? (
          mpositions.slice(0, 1).map((mposition) => (
            <span key={mposition}>{mposition.rank_minute} min</span>
          ))
        ) : (
          <div className={styles.dcard_wrap}>
            <span>No Data...</span>
          </div>
        )}
      </div>
      <div className={styles.main_card}>
        <span className={styles.dcard_ttl}>TOP 1</span>
        {mpositions.slice(1, 2).length > 0 ? (
          mpositions.slice(1,2).map((mposition) => (
            <span key={mposition}>{mposition.rank_minute} min</span>
          ))
        ) : (
          <div className={styles.dcard_wrap}>
            <span>No Data...</span>
          </div>
        )}
      </div>
      <div className={styles.main_card}>
        <span className={styles.dcard_ttl}>TOP 1</span>
        {mpositions.slice(2, 3).length > 0 ? (
          mpositions.slice(2,3).map((mposition) => (
            <span key={mposition}>{mposition.rank_minute} min</span>
          ))
        ) : (
          <div className={styles.dcard_wrap}>
            <span>No Data...</span>
          </div>
        )}
      </div>

      
    </>
  )
}

export default DashboardCardm