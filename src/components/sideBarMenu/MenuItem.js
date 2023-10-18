'use client'
import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation'

const MenuItem = (props) => {
  const pathname = usePathname()

  return (
    <>
      <li className={pathname === props.path ? 'menu_link active' : 'menu_link'}>
        <Link href={props.path}>{props.name}</Link>
      </li> 
    </>
  )
}

export default MenuItem
