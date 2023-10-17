import { useEffect, useState } from 'react';

function useCategoryMapping(data) {
   const [categoryMap, setCategoryMap] = useState({});

   useEffect(() => {
      const mapping = {};

      // Iterate through the data array to create a mapping of category names to category IDs
      data.forEach(item => {
         if (item.category_name && item.category_id) {
         mapping[item.category_name] = item.category_id;
         }
      });

      // Set the category map in the state
      setCategoryMap(mapping);
   }, [data]);
   
   // Function to get the category ID based on the category name
   const getCategoryId = categoryName => {
      return categoryMap[categoryName];
   };

   return getCategoryId;
}

export default useCategoryMapping;
