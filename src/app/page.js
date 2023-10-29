'use client'
import Main from '@/components/mainContainer/Main'
import { redirect } from 'next/navigation';
import { useSession } from 'next-auth/react'
import { PulseLoader } from "react-spinners";

export default function Home() {
  const session = useSession();

  if (session.status === "loading") {
    // return <div>Loading...</div>;
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

  // const {status, data: session} =  useSession({
  //   required: true,
  //   onUnauthenticated() {
  //     redirect('/login')
  //   }
  // });

  // if (status === "loading" || !session) {
  //   return null;
  // }

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
