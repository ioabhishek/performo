import React, { useState, useEffect } from 'react';
import styles from './compareGrid.module.css';
import CompareButton from '../button/CompareButton';
import CompareRanking from './CompareRanking';
import CompareKeyword from './CompareKeyword';
import CompareAuthor from './CompareAuthor';
import { RANKING } from '@/utils/constants';

const CompareButtonCard = ({id}) => {

   const [selectedComponentIndex, setSelectedComponentIndex] = useState(null);
   const [latestRanking, setLatestRanking] = useState(null);
   const [buttonInfo, setButtonInfo] = useState([
      { label: 'Ranking' },
      { label: 'Keyword' },
   ]);

   useEffect(() => {
      const fetchRanking = async () => {
         try {
            const data = await fetch(`${RANKING}${id}`);
            if (!data.ok) {
               throw new Error(`HTTP error! Status: ${data.status}`);
            }
            const json = await data.json();
            if(json.length === 0) {
               setLatestRanking(0)
            } else {
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
            {selectedComponentIndex === 0 && <CompareRanking id = {id} />}
            {selectedComponentIndex === 1 && <CompareKeyword id = {id}/>}
         </div>
         <div className={styles.rank_no}>{latestRanking}</div>
      </>
   );
};

export default CompareButtonCard;
