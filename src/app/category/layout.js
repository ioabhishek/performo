import React from 'react'
import NavbarMain from '@/components/navbar/NavbarMain'
import { SearchContextProvider } from '@/utils/searContext'

export default function layout({ children }) {
   return (
      <SearchContextProvider>
         <div className="main_content">
            <div className="main_wrap">
               <NavbarMain />
               {children}
            </div>
         </div>
      </SearchContextProvider>
   )
}
