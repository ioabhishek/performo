'use client'
import React, { useEffect } from 'react'
import { db } from "@/lib/db";
import { useSession } from "next-auth/react";
function page() {
    const session =  useSession();
      
   // console.log(session);
    useEffect( ()=>{
       
       
        check();
        
    },[session])
    const check = async ()=>{
        const email =  session.data.user.email;
    
    const existingUser = await db.user.findUnique({ where: { email: email } });
    
    if (existingUser.image==='https://lh3.googleusercontent.com/a/ACg8ocKIUTzhA6_FPbHB7hR0lIPTGCa7lQFlwgQ00JI7nWIdSQ=s96-c') {
      
      window.location.href = "/";
    } else {
     
      window.location.href = "/category/india";
    }
   }
  return (
    <div>
      <div><h1>
        
        Hold on verifying you status....
        </h1>
        </div>
    </div>
  )
}

export default page
