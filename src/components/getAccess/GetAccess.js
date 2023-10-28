import React from 'react'
import styles from './getAccess.module.css';

const GetAccess = () => {
   return (
      <>
         <div>You don't have access to use below features. Request by entering your email</div>
         <form action="">
            <input type="text" placeholder='Enter your email' />
            <button>Request</button>
         </form>
      </>
   )
}

export default GetAccess