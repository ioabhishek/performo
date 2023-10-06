import React from 'react'
import styles from './main.module.css';
import MainWrap from '../mainWrap/MainWrap';

const Main = () => {
   return (
      <div className={styles.main_content}>
         <MainWrap/>
      </div>
   )
}

export default Main