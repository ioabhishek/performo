import React from 'react'
import Image from 'next/image'
import styles from './userProfile.module.css'
function UserProfile() {
  return (
   
      <div className={styles.nav_user}>
        <div className={styles.user_name}>
          <span className={styles.user_name}>
            Hello, <strong>Jonathon</strong>
          </span>
          <br />
          <span className={styles.user_greet}>Good Morning</span>
        </div>
        <div className={styles.user_img}>
          <Image src="/user.jpg"  width={40}
      height={40}alt="" />
        </div>
      </div>
 
  )
}

export default UserProfile
