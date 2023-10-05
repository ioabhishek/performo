import styles from './page.module.css'
import Sidebar from '@/components/sidebar/Sidebar'
import Main from '@/components/mainContainer/Main'

export default function Home() {
  return (
    <main>
      <Sidebar/>
      <Main/>
    </main>
  )
}
