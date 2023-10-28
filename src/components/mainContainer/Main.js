'use client';
import React, { useEffect, useState } from 'react';
import styles from './main.module.css';
import MainWrap from '../mainWrap/MainWrap';
import { useSession } from 'next-auth/react'
import { useAccess } from '@/context/accessContext';
import GetAccess from '../getAccess/GetAccess';

const Main = () => {
  // const session = useSession();
  // const [userData, setUserData] = useState(null);
  // const [subscriber,setsubscriber] = useState(false);
  // useEffect(() => {
  //   if (session.status === 'authenticated') {
  //     const { email, image, name } = session.data.user;
  //     if (!userData || userData.email !== email || userData.name !== name || userData.image !== image) {
  //       const fetchData = async () => {
  //         try {
  //           const response = await fetch('/api/user', {
  //             method: 'POST',
  //             headers: {
  //               'Content-Type': 'application/json',
  //             },
  //             body: JSON.stringify({ email, name, image ,subscriber}),
  //           });

            
  //         } catch (error) {
  //           console.error(error);
  //         }

  //         setUserData({ email, name, image });
  //       };

  //       fetchData();
  //     }
  //   }
  // }, [session, userData]);

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
      <div className={styles.main_content}>
        <MainWrap />
      </div>
    );
  } else {
    return (
      <GetAccess/>
    );
  }

};

export default Main;
