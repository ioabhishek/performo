import React, { useState, useEffect } from 'react'
import styles from './dashboard.module.css'

const DashboardKeyword = ({ startDate, endDate, categoryId,counter }) => {
  const [topKeywords, setTopKeyword] = useState([]);
  if(counter === 0) {
    const endDateObj = new Date(endDate);
      const startMonth =  endDateObj.getMonth() - 1;
    const startDateObj = new Date(endDateObj.getFullYear(), startMonth, endDateObj.getDate());
    
     startDate = startDateObj.toISOString().split('T')[0];
  }
  useEffect(() => {
    const fetchTopKeywords = async () => {
      const data = await fetch('https://performo.in/api/top_keyword.php', {
        method: 'POST',
        headers: {
            Authorization: 'Bearer 0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
        },
        body: new URLSearchParams({date_from : startDate, date_to : endDate})
      });
      const json = await data.json();
      setTopKeyword(json);
    };
    if(startDate && endDate) {
      fetchTopKeywords();
    }
  }, [counter])

  return (
    <div className={styles.main_card}>
      <span className={styles.dcard_ttl}>TOP KEYWORDS</span>
      {topKeywords.length > 0 ? (
        <div className={styles.dcard_wrap}>
          {topKeywords.map((keyword, index) => (
            <span key={index}>#{keyword.topkeycount}</span>
          ))}
        </div>
      ) : (
        <div className={styles.dcard_wrap}>
          <span>...</span>
        </div>
      )}
    </div>
  );
  
}

export default DashboardKeyword