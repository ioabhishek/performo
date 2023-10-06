import React from 'react'
import MenuItem from '../menuItem/MenuItem'
import styles from './sidebarMenu.module.css'
function SidebarMenu() {
  return (
    <div>
      <ul className={styles.menu_list}>
        <MenuItem category="Dashboard" />
        <MenuItem category="Campaigns" />
        <MenuItem category="Audience" />
        <MenuItem category="Creatives" />
        <MenuItem category="Reports" />
        <MenuItem category="Settings" />
        <MenuItem category="Help" />
        <MenuItem category="Logout" />
      </ul>
    </div>
  )
}

export default SidebarMenu
