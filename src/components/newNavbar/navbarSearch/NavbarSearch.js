import React from 'react'
import styles from './navbarSearch.module.css'
function NavbarSearch() {
  return (
    <div>
       <div className={styles.nav_search}>
        <input type="search" placeholder="Search (Ctrl+/)" />
      </div>
    </div>
  )
}

export default NavbarSearch
