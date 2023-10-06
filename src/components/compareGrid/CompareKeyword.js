import React from 'react'
import styles from './compareGrid.module.css';

const CompareKeyword = () => {
   return (
      <div className={styles.compare_tab_itm}>
         <h4>Search Keywords</h4>
         <span>Manufacturing</span>
         <span>Tooling</span>
         <span>Robotics</span>
         <span>Steel</span>
         <span>Engineering</span>
         <span>Servicing</span>
      </div>
   )
}

export default CompareKeyword