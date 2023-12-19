import React, { useState, useEffect } from 'react'
import styles from './dashboard.module.css'
import { useAccess } from '@/context/accessContext';
const DashboardKeyword = ({ startDate, endDate, categoryId,counter }) => {
  const [topKeywords, setTopKeyword] = useState([]);
  const { token } = useAccess();
  if(counter === 0 || counter === 1) {
    const formatDate = new Date().toLocaleDateString("en-GB");
  const parts = formatDate.split('/');
  const formattedDate = `${parts[2]}-${parts[1]-1}-${parts[0]}`
    
     startDate = formattedDate;
  }
  useEffect(() => {
    const fetchTopKeywords = async () => {
      const data = await fetch('https://performo.in/api/top_keyword.php', {
        method: 'POST',
        headers: {
            Authorization: token
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