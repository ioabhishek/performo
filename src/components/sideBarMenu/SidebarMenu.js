'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import MenuItem from './MenuItem';
import styles from './sidebar.module.css';
import { usePathname } from 'next/navigation';
import { CATEGORY } from '../../utils/constants';

const SidebarMenu = () => {
  const pathname = usePathname();
  const [menuList, setMenuList] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [json1, setJson] = useState([]);

  useEffect(() => {
    const fetchCategory = async () => {
      const data = await fetch(CATEGORY);
      const json = await data.json();
      setMenuList(json);
      setJson(json);
    }
    fetchCategory();
  }, []);

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

  const filterMenuList = () => {
    if (searchQuery.trim() === '') {
      setMenuList(json1);
    } else {
      const filteredItems = json1.filter(category => {
        return category.category_name.toLowerCase().includes(searchQuery.toLowerCase());
      });
      setMenuList(filteredItems);
    }
  }

  return (
    <>
      <div className={styles.menu_search}>
        <input
          type="text"
          placeholder="Search category..."
          name="search"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            filterMenuList();
          }}
          className={styles.search}
        />
      </div>
      <ul className={styles.menu_list}>
        <li className={pathname === '/' ? 'menu_link active' : 'menu_link'}>
          <Link href="/">Dashboard</Link>
        </li>
        {renderMenuItems()}
      </ul>
    </>
  )
}

export default SidebarMenu;
