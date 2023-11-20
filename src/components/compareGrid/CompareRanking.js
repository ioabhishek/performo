import React, {useState, useEffect} from 'react'
import styles from './compareGrid.module.css';
import LineChart from '@/utils/LineChart';

const CompareRanking = ({ ranking }) => {


   const formattedRankingData = ranking?.map((data) => {
      const rankDate = new Date(data.rank_datetime);
      const day = rankDate.getDate().toString();
      return {
         rank: data.rank,
         rank_datetime: day,
      };
   });

   const [rankingData, setRankingData] = useState({
      labels: formattedRankingData?.map((data) => data.rank_datetime),
      datasets: [
         {
            label: "Article Ranking",
            data: formattedRankingData?.map((data) => data.rank),
            backgroundColor: ["#e7e7ff"],
            borderColor: "#696cff",
            borderWidth: 1.5,
            tension: 0.4,
            fill: true,
         },
      ],
      options: {
         legend: {
           display: false
         }
      },
      responsive: true
   });
   
   return (
      <div className={styles.compare_tab_itm}>
         <LineChart chartData={rankingData} />
      </div>
   )
}

export default CompareRanking