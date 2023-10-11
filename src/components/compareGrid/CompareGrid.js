import React from 'react'
import styles from './compareGrid.module.css'
import CompareWrap from './CompareWrap'
import useButtonSelection from '@/hooks/useButtonSelection';

const cards = [
   { id: 1, isVisible: false },
   { id: 2, isVisible: false },
   { id: 3, isVisible: false },
   { id: 4, isVisible: false },
   { id: 5, isVisible: false },
   { id: 6, isVisible: false },
   { id: 7, isVisible: false },
   { id: 8, isVisible: false },
];

const CompareGrid = ({selectedButtons}) => {

   return (
      <div className={styles.compare_grid}>
         {
            cards.map((card) => (
               <CompareWrap
                  key={card.id}
                  id={card.id}
                  selected={selectedButtons.includes(card.id)}
               />
            ))
         }
      </div>
   )
}

export default CompareGrid