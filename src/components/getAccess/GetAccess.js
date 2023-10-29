import React from 'react'
import styles from './getAccess.module.css';
import Link from 'next/link';

const GetAccess = () => {
   return (
      <div className={styles.access_wrap}>
         <div className={styles.access_text}>You don't have access to use this feature. <br /> Request by entering your email</div>
         <form action="">
            <input type="text" placeholder='Enter your email...' />
            <button>Request</button>
         </form>
         <Link href="/login">Back to Login</Link>
      </div>
   )
}

export default GetAccess