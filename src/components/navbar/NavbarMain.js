import React from 'react'
import NavbarSearch from './NavbarSearch'
import NavbarCTAbutton from './NavbarCTAbutton'
import UserProfile from './UserProfile'
import styles from './navbar.module.css'

const NavbarMain = () => {
  return (
    <nav className={styles.main_navbar}>
      <NavbarSearch/>
      <NavbarCTAbutton/>
      <UserProfile/>
    </nav>
  ) 
}

export default NavbarMain
