'use clinet'
import React, { useState, useEffect } from 'react'
import styles from './dashboard.module.css'
import { CATEGORY } from '@/utils/constants'

const CategorySelector = ({selectedCategory, setSelectedCategory}) => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const fetchCategory = async () => {

      const data = await fetch('https://performo.in/api/get_category.php', {
        method: 'POST',
        headers: {
            Authorization: 'Bearer 0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
        },
      });
      const json = await data.json();
      const sortedCategory = json.sort((a, b) => a.category_name.localeCompare(b.category_name));
      setCategory(sortedCategory);
    }
    fetchCategory();
  }, []);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  }

  return (
    <select className={styles.select_options} id="selectOptions" value={selectedCategory} onChange={handleCategoryChange}>
      <option value="">Select Category</option>
      {
        category?.map((item) => (
          <option  key={item.category_id} >{item.category_name}</option>
        ))
      }
    </select>
  )
}

export default CategorySelector
