'use client';
import React, { useEffect, useState } from 'react';
import MenuItem from './MenuItem';
import styles from './sidebar.module.css';
import { PUB_CATEGORY } from "../../utils/constants";



const SidebarMenu = () => {
  const [menuList, setMenuList] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [json1,setjson]=useState([]);
  useEffect(() => {
    fetchCategory();
  }, []);

  const fetchCategory = async () => {
    const data = await fetch(PUB_CATEGORY);
    const json = await data.json();
    setMenuList(json);
    setjson(json);
  }

  const renderMenuItems = () => {
    const renderedCategories = [];

    return menuList.map((category, index) => {
      if (renderedCategories.includes(category.category_name)) {
        return null;
      } else {
        renderedCategories.push(category.category_name);
        return <MenuItem key={index} path={'/category/' + category.category_name} name={category.category_name} />;
      }
    });
  };

  const search = () => {
    if (searchQuery.trim() === '') {
     
      setMenuList(json1);
    } else {
    const filteredItems = menuList.filter(category => {
      return category.category_name.toLowerCase().includes(searchQuery.toLowerCase());
    });
    setMenuList(filteredItems);
  }
  }
  const clear = () => {
    setSearchQuery('');
    setMenuList(json1);
  }
  return (
    <>
    <div className={styles.main}>

      <input
        type="text"
        placeholder="Search.."
        name="search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className={styles.search}
   
        />
        </div>
      <button type="submit" onClick={search} className={styles.button}>Submit</button>
      <button type="submit" onClick={clear} className={styles.button}>clear</button>
      <ul className={styles.menu_list}>
        {renderMenuItems()}
      </ul>
    </>
  )
}

export default SidebarMenu;
