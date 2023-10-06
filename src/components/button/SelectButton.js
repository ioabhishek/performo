import React from 'react'
import styles from './button.module.css'

const SelectButton = (props) => {
   return (
      <li className={styles.sel_btn}>{props.name}</li>
   )
}

export default SelectButton