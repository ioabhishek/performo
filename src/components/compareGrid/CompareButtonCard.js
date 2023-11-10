import React, { useState, useEffect } from 'react';
import styles from './compareGrid.module.css';
import CompareButton from '../button/CompareButton';
import CompareRanking from './CompareRanking';
import CompareKeyword from './CompareKeyword';

const CompareButtonCard = ({id}) => {

   const [selectedComponentIndex, setSelectedComponentIndex] = useState(null);
   const [ranking, setRanking] = useState([]);
   const [latestRanking, setLatestRanking] = useState(null);
   const [buttonInfo, setButtonInfo] = useState([
      { label: 'Ranking' },
      { label: 'Keyword' },
   ]);

   useEffect(() => {
      const fetchRanking = async () => {
         try {
            const data = await fetch('https://performo.in/api/article_ranking.php', {
               method: 'POST',
               headers: {
                  Authorization: 'Bearer 0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
               },
               body: new URLSearchParams({ article_id: id })
            });

            if (!data.ok) {
               throw new Error(`HTTP error! Status: ${data.status}`);
            }
            const json = await data.json();
            if(json.length === 0) {
               setRanking([])
               setLatestRanking(null)
            } else {
               setRanking(json)
               setLatestRanking(json[0].rank)
            }
         } catch (error) {
            console.error("An error occurred while fetching data:", error);
         }
      }
      fetchRanking()
   }, [id]);


   const handleButtonClick = (buttonIndex) => {
      if (selectedComponentIndex === buttonIndex) {
         // If the same button is clicked again, unselect it
         setSelectedComponentIndex(null);
      } else {
         // Select a new button
         setSelectedComponentIndex(buttonIndex);
      }
   };

   // Dummy ranking data
   const rankingData = [
      {
         rank: 7,
         rank_datetime: "2023-10-16 20:00:09",
      },
      {
         rank: 16,
         rank_datetime: "2023-10-17 20:00:09",
      },
      {
         rank: 9,
         rank_datetime: "2023-10-18 20:00:09",
      },
      {
         rank: 5,
         rank_datetime: "2023-10-19 20:00:09",
      },
      {
         rank: 16,
         rank_datetime: "2023-10-20 20:00:09",
      },
   ];

   return (
      <>
         <div className={styles.compare_icns}>
            {buttonInfo.map(
               (button, buttonIndex) => (
                  <CompareButton
                     key={buttonIndex}
                     label={button.label}
                     selected={selectedComponentIndex === buttonIndex}
                     onClick={() => handleButtonClick(buttonIndex)}
                  />
               )
            )}
         </div>
         <div className={styles.compare_tab_wrp}>
            {selectedComponentIndex === 0 && <CompareRanking ranking={ranking}/>}
            {selectedComponentIndex === 1 && <CompareKeyword id = {id}/>}
         </div>
         
         {latestRanking && <div className={styles.rank_no}>{latestRanking}</div>} 
      </>
   );
};

export default CompareButtonCard;
