"use client";
import React from "react";
import styles from "./signin.module.css";

import Link from "next/link";

function Signin() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get("email");
    const password = formData.get("password");
    console.log(email, password);
  };

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
        <button type="submit" className={styles.signinbtn}>
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
