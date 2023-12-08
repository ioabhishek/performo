import React, { useState, useEffect } from 'react';
import styles from './compareGrid.module.css';
import LineChart from '@/utils/LineChart';
import { PulseLoader } from 'react-spinners';
import { useAccess } from '@/context/accessContext';
const CompareRanking = ({ id }) => {
   const [ranking, setRanking] = useState([]);
   const token = useAccess();
   const [status, setStatus] = useState('loading');
   const [formattedRankingData, setFormattedRankingData] = useState([]);
   const [rankingData, setRankingData] = useState({
      labels: [],
      datasets: [
         {
         label: 'Article Ranking',
         data: [],
         backgroundColor: ['#e7e7ff'],
         borderColor: '#696cff',
         borderWidth: 1.5,
         tension: 0.4,
         fill: true,
         },
      ],
      options: {
         legend: {
         display: false,
         },
      },
      responsive: true,
   });

   useEffect(() => {
      const fetchRanking = async () => {
         try {
         const data = await fetch('https://performo.in/api/article_ranking.php', {
            method: 'POST',
            headers: {
               Authorization:
               token
            },
            body: new URLSearchParams({ article_id: id }),
         });

         if (!data.ok) {
            throw new Error(`HTTP error! Status: ${data.status}`);
         }
         const json = await data.json();

         setRanking(json.length === 0 ? [] : json);
         setStatus(json.length === 0 ? 'false' : 'true');
         } catch (error) {
         console.error('An error occurred while fetching data:', error);
         }
      };
      fetchRanking();
   }, [id]);

   useEffect(() => {
      const formattedData = ranking.map((data) => {
         const rankDate = new Date(data.rank_datetime);
         const day = rankDate.getDate().toString();
         return {
         rank: data.rank,
         rank_datetime: day,
         };
      });

      setFormattedRankingData(formattedData);
   }, [ranking]);

   useEffect(() => {
      setRankingData((prevState) => ({
         ...prevState,
         labels: formattedRankingData.map((data) => data.rank_datetime),
         datasets: [
         {
            ...prevState.datasets[0],
            data: formattedRankingData.map((data) => data.rank),
         },
         ],
      }));
   }, [formattedRankingData]);

   if (status === 'loading') {
      return (
         <div className={styles.compare_tab_itm}>
         <PulseLoader color="#696CFF" size={10} data-textid="Loader" />
         </div>
      );
   } else if (status === 'false') {
      return (
         <div className={styles.compare_tab_itm}>
         <span className="loading_text">...</span>
         </div>
      );
   } else if (status === 'true') {
      return (
         <div className={styles.compare_tab_itm}>
         <LineChart chartData={rankingData} />
         </div>
      );
   }
};

export default CompareRanking;
