import React from 'react'
import Image from 'next/image';
import styles from './compareGrid.module.css';

const CompareHistory = () => {
   return (
      <div className={styles.compare_tab_itm}>
         <h4>Price history</h4>
         <Image src="/history.png" alt="facebook" width={24} height={24} />
      </div>
   )
}

export default CompareHistory