import React from 'react'
import MenuItem from './MenuItem';
import styles from './sidebar.module.css';


const SidebarMenu = () => {
  const menuItem=[
    {
      path:"/",
      name:"Dashboard",
    },
    {
      path:"/latest",
      name:"Latest",
    },
    {
      path:"/sports",
      name:"Sports",
    },
    {
      path:"/technology",
      name:"Technology",
    },
    {
      path:"/business",
      name:"Business",
    },
    {
      path:"/finance",
      name:"Finance",
    },
    {
      path:"/worldcup",
      name:"WorldCup",
    }
  ]

  return (
    <div>
      <ul className={styles.menu_list}>

        {
          menuItem.map((item, index) => (
            <MenuItem key={index} path={item.path} name={item.name} />
          ))
        }
        
      </ul>
    </div>
  )
}

export default SidebarMenu
