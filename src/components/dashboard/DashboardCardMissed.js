import React, { useState, useEffect } from 'react'
import styles from './dashboard.module.css'
import { useAccess } from '@/context/accessContext';

const DashboardCardMissed = ({startDate, endDate, categoryId}) => {
  const { userPubId } = useAccess();
  const [missedTrain, setMissedTrain] = useState([]);

  useEffect(() => {
    const fetchmissed = async () => {
      const data = await fetch('https://performo.in/api/missed_train.php', {
        method: 'POST',
        headers: {
            Authorization: 'Bearer 0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
        },
        body: new URLSearchParams({ date_from : startDate, date_to : endDate, publisher_id : userPubId, category_id: categoryId})
      });
      const json = await data.json();
      setMissedTrain(json);
    };
    fetchmissed();
  }, [startDate, endDate, categoryId])

  return ( missedTrain.length > 0 &&
      <div className={styles.main_card}>
        <span className={styles.dcard_ttl}>MISSED TRAIN</span>
        <div className={styles.dcard_wrap}>
          {
            missedTrain.map((missed, index) => (
              <span key={index}>{missed.missed_train}</span>
            ))
          }
        </div>
      </div>
    )
  }
  
  export default DashboardCardMissed