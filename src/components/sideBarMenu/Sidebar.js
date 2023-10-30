'use client'
import React, {useEffect, useContext} from 'react'
import styles from './sidebar.module.css';
import Sidebarlogo from './Sidebarlogo'
import SidebarMenu from './SidebarMenu'
import { useSession } from 'next-auth/react'
import { useAccess } from '@/context/accessContext';

const Sidebar = () => {

  const session = useSession();
  const { accessStatus, checkAccess } = useAccess();

  useEffect(() => {
    if (session.status === "authenticated" && accessStatus === "checking") {
      const userEmail = session.data.user.email;
      checkAccess(userEmail);
    }
  }, [session, accessStatus, checkAccess]);

  if (accessStatus === "authenticated") {
    return (
      <div className={styles.main_sidebar}>
        <Sidebarlogo />
        <SidebarMenu />
      </div>
    );
  } else {
    return null;
  }
}

export default Sidebar
