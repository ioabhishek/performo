'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import styles from './getAccess.module.css';
import { ToastContainer, toast } from 'react-toastify';
import { PulseLoader } from "react-spinners";
import { useSession } from "next-auth/react";
import { useAccess } from "@/context/accessContext";
import { redirect } from 'next/navigation';

const GetAccess = () => {
   const {status, data:session} = useSession();
   const { accessStatus, checkAccess } = useAccess();

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
      const requestAccess = async() => {
         if (status === "authenticated" && accessStatus === "unauthenticated"){
            const userEmail = session.user.email;
            try{
               const data = await fetch('https://performo.in/api/request.php', {
                  method: 'POST',
                  headers: {
                        Authorization: 'Bearer 0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
                  },
                  body: new URLSearchParams({ email : userEmail })
               });
            } catch(error) {
               console.log(error)
            }
         }

      }
      requestAccess()
   }

   useEffect(() => {
      if (status === "authenticated" && accessStatus === "checking") {
         const userEmail = session.user.email;
         checkAccess(userEmail);
      }
   }, [session, accessStatus, checkAccess]);

   if (accessStatus === "checking") {
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
            <div className={styles.access_text}>You don&apos;t have access to use this feature. <br /> Click below to request.</div>
            <form action="" onSubmit={(e) => handleSubmit(e)}>
               <button type='submit' >Request</button>
            </form>
            <Link href="/login">Back to Login</Link>
         </div>
      )
   }
   else{
      redirect('/')
   }

}

export default GetAccess