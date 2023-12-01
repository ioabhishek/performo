import React, { useState, useEffect } from 'react'
import styles from './dashboard.module.css'
import { useAccess } from '@/context/accessContext';

const DashboardCardMissed = ({startDate, endDate, categoryId,counter}) => {
  const { userPubId } = useAccess();
  const { token } = useAccess();
  const [missedTrain, setMissedTrain] = useState([]);

  useEffect(() => {
    const fetchmissed = async () => {
      const data = await fetch('https://performo.in/api/missed_train.php', {
        method: 'POST',
        headers: {
            Authorization: token
        },
        body: new URLSearchParams({ date_from : startDate, date_to : endDate, publisher_id : userPubId, category_id: categoryId})
      });
      const json = await data.json();
      setMissedTrain(json);
    };
    if(startDate && endDate && categoryId) {
      fetchmissed();
    }
  }, [counter])

  return (
      <div className={styles.main_card}>
        <span className={styles.dcard_ttl}>MISSED TRAIN</span>
        {missedTrain.length>0 ? (
          <div className={styles.dcard_wrap}>
            {
              missedTrain.map((missed, index) => (
                <span key={index}>{missed.missed_train}</span>
              ))
            }
          </div>
        ): (
          <div className={styles.dcard_wrap}>
            <span>...</span>
          </div>
        )}
      </div>
    )
  }
  
  export default DashboardCardMissed