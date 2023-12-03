'use clinet'
import React, { useState, useEffect } from 'react'
import styles from './dashboard.module.css'
import { CATEGORY } from '@/utils/constants'
import { useAccess } from '@/context/accessContext';
const CategorySelector = ({selectedCategory, setSelectedCategory}) => {
  const [category, setCategory] = useState([]);
  const { token } = useAccess();
  useEffect(() => {
    
    const fetchCategory = async () => {

      const data = await fetch('https://performo.in/api/get_category.php', {
        method: 'POST',
        headers: {
            Authorization: token
        },
      });
      const json = await data.json();
      const sortedCategory = json.sort((a, b) => a.category_name.localeCompare(b.category_name));
      setCategory(sortedCategory);
    }
    fetchCategory();
  }, [selectedCategory]);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  }

  return (
    <select className={styles.select_options} id="selectOptions" value={selectedCategory} onChange={handleCategoryChange}>
      <option value="">Category</option>
      {
        category?.map((item) => (
          <option  key={item.category_id} >{item.category_name}</option>
        ))
      }
    </select>
  )
}

export default CategorySelector
