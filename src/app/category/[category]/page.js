'use client'
import React, { useState } from 'react'
import SelectStrip from '@/components/selectStrip/SelectStrip'
import CompareGrid from '@/components/compareGrid/CompareGrid'
import NavbarMain from '@/components/newNavbar/NavbarMain'
import useButtonSelection from '@/hooks/useButtonSelection'

const Page = () => {

   const [selectedButtons, handleButtonSelect ] = useButtonSelection();

   return (
      <>
         <div className='main_content'>
            <div className='main_wrap'>
               <NavbarMain/>
               <SelectStrip selectedButtons={selectedButtons} handleButtonSelect={handleButtonSelect}/>
               <CompareGrid selectedButtons={selectedButtons}/>
            </div>
         </div>
      </>
   )
}

export default Page