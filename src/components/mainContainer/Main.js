import React from 'react'
import styles from './main.module.css';
import Navbar from '../navbar/Navbar';
import MainWrap from '../mainWrap/MainWrap';

const Main = () => {
   return (
      <div className={styles.main_content}>
         <Navbar/>
         <MainWrap/>
      </div>
   )
}

export default Main