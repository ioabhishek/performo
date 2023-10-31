'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import styles from './getAccess.module.css';
import { ToastContainer, toast } from 'react-toastify';
import { PulseLoader } from "react-spinners";
import { useSession } from "next-auth/react";
import { useAccess } from "@/context/accessContext";

const GetAccess = () => {
   const [email, setEmail] = useState('');
   const {status, data:session} = useSession();
   const { accessStatus, checkAccess } = useAccess();

   const handleEmailChange = (e) => {
      setEmail(e.target.value)
   }

   const handleSubmit = (e) => {
      e.preventDefault();
      toast.success('Request sent!', {
         position: "top-right",
         autoClose: 3000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
         theme: "light",
      });
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
      fetchData()
      setEmail('')
   }

   useEffect(() => {
      if (status === "authenticated" && accessStatus === "checking") {
         const userEmail = session.user.email;
         checkAccess(userEmail);
      }
   }, [session, accessStatus, checkAccess]);

   if (accessStatus === "authenticated") {
      return (
         <div className='loading_wrap'>
            <PulseLoader
               color="#696CFF"
               size={20}
               data-textid="Loader"
            />
         </div>
      )
   } else if (accessStatus === "unauthenticated") {
      return (
         <div className={styles.access_wrap}>
            <div className={styles.access_text}>You don&apos;t have access to use this feature. <br /> Request by entering your email</div>
            <form action="" onSubmit={(e) => handleSubmit(e)}>
               <input type="email" placeholder='Enter your email...' value={email} onChange={handleEmailChange}/>
               <button type='submit' >Request</button>
            </form>
            <Link href="/login">Back to Login</Link>
         </div>
      )
   }

}

export default GetAccess