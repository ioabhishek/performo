import React from 'react'
import NavbarSearch from '../navbarSearch/NavbarSearch'
import NavbarCTAbutton from '../navbarCTAbutton/NavbarCTAbutton'
import UserProfile from '../userProfile/UserProfile'
import styles from './navbarMain.module.css'
function NavbarMain() {
  return (
    <div>
       <nav className={styles.main_navbar}>
        <NavbarSearch/>
        <NavbarCTAbutton/>
        <UserProfile/>
       </nav>
    </div>
  )
}

export default NavbarMain
