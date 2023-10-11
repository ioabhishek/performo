import React from 'react'
import styles from './compareGrid.module.css'
import CompareHistory from "./CompareHistory";
import CompareKeyword from "./CompareKeyword";
import CompareAuthor from "./CompareAuthor";
import CompareButton from '../button/CompareButton'

const CompareButtonCard = ({ cardIndex, buttonsData, selectedButton, onButtonClick }) => {
   if (selectedButton === undefined) {
      selectedButton = null;
   }

   return (
      <>
         <div className={styles.compare_icns}>
            {buttonsData.map((button, buttonIndex) => (
               <CompareButton
                  key={buttonIndex}
                  label={button.label}
                  name={button.name}
                  content={button.content}
                  selected={
                     selectedButton &&
                     selectedButton.card === cardIndex &&
                     selectedButton.button === buttonIndex
                  }
                  onClick={() => onButtonClick(cardIndex, buttonIndex)} // Pass cardIndex here
               />
            ))}       
         </div>
         <div className={styles.compare_tab_wrp}>
            {selectedButton && (
               <div className={styles.info}>
                  {buttonsData[selectedButton.button].content}
               </div>
            )}
            {/* <CompareHistory/>
            <CompareKeyword/>
            <CompareAuthor/> */}
         </div>
      </>
   )
}

export default CompareButtonCard