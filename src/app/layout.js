import './globals.css'
import { Inter } from 'next/font/google';
import Sidebar from '@/components/sideBarMenu/Sidebar';
import Authprovider from '@/components/Authprovider/Authprovider';
import { ToastContainer } from '@/utils/nextToast';
import 'react-toastify/dist/ReactToastify.css';
import { AccessProvider } from '@/context/accessContext';
import { Providers } from '@/redux/providers';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Performo',
  description: 'Single app solution to spy on your publishing competitors',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Authprovider>
          <AccessProvider>
            <Providers>
              <Sidebar/>
              {children}
            </Providers>
            <ToastContainer/>
          </AccessProvider>
        </Authprovider>
      </body>
    </html>
  )
}