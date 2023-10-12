'use client';
import React, { useEffect, useState } from 'react';
import MenuItem from './MenuItem';
import styles from './sidebar.module.css';
import { PUB_CATEGORY } from "../../utils/constants";

const SidebarMenu = () => {
  const [menuList, setMenuList] = useState([])

  useEffect(() => {
    fetchCategory();
  }, [])

  const fetchCategory = async () => {
    const data = await fetch(PUB_CATEGORY);
    const json = await data.json();
    setMenuList(json);
  }

  const renderMenuItems = () => {
    const renderedCategories = [];

    return menuList.map((category, index) => {
      if (renderedCategories.includes(category.category_name)) {
        return null;
      } else {
        renderedCategories.push(category.category_name);
        return <MenuItem key={index} path={'/tesr/' + category.category_name} name={category.category_name} />;
      }
    });
  };

  return (
    <>
      <ul className={styles.menu_list}>
        {renderMenuItems()}
      </ul>
    </>
  )
}

export default SidebarMenu
