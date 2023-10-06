import styles from './page.module.css'
import Sidebar from '@/components/sidebar/Sidebar'
import Main from '@/components/mainContainer/Main'
import DashboardMainWrap from '@/components/dashboard/dashboardMainWrap/DashboardMainWrap'
import CompleteSidebar from '@/components/newsidebar/completeSidebar/CompleteSidebar'

export default function Home() {
  return (
    <main>
      <DashboardMainWrap/>
      <CompleteSidebar/>
    </main>
  )
}
