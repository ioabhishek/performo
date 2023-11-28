import React, { useState, useEffect } from 'react';
import styles from './compareGrid.module.css';
import CompareButton from '../button/CompareButton';
import CompareRanking from './CompareRanking';
import CompareKeyword from './CompareKeyword';

const CompareButtonCard = ({id}) => {
   const [selectedComponentIndex, setSelectedComponentIndex] = useState(null);
   const [buttonInfo, setButtonInfo] = useState([
      { label: 'Ranking' },
      { label: 'Keyword' },
   ]);

   const handleButtonClick = (buttonIndex) => {
      if (selectedComponentIndex === buttonIndex) {
         setSelectedComponentIndex(null);
      } else {
         setSelectedComponentIndex(buttonIndex);
      }
   };

   // Dummy ranking data
   // const rankingData = [
   //    {
   //       rank: 7,
   //       rank_datetime: "2023-10-16 20:00:09",
   //    },
   //    {
   //       rank: 16,
   //       rank_datetime: "2023-10-17 20:00:09",
   //    },
   //    {
   //       rank: 9,
   //       rank_datetime: "2023-10-18 20:00:09",
   //    },
   //    {
   //       rank: 5,
   //       rank_datetime: "2023-10-19 20:00:09",
   //    },
   //    {
   //       rank: 16,
   //       rank_datetime: "2023-10-20 20:00:09",
   //    },
   // ];

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
            {selectedComponentIndex === 0 && <CompareRanking id = {id}/>}
            {selectedComponentIndex === 1 && <CompareKeyword id = {id}/>}
         </div>
      </>
   );
};

export default CompareButtonCard;
