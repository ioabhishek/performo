'use client'
import Main from '@/components/mainContainer/Main'
import { redirect } from 'next/navigation';
import { useSession } from 'next-auth/react'
import { PulseLoader } from "react-spinners";

import styles from './page.module.css'

import Signin from '@/components/signInPage/Signin'
import Signup from '@/components/signInPage/Signup'
export default function Home() {
  const session = useSession();

  if (session.status === "loading") {
    return (
      <div className="signinbox">
        <PulseLoader
          color="#696CFF"
          size={20}
          data-textid="Loader"
        />
      </div>
    )
  }

  if (session.status === "authenticated") {
    return (
      <>
        <Main/>
      </>
    )
  } else {
    redirect('/login')
  }
}
