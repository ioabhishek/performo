import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './button.module.css'
import { usePathname } from 'next/navigation';

function Button({selectedButtons}) {
   const pathname = usePathname();
   const match = pathname.match(/\/category\/(.+)/);

   async function savePublisherData() {
      const data = {
         userid: '1',
         category: match[1],
         sources: selectedButtons.join(',')
      };

      const url = `https://performo.in/api/save_publisher.php?token_key=@123abcd1366&userid=${data.userid}&category=${data.category}&sources=${data.sources}`;
    
      const response = await fetch(url, {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify(data),
      });
    
      if (response.ok) {
         const result = await response.json();
      } else {
         console.error('Error:', response.status, response.statusText);
      }
   }

   const handleSaveClick = () => {
      savePublisherData();
   };

   return (
      <div className={styles.button} onClick={handleSaveClick}>
         <Image
            src="/save.svg"
            alt="save"
            width={20}
            height={20}
         />
      </div>
   )
}

export default Button