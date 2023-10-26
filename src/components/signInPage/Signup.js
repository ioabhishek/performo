'use client'
import React from 'react'
import styles from './signin.module.css'
import Link from 'next/link'
function Signup() {
    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const email = formData.get("signupemail");
        const username = formData.get("signupusername");
        const password = formData.get("signuppassword");
        const response = await fetch("/api/user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        });
        if(response.ok){
          const {user}=await response.json();
          console.log(user);
        }
      };
  return (
    <>
       <div className={styles.signupbox}>
       <form  onSubmit={handleSubmit}>
       <h4>Username</h4>
       <input
          type="text"
          placeholder="choose a username"
          name="signupusername"
          className={styles.textfield}
        />
        <h4>email</h4>
        <input
          type="email"
          placeholder="Enter your email"
          name="signupemail"
          className={styles.textfield}
        />
        <h4>password</h4>
        <input
          type="password"
          placeholder="Enter your password"
          name="signuppassword"
          className={styles.textfield}
        />
         <h4>re-enter you password</h4>
        <input
          type="password"
          placeholder="re-enter your password"
          name="signuppassword"
          className={styles.textfield}
        />
        <button type="submit" className={styles.signinbtn}>
          Sign Up
        </button>
        <div className={styles.break}>
          <p className={styles.para}>or</p>
        </div>
        <button type="submit" className={styles.signinbtn}>
          Sign Up with Google
        </button>
        </form>
        <h5 className={styles.signup}>
          Already have an account {" "} 
          <Link href="/signin" style={{ color: "blue" }}>
            sign in
          </Link>
        </h5>
       </div>
    </>
  )
}

export default Signup
