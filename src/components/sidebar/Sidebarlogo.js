import React from 'react'
import styles from './sidebar.module.css';
import Image from 'next/image'

const Sidebarlogo = () => {
  return (
    <>
      <a className={styles.main_logo} href="">
        <Image src="/performo.svg" alt="facebook" width={24} height={24} />
      </a>
    </>
  )
}

export default Sidebarlogo
