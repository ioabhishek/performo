import React from 'react'
import NavbarMain from '@/components/newNavbar/NavbarMain'

export default function layout({ children }) {
   return (
      <>
         <div className="main_content">
            <div className="main_wrap">
               <NavbarMain />
               {children}
            </div>
         </div>
      </>
   )
}
