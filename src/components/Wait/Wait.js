"use client"
import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useAccess } from "@/context/accessContext";
import styles from './wait.module.css'
import { PulseLoader } from "react-spinners";
import { redirect } from "next/navigation";

function Wait() {
  const session = useSession();
  const { accessStatus, checkAccess } = useAccess();
console.log(session)
  useEffect(() => {
    if (session.status === "authenticated" && accessStatus === "checking") {
      const userEmail = session.data.user.email;
      checkAccess(userEmail);
    }
  }, [session, accessStatus, checkAccess]);

  useEffect(() => {
    if (accessStatus === "authenticated") {
      redirect('/')
    } else if (accessStatus === "unauthenticated") {
      redirect('/access')
    }
  }, [accessStatus]);

  return (
    <div className={styles.wait_wrap}>
      <h1 className={styles.wait_text}>Hold on, checking for access...</h1>
      <PulseLoader
          color="#696CFF"
          size={20}
          data-textid="Loader"
        />
    </div>
  );
}

export default Wait;
