import React, { useState } from "react";
import Image from "next/image";
import styles from "./compareGrid.module.css";
import CompareButtonCard from "./CompareButtonCard";

const buttonsData = [
   [
      { label: 'B1', name:'history', content: 'Content for Button 1' },
      { label: 'B2', name:'keyword', content: 'Content for Button 2' },
      { label: 'B3', name:'author', content: 'Content for Button 3' },
   ],
];

const CompareCard = ({ id, title, content, image }) => {
   const [selectedButtons, setSelectedButtons] = useState(
      new Array(buttonsData.length).fill(null)
   );
 
   const handleButtonClick = (cardIndex, buttonIndex) => {
      const updatedSelectedButtons = [...selectedButtons];
   
      if (
         updatedSelectedButtons[cardIndex] !== null &&
         updatedSelectedButtons[cardIndex].button === buttonIndex
      ) {
         updatedSelectedButtons[cardIndex] = null;
      } else {
         updatedSelectedButtons[cardIndex] = { card: cardIndex, button: buttonIndex };
      }
 
      setSelectedButtons(updatedSelectedButtons);
   };

   return (
      <div className={styles.compare_card}>
         <Image
            className={styles.compare_card_img}
            src={image}
            alt="facebook"
            width={300}
            height={200}
         />
         <h3 className={styles.compare_card_ttl}>{title}</h3>
         <h4 className={styles.compare_card_sttl}>{content}</h4>

         {buttonsData.map((data, cardIndex) => (
           <CompareButtonCard
             key={cardIndex}
             cardIndex={cardIndex}
             buttonsData={data}
             selectedButton={selectedButtons[cardIndex]}
             onButtonClick={handleButtonClick}
           />
         ))}

         <div className={styles.rank_no}>1</div>
      </div>
   );
};

export default CompareCard;