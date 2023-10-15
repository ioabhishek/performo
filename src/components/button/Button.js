import React from 'react'
import styles from './button.module.css'

function Button({selectedButtons}) {

   const handleSaveClick = () => {
      const selectedButtonsString = JSON.stringify(selectedButtons);
      localStorage.setItem('selectedButtonsData', selectedButtonsString);
   };

   return (
      <div className={styles.button} onClick={handleSaveClick}>Save</div>
   )
}

export default Button