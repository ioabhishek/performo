import React from 'react'
import styles from './categorySelector.module.css'
function CategorySelector() {
  return (
    <div>
      <select className={styles.select_options} id="selectOptions">
          <option value={1}>Cases</option>
          <option value={2}>Contracts</option>
          <option value={3}>Commissions</option>
          <option value={4}>Opportunities</option>
          <option value={5}>Tools</option>
        </select>
    </div>
  )
}

export default CategorySelector
