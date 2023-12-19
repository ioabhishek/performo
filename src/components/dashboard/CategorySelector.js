'use clinet'
import React, { useState, useEffect } from 'react'
import styles from './dashboard.module.css'
import { CATEGORY } from '@/utils/constants'
import { useAccess } from '@/context/accessContext';
const CategorySelector = ({selectedCategory, setSelectedCategory,counter,setCounter}) => {
  const [category, setCategory] = useState([]);
  const { token } = useAccess();
  const [boot, setBoot] = useState('');
  const [once, setOnce] = useState(true);
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
      if(once && sortedCategory.length > 0){
        setBoot(sortedCategory[0]);
        setSelectedCategory(sortedCategory[0].category_name);
      
      
        setOnce(false);
      }
    }
    fetchCategory();
  }, [selectedCategory]);

  const handleCategoryChange = (event) => {
    console.log(selectedCategory)
    setSelectedCategory(event.target.value);
    console.log(event.target.value)
  }

  return (
    <select className={styles.select_options} id="selectOptions" value={selectedCategory} onChange={handleCategoryChange}>
      <option key={boot.category_id}>{boot.category_name}</option>
      {
        category?.map((item) => (
          <option  key={item.category_id} >{item.category_name}</option>
        ))
      }
    </select>
  )
}

export default CategorySelector
