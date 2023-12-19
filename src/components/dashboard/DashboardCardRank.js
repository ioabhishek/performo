import React, {useState, useEffect} from 'react'
import styles from './dashboard.module.css';
import { useAccess } from '@/context/accessContext';

const DashboardCardRank = ({startDate, endDate, categoryId,counter}) => {
  const { userPubId } = useAccess();
  const [positions, setPositions] = useState([]);
  const { token } = useAccess();

  if(counter === 1) {
    const formatDate = new Date().toLocaleDateString("en-GB");
  const parts = formatDate.split('/');
  const formattedDate = `${parts[2]}-${parts[1]-1}-${parts[0]}`
    
     startDate = formattedDate;
  }

  useEffect(() => {
    const fetchPosition = async () => {
      const data = await fetch('https://performo.in/api/ranking_position.php', {
        method: 'POST',
        headers: {
            Authorization: token
        },
        body: new URLSearchParams({ date_from : startDate, date_to : endDate, publisher_id : userPubId, category_id: categoryId})
      }); 
      const json = await data.json();
      setPositions(json);
    };
    if(startDate && endDate && categoryId) {
      fetchPosition();
    }
  }, [counter])

  return (
    <>
      <div className={styles.main_card}>
        <span className={styles.dcard_ttl}>TOP 1</span>
        {positions.length > 0 ? (
          positions.map((position) => (
            position.rank === "1" ? <span key={position}>{position.rankcount}</span> :<></>
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
            position.rank === "2" ? <span key={position}>{position.rankcount}</span> : <></>
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
            position.rank === "3" ? <span key={position}>{position.rankcount}</span> : <></>
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