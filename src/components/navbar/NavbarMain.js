'use client'
import React from 'react'
import NavbarSearch from './NavbarSearch'
import NavbarCTAbutton from './NavbarCTAbutton'
import UserProfile from './UserProfile'
import styles from './navbar.module.css'
import { useSession } from 'next-auth/react'

const NavbarMain = () => {
  const { status, data: session } = useSession();

  if (status === "loading" || !session) {
    return null;
  }


  return (
    <nav className={styles.main_navbar}>
      <NavbarSearch/>
      <NavbarCTAbutton/>
      <UserProfile/>
    </nav>
  ) 
}

export default NavbarMain
