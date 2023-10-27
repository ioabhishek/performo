"use client";
import React from "react";
import { useSession } from "next-auth/react";
import styles from "./page.module.css"
import {signIn} from 'next-auth/react'
import Link from "next/link";

function Signin() {
    const session = useSession();
    console.log(session);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = session.data.user.email;
    console.log(email);
    const password = formData.get("password");
    console.log(email, password);
    const response = await fetch("/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      
      body: JSON.stringify({ email }),
    });
    if(response.ok){
      router.push("/category/india");
    }
  };
const googlesignin= async ()=>{
  signIn('google',{callbackUrl:"http://localhost:300"})
  // const email = session.data.user.email;
  // const image=session.data.user.image;
  // const name = session.data.user.name;
  //   console.log(email);
  // const response = await fetch("/api/user", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
    
  //   body: JSON.stringify({ email:email }),
  // });
  // if(response.ok){
  //   router.push("/category/india");
  // }
}
  return (
    <div className={styles.signinbox}>
      <form onSubmit={handleSubmit}>
        <h4>email</h4>
        <input
          type="email"
          placeholder="Enter your email"
          name="email"
          className={styles.textfield}
        />
        <h4>password</h4>
        <input
          type="password"
          placeholder="Enter your password"
          name="password"
          className={styles.textfield}
        />

        <button type="submit" className={styles.signinbtn}>
          Sign in
        </button>
        <div className={styles.break}>
          <p className={styles.para}>or</p>
        </div>
        <button onClick={googlesignin} type="submit" className={styles.signinbtn}>
          Sign in with Google
        </button>
        <h5 className={styles.signup}>
          if you don't have an account please{" "}
          <Link href="/signup" style={{ color: "blue" }}>
            sign up
          </Link>
        </h5>
      </form>
    </div>
  );
}

export default Signin;
