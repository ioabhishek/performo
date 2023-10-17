import './globals.css'
import { Inter } from 'next/font/google';
import Sidebar from '@/components/sideBar/Sidebar';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Performo',
  description: 'Single app solution to spy on your publishing competitors',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body className={inter.className}>
          <Sidebar/>
          {children}
        </body>
    </html>
  )
}
