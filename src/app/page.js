import Image from 'next/image'
import styles from './page.module.css'
import Sidebar from '@/components/sidebar/Sidebar'

export default function Home() {
  return (
    <main>
      <h1>Home Page</h1>
      <Sidebar/>
    </main>
  )
}
