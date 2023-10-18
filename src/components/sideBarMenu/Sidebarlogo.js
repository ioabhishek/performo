import React from 'react'
import styles from './sidebar.module.css';
import Image from 'next/image'
import Link from 'next/link';
const Sidebarlogo = () => {
  return (
    <>
      <Link className={styles.main_logo} href="/">
        <Image src="/performo.svg" alt="facebook" width={24} height={24} />
      </Link>
    </>
  )
}

export default Sidebarlogo
