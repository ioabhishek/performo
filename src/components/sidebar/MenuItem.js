import React from 'react'
import styles from './sidebar.module.css';

const MenuItem = (props) => {
  return (
    <li className="">
      <a href="">
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
        {props.category}
      </a>
    </li>
  )
}

export default MenuItem
