'use client'
import React, {useState } from "react";
import Image from "next/image";
import styles from "./navbar.module.css";
import { useSession, signOut } from "next-auth/react";

const UserProfile = () => {
  const { data: session } = useSession();
  const [open, setOpen] = useState(false);

  const userName = session && session.user && session.user.name;
  const userImage = session && session.user && session.user.image;

  const currentTime = new Date();
  const currentHour = currentTime.getHours();

  let greetingMessage = "Good Morning";

  if (currentHour >= 12 && currentHour < 17) {
    greetingMessage = "Good Afternoon";
  } else if (currentHour >= 17) {
    greetingMessage = "Good Evening";
  }

  return (
    <div className={styles.nav_user} onClick={()=>setOpen(!open)}>
      <div className={styles.user_name}>
        <span className={styles.user_name}>
          Hello, <strong>{userName?.split(' ')[0]}</strong>
        </span>
        <br />
        <span className={styles.user_greet}>{greetingMessage}</span>
      </div>
      <div className={styles.user_img}>
        <Image src={userImage? userImage : '/user.jpg'} width={40} height={40} alt="" />
      </div>

      {
        open && <div className={styles.user_options}>
          <div className={styles.user_oplink} onClick={() => signOut()}>Sign Out</div>
        </div>
      }
    </div>
  );
};

export default UserProfile; 