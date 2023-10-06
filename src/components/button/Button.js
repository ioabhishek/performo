import React from 'react'
import styles from './button.module.css'

function Button(props) {

   return (
      <div className={styles.button}>{props.name}</div>
   )
}

export default Button