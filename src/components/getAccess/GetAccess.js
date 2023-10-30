'use client'
import React, { useState } from 'react'
import styles from './getAccess.module.css';
import Link from 'next/link';

const GetAccess = () => {
   const [email, setEmail] = useState('');

   const handleEmailChange = (e) => {
      setEmail(e.target.value)
   }

   const fetchData = async() => {
      try{
         const response = await fetch('/api/access', {
            method: "POST",
            headers: {
               'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email })
         })
      } catch(error) {
         console.log(error)
      }
   }

   return (
      <div className={styles.access_wrap}>
         <div className={styles.access_text}>You don&apos;t have access to use this feature. <br /> Request by entering your email</div>
         <form action="" onSubmit={() => fetchData()}>
            <input type="text" placeholder='Enter your email...' onChange={handleEmailChange}/>
            <button type='submit'>Request</button>
         </form>
         <Link href="/login">Back to Login</Link>
      </div>
   )
}

export default GetAccess