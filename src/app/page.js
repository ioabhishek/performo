'use client'
import Main from '@/components/mainContainer/Main'
import { redirect } from 'next/navigation';
import { useSession } from 'next-auth/react'

export default function Home() {
  const {status, data: session} =  useSession({
    required: true,
    onUnauthenticated() {
      // redirect('/login?callbackUrl=/protected/client')
      redirect('/login')
    }
  });

  if (status === "loading" || !session) {
    return null;
  }

  return (
    <div>
      <Main/>
    </div>
  )
}
