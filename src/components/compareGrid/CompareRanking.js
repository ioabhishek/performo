import React, {useState, useEffect} from 'react'
import styles from './compareGrid.module.css';
import { RANKING } from '@/utils/constants';

const CompareRanking = ({id}) => {
   const [rankingData, setRankingData] = useState([]);

   useEffect(() => {
      const fetchRanking = async () => {
         try {
            const data = await fetch(`${RANKING}${id}`);
            if (!data.ok) {
               throw new Error(`HTTP error! Status: ${data.status}`);
            }
            const json = await data.json();
            setRankingData(json);
         } catch (error) {
            console.error("An error occurred while fetching data:", error);
         }
      };
    
      fetchRanking();
   }, [id]);
    

   if (rankingData.length === 0) {
      return (
         <div className={styles.compare_tab_itm}>
            <span className='loading_text'>No data...</span>
         </div>
      ); 
   }

   console.log(rankingData)

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

export default CompareRanking