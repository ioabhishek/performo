import React from 'react'
import styles from './selectStrip.module.css'
import SelectButton from '@/components/button/SelectButton'
import useButtonSelection from '@/hooks/useButtonSelection'

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

const SelectButtons = () => {
   const [selectedButtons, handleButtonSelect] = useButtonSelection([]);

   return (
      <ul className={styles.tab_strip}>
         {
            buttons.map((button) => (
               <SelectButton
                  key={button.id}
                  id={button.id}
                  label={`Catg ${button.id}`}
                  selected={() => selectedButtons.includes(button.id)}
                  onSelect={() => handleButtonSelect(button.id)}
               />
            ))
         }
      </ul>
   )
}

export default SelectButtons