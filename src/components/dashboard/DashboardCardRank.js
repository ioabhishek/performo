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
    fetchPosition();
  }, [startDate, endDate, categoryId])

  return (
    <>
      <div className={styles.main_card}>
        <span className={styles.dcard_ttl}>TOP 1</span>
        {positions.slice(0, 1).length > 0 ? (
          positions.slice(0, 1).map((position) => (
            <span key={position}>{position.rankcount}</span>
          ))
        ) : (
          <div className={styles.dcard_wrap}>
            <span>No Data...</span>
          </div>
        )}
      </div>
      <div className={styles.main_card}>
        <span className={styles.dcard_ttl}>TOP 2</span>
        {positions.slice(1, 2).length > 0 ? (
          positions.slice(1, 2).map((position) => (
            <span key={position}>{position.rankcount}</span>
          ))
        ) : (
          <div className={styles.dcard_wrap}>
            <span>No Data...</span>
          </div>
        )}
      </div>
      <div className={styles.main_card}>
        <span className={styles.dcard_ttl}>TOP 3</span>
        {positions.slice(2, 3).length > 0 ? (
          positions.slice(2, 3).map((position) => (
            <span key={position}>{position.rankcount}</span>
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

export default DashboardCardRank