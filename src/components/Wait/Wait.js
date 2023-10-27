'use client'
import React, { useEffect, useState } from 'react';
import { db } from "@/lib/db";
import { useSession } from 'next-auth/react';

function Wait() {
    const session = useSession();
  const [email, setEmail] = useState(null);
    // console.log(session);
    // console.log(email);
  useEffect(() => {
    if(session.status === 'authenticated')
      { 
      const userEmail = session.data.user.email;
      const { email, image, name } = session.data.user;
      const subscriber =false;
      const fetchData = async () => {
        try {
          const response = await fetch('/api/check', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: userEmail}),
          });
        const data = await response.json();
        console.log(data);
          if(data.result==="suscriber"){
            window.location.href = "/";
          }
          else{
            window.location.href = "/category/india";   
          }
          
        } catch (error) {
          console.error(error);
        }
        try {
          const response = await fetch('/api/user', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, name, image ,subscriber}),
          });

          
        } catch (error) {
          console.error(error);
        }
       
      };
    
      fetchData();
    }
    
  }, [session]);

  const check = async (email) => {
    const existingUser = await db.user.findUnique({ where: { email: email } });
    console.log("here");
    if (existingUser && existingUser.image === 'https://lh3.googleusercontent.com/a/ACg8ocKIUTzhA6_FPbHB7hR0lIPTGCa7lQFlwgQ00JI7nWIdSQ=s96-c') {
      window.location.href = "/";
    } else {
      window.location.href = "/category/india";
    }
  };

  return (
    <div>
      <div>
        <h1>Hold on verifying your status....</h1>
      </div>
    </div>
  );
}

export default Wait;
