import React from 'react'
import styles from './sidebar.module.css';
import Sidebarlogo from './Sidebarlogo'
import SidebarMenu from './SidebarMenu'


const Sidebar = () => {
  return (
    <div className={styles.main_sidebar} >
      <Sidebarlogo/>
     
      <SidebarMenu/>
    </div>
  )
}

export default Sidebar
