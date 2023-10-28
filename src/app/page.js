import Main from '@/components/mainContainer/Main'
import { useSession } from 'next-auth/react'

export default function Home() {

  return (
    <div>
      <Main/>
    </div>
  )
}
