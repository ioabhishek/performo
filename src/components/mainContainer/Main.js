'use client';
import React, { useEffect, useState } from 'react';
import styles from './main.module.css';
import MainWrap from '../mainWrap/MainWrap';
import { useSession } from 'next-auth/react';

const Main = () => {
  const session = useSession();
  const [userData, setUserData] = useState(null);
  const [subscriber,setsubscriber] = useState(false);
  useEffect(() => {
    if (session.status === 'authenticated') {
      const { email, image, name } = session.data.user;
      if (!userData || userData.email !== email || userData.name !== name || userData.image !== image) {
        const fetchData = async () => {
          try {
            const response = await fetch('/api/user', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ email, name, image ,subscriber}),
            });

            
          } catch (error) {
            console.error(error);
          }

          setUserData({ email, name, image });
        };

        fetchData();
      }
    }
  }, [session, userData]);

  return (
    <div className={styles.main_content}>
      <MainWrap />
    </div>
  );
};

export default Main;
