'use client'
import React, { useEffect } from 'react'
import styles from './main.module.css';
import MainWrap from '../mainWrap/MainWrap';
import { useSession } from 'next-auth/react';

const Main = () => {
  const session = useSession();

  useEffect(() => {
    if (session.status === "authenticated") {
      const fetchData = async () => {
        const email = session.data.user.email;
        const image = session.data.user.image;
        const name = session.data.user.name;
        
        console.log(email);
        
        const response = await fetch("/api/user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        });

     
      };

      fetchData(); 
    }
  }, [session]);

  return (
    <div className={styles.main_content}>
      <MainWrap />
    </div>
  );
}

export default Main;
