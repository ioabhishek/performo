import Sidebar from '@/components/sideBar/Sidebar';
import './globals.css'
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Performo',
  description: 'Single app solution to spy on your publishing competitors',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <>
   <Sidebar/>
      <body className={inter.className}>{children}</body>
      
      </>
    </html>
  )
}
