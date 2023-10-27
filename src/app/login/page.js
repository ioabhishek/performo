"use client";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import styles from "./page.module.css";

function Signin() {
  const { status, data: session} = useSession();
  // console.log(session);

  return (
    <div className={styles.signinbox}>
      <h2>Welcome back !</h2>
      {
        status === "authenticated" ? (
          <button
            onClick={() => signOut()}
            type="submit"
            className={styles.signinbtn}>
            Sign Out
          </button>
        ) : (
          <button
            onClick={() => signIn("google", { callbackUrl: "/wait"})}
            type="submit"
            className={styles.signinbtn}>
            Sign in with Google
          </button>
        )
      }
    </div>
  );
}

export default Signin;
