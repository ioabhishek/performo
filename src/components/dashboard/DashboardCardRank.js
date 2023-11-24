import React, {useState, useEffect} from 'react'
import styles from './dashboard.module.css';
import { useAccess } from '@/context/accessContext';

const DashboardCardRank = ({startDate, endDate, categoryId}) => {
  const { userPubId } = useAccess();
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    const fetchPosition = async () => {
      const data = await fetch('https://performo.in/api/ranking_position.php', {
        method: 'POST',
        headers: {
            Authorization: 'Bearer 0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
        },
        body: new URLSearchParams({ date_from : startDate, date_to : endDate, publisher_id : userPubId, category_id: categoryId})
      }); 
      const json = await data.json();
      setPositions(json);
    };
    if(startDate && endDate && categoryId) {
      fetchPosition();
    }
  }, [startDate, endDate, categoryId])

  return (
    <>
      <div className={styles.main_card}>
        <span className={styles.dcard_ttl}>TOP 1</span>
        {positions.length > 0 ? (
          positions.map((position) => (
            position.rank === "1" ? <span key={position}>{position.rankcount}</span> : <span key={position}>...</span>
          ))
        ) : (
          <div className={styles.dcard_wrap}>
            <span>...</span>
          </div>
        )}
      </div>

      <div className={styles.main_card}>
        <span className={styles.dcard_ttl}>TOP 2</span>
        {positions.length > 0 ? (
          positions.map((position) => (
            position.rank === "2" ? <span key={position}>{position.rankcount}</span> : <span key={position}>...</span>
          ))
        ) : (
          <div className={styles.dcard_wrap}>
            <span>...</span>
          </div>
        )}
      </div>

      <div className={styles.main_card}>
        <span className={styles.dcard_ttl}>TOP 3</span>
        {positions.length > 0 ? (
          positions.map((position) => (
            position.rank === "3" ? <span key={position}>{position.rankcount}</span> : <span key={position}>...</span>
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

export default DashboardCardRank