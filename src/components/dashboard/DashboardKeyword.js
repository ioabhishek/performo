import React, { useState, useEffect } from 'react'
import styles from './dashboard.module.css'

const DashboardKeyword = ({ startDate, endDate }) => {
  const [topKeywords, setTopKeyword] = useState([]);

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
    fetchTopKeywords();
  }, [startDate, endDate])

  return (topKeywords.length > 0 &&
    <div className={styles.main_card}>
      <span className={styles.dcard_ttl}>TOP KEYWORDS</span>
      <div className={styles.dcard_wrap}>
        {
          topKeywords?.map((keyword, index) => (
            <span key={index}>#{keyword.topkeycount}</span>
          ))
        }
      </div>
    </div>
  )
}

export default DashboardKeyword