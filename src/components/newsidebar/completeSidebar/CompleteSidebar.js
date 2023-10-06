import React from 'react'
import  styles from './completeSidebar.module.css'
import Sidebarlogo from '../sidebarlogo/Sidebarlogo'
import SidebarMenu from '../sidebarMenu/SidebarMenu'
function CompleteSidebar() {
  return (
    <div>
      <div className={styles.main_sidebar} >
        <Sidebarlogo/>
        <SidebarMenu/>
      </div>
    </div>
  )
}

export default CompleteSidebar
