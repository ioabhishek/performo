import React, { useState } from 'react';
import styles from './compareGrid.module.css';
import CompareButton from '../button/CompareButton';
import CompareHistory from './CompareHistory';
import CompareKeyword from './CompareKeyword';
import CompareAuthor from './CompareAuthor';

const CompareButtonCard = ({id}) => {

   const [selectedComponentIndex, setSelectedComponentIndex] = useState(null);
   const [buttonInfo, setButtonInfo] = useState([
      { label: 'Ranking' },
      { label: 'Keyword' },
      { label: 'Author' }
   ]);
    

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
            {selectedComponentIndex === 0 && <CompareHistory id = {id}/>}
            {selectedComponentIndex === 1 && <CompareKeyword id = {id}/>}
            {selectedComponentIndex === 2 && <CompareAuthor id = {id}/>}
         </div>
      </>
   );
};

export default CompareButtonCard;
