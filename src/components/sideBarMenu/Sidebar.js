'use client'
import React, {useContext} from 'react'
import styles from './sidebar.module.css';
import Sidebarlogo from './Sidebarlogo'
import SidebarMenu from './SidebarMenu'
import { redirect, usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react'

const Sidebar = () => {
  const { status, data: session } = useSession();

  if (status === "loading" || !session) {
    return null;
  }

  return (
    <div className={styles.main_sidebar} >
      <Sidebarlogo/>
      <SidebarMenu/>
    </div>
  )
}

export default Sidebar
