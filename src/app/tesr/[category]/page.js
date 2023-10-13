'use client'
import React, { useState } from 'react'
import Sidebar from '@/components/sideBar/Sidebar'
import Main from '@/components/mainContainer/Main'
import SelectStrip from '@/components/selectStrip/SelectStrip'
import CompareGrid from '@/components/compareGrid/CompareGrid'
import NavbarMain from '@/components/newNavbar/NavbarMain'
import Button from '@/components/button/Button'
import SelectButton from '@/components/button/SelectButton'
import styles from '../page.module.css'
import CompareWrap from '@/components/compareGrid/CompareWrap'

const buttons = [
   { id: 1, title: 'Button 1' },
   { id: 2, title: 'Button 1' },
   { id: 3, title: 'Button 1' },
   { id: 4, title: 'Button 1' },
   { id: 5, title: 'Button 1' },
   { id: 6, title: 'Button 1' },
   { id: 7, title: 'Button 1' },
   { id: 8, title: 'Button 1' },
]

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

const Page = () => {
   const [selectedButtons, setSelectedButtons] = useState([]);
   
   const handleButtonSelect = (buttonId) => {
      if (selectedButtons.includes(buttonId)) {
         setSelectedButtons(selectedButtons.filter(id => id !== buttonId));
      } else if (selectedButtons.length < 4) {
         setSelectedButtons([...selectedButtons, buttonId]);
      }
   };

   return (
      <>
         <Sidebar/>
         <div className='main_content'>
            <div className='main_wrap'>

               <NavbarMain/>

               <div className={styles.tstrip_wrap}>
                  <div className={styles.tstrip_con}>
                     <ul className={styles.tab_strip}>
                        {
                           buttons.map((button) => (
                              <SelectButton
                                 key={button.id}
                                 id={button.id}
                                 label={`Catg ${button.id}`}
                                 selected={selectedButtons.includes(button.id)}
                                 onSelect={handleButtonSelect}
                              />
                           ))
                        }
                     </ul>
                     <span>Please select above options to compare. Max of 4 can be be selected at once.</span>
                  </div>
                  <Button name="Save"/>
               </div>

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

            </div>
         </div>
      </>
   )
}

export default Page