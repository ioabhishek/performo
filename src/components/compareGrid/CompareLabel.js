import React from 'react'
import styles from './compareGrid.module.css'

const CompareLabel = ({publisher}) => {
   return (
      <span className={styles.compare_tabn}>{publisher}</span>
   )
}

export default CompareLabel