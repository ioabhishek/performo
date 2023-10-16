import React from 'react'
import styles from './button.module.css'
import { usePathname } from 'next/navigation';


function Button({selectedButtons}) {
   const pathname = usePathname();
   const match = pathname.match(/\/category\/(.+)/);

   const handleSaveClick = () => {
      const selectedButtonsString = JSON.stringify(selectedButtons);
      localStorage.setItem('selectedButtons'+match[1], selectedButtonsString);
   };

   return (
      <div className={styles.button} onClick={handleSaveClick}>Save</div>
   )
}

export default Button