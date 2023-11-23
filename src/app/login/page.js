"use client";
import React from "react";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
import styles from "./page.module.css";
import { PulseLoader } from "react-spinners";
import Link from 'next/link';

function Signin() {
  const { status, data: session} = useSession();

  if (status === "loading") {
    return (
      <div className={styles.signinbox}>
        <PulseLoader
          color="#696CFF"
          size={20}
          data-textid="Loader"
        />
      </div>
    )
  }

  return (
    <div className={styles.signinbox}>
      <Image className={styles.plogo} src="./performo.svg" width={200} height={40} alt="" />
      {
        status === "authenticated" ? (
          <>
            <button
              onClick={() => signOut()}
              type="submit"
              className={styles.signinbtn}>
              <Image src="/google-logo.png" width={20} height={20} alt="" />
              Sign Out
            </button>
            <Link href="/">Back to Dashboard</Link>
          </>
        ) : (
          <button
            onClick={() => signIn("google", { callbackUrl: "/wait"})}
            type="submit"
            className={styles.signinbtn}>
            <Image src="/google-logo.png" width={20} height={20} alt="" />
            Sign in with Google
          </button>
        )
      }
    </div>
  );
}

export default Signin;
