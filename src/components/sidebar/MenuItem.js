import React from 'react'
import Link from 'next/link';
import styles from './sidebar.module.css';
// import { useRouter } from 'next/router';

// const router = useRouter();

// Function to determine if a menu item is active
// const isMenuItemActive = (href) => router.pathname === href;

const MenuItem = (props) => {
  return (
    <li className='menu_link'>
      <Link href={props.path}>{props.name}</Link>
    </li> 
  )
}

export default MenuItem
