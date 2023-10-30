'use clinet'
import React, { useState, useEffect } from 'react'
import styles from './dashboard.module.css'
import { CATEGORY } from '@/utils/constants'

const CategorySelector = ({selectedCategory, setSelectedCategory}) => {
  const [category, setCategory] = useState([]);
  // const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    const fetchCategory = async () => {
      const data = await fetch(CATEGORY);
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
