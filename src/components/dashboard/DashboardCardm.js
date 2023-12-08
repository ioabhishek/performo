import React, { useState, useEffect } from 'react'
import styles from './dashboard.module.css'
import { useAccess } from '@/context/accessContext';

function DashboardCardm({startDate, endDate, categoryId,counter}) {
  const { userPubId } = useAccess();
  const [mpositions, setMositions] = useState([]);
  const { token } = useAccess();
  useEffect(() => {
    const fetchMposition = async () => {
      const data = await fetch('https://performo.in/api/ranking_position_time.php', {
        method: 'POST',
        headers: {
            Authorization: token
        },
        body: new URLSearchParams({date_from : startDate, date_to : endDate, publisher_id : userPubId, category_id: categoryId})
      });
      const json = await data.json();
      setMositions(json);
    };
    if(startDate && endDate && categoryId) {
      fetchMposition();
    }
  }, [counter])

  return (
    <>
      <div className={styles.main_card}>
        <span className={styles.dcard_ttl}>TOP 1</span>
        {mpositions.length > 0 ? (
          mpositions.map((mposition) => (
            mposition.rank === "1" ? <span key={mposition}>{mposition.rank_minute}</span> : <></>
          ))
        ) : (
          <div className={styles.dcard_wrap}>
            <span>...</span>
          </div>
        )}
      </div>

      <div className={styles.main_card}>
        <span className={styles.dcard_ttl}>TOP 2</span>
        {mpositions.length > 0 ? (
          mpositions.map((mposition) => (
            mposition.rank === "2" ? <span key={mposition}>{mposition.rank_minute}</span> : <></>
          ))
        ) : (
          <div className={styles.dcard_wrap}>
            <span>...</span>
          </div>
        )}
      </div>

      <div className={styles.main_card}>
        <span className={styles.dcard_ttl}>TOP 3</span>
        {mpositions.length > 0 ? (
          mpositions.map((mposition) => (
            mposition.rank === "3" ? <span key={mposition}>{mposition.rank_minute}</span> : <></>
          ))
        ) : (
          <div className={styles.dcard_wrap}>
            <span>...</span>
          </div>
        )}
      </div>
    </>
  )
}

export default DashboardCardm