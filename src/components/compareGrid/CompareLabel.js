import React from 'react'
import styles from './compareGrid.module.css'

const CompareLabel = (props) => {
   return (
      <span class={styles.compare_tabn}>{props.name}</span>
   )
}

export default CompareLabel