import React from "react";
import styles from "./compareGrid.module.css";
import CompareCard from "./CompareCard";
import CompareLabel from "./CompareLabel";

const cards = [
   {
      id: 1,
      title: "Card 1",
      content: "Content for Card 1",
      image: "/test-img.jpg",
   },
   {
      id: 2,
      title: "Card 2",
      content: "Content for Card 2",
      image: "/test-img.jpg",
   },
];

const CompareWrap = ({ id, selected }) => {
   return (
      <div className={`${styles.compare_wrap} ${selected ? styles.visible : ''}`}>
         <CompareLabel name={`Catg ${id}`} />
         {
            cards.map((card) => (
               <CompareCard
                  key={card.id}
                  id={card.id}
                  title={card.title}
                  content={card.content}
                  image={card.image}
               />
            ))
         }
      </div>
   );
}

export default CompareWrap;
