'use client';
import React, { useEffect, useState } from 'react';
import MenuItem from './MenuItem';
import styles from './sidebar.module.css';
import { PUB_CATEGORY } from "../../utils/constants";

const SidebarMenu = () => {
  const [resInfo, setResInfo] = useState(null)

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

  useEffect(() => {
    fetchCategory();
  }, [])

  const fetchCategory = async () => {
    const data = await fetch(PUB_CATEGORY);
    const json = await data.json();
    // setResInfo(json.data);
    console.log(json)
  }

  return (
    <>
      <ul className={styles.menu_list}>
        {
          menuItem.map((item, index) => (
            <MenuItem key={index} path={item.path} name={item.name} />
          ))
        }
      </ul>
    </>
  )
}

export default SidebarMenu
