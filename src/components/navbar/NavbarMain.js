'use client'
import React, {useEffect} from 'react'
import NavbarSearch from './NavbarSearch'
import NavbarCTAbutton from './NavbarCTAbutton'
import UserProfile from './UserProfile'
import styles from './navbar.module.css'
import { useSession } from 'next-auth/react'
import { useAccess } from '@/context/accessContext';

const NavbarMain = () => {
  const session = useSession();
  const { accessStatus, checkAccess } = useAccess();

  useEffect(() => {
    if (session.status === "authenticated" && accessStatus === "checking") {
        const userEmail = session.data.user.email;
        checkAccess(userEmail);
    }
  }, [session, accessStatus, checkAccess]);

  
  if (accessStatus === "authenticated"){
    return (
      <nav className={styles.main_navbar}>
        <NavbarSearch/>
        {/* <NavbarCTAbutton/> */}
        <UserProfile/>
      </nav>
    ) 
  } else {
    return null
  }
}

export default NavbarMain
