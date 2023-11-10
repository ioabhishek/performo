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
      {
        positions.map((position, index) => (
          <div key={index} className={styles.main_card}>
            <span className={styles.dcard_ttl}>TOP {position.rank}</span>
            <span>{position.rankcount}</span>
          </div>
        ))
      }
    </>
  )
}

export default DashboardCardRank