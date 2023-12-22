'use client'
import React from 'react'
import NavbarMain from '@/components/navbar/NavbarMain'
import { SearchContextProvider } from '@/utils/searContext'

export default function layout({ children }) {
   document.addEventListener('contextmenu', event => event.preventDefault());
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
