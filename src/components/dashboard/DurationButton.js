import React from 'react'
import styles from './dashboard.module.css'

function DurationButton(props) {
  return (
    <span className={styles.dur_btn}>{props.lable}</span>
  )
}

export default DurationButton
