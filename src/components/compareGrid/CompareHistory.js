import React, {useState, useEffect} from 'react'
import styles from './compareGrid.module.css';

const CompareHistory = ({id}) => {
   const [rankingData, setRankingData] = useState([]);

   const url = `https://performo.in/api/article_ranking.php?token_key=@123abcd1366&article_id=${id}&key=ranking__${id}`

   useEffect(() => {
      const fetchCategory = async () => {
        const data = await fetch(url);
        const json = await data.json();
        setRankingData(json);
      }
      fetchCategory();
   }, []);

   return (
      <div className={styles.compare_tab_itm}>
         <h4>Article Ranking</h4>
         {
            rankingData.map((ranking, index) => (
               <span key={index}>{ranking.rank}</span>
            ))
         }
      </div>
   )
}

export default CompareHistory