import React from 'react'
import styles from './sidebar.module.css';
import Image from 'next/image'

const Sidebarlogo = () => {
  return (
    <div>
      <a className={styles.main_logo} href="">
        <Image src="/performo.svg" alt="facebook" width={24} height={24} />
      </a>
    </div>
  )
}

export default Sidebarlogo
