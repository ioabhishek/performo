import React, { useState, useEffect } from 'react'
import styles from './compareGrid.module.css'
import CompareWrap from './CompareWrap'
import { usePathname } from 'next/navigation'
import { PUBLISHER, CATEGORY } from '@/utils/constants';

const CompareGrid = ({selectedButtons, savedData}) => {
   const [pubList, setPubList] = useState([]);
   const [catgList, setCatgList] = useState([]);
   
   useEffect(() => {
      const fetchPubs = async () => {
         const data = await fetch(PUBLISHER);
         const json = await data.json();
         setPubList(json);
      };
      fetchPubs();

      const fetchCatg = async () => {
         const data = await fetch(CATEGORY);
         const json = await data.json();
         setCatgList(json);
      };
      fetchCatg();
   }, []);

   const pathname = usePathname();
   const match = pathname.match(/\/category\/(.+)/);
   let categoryId;

   catgList.forEach(category => {
      if (category.category_name === match[1]) {
         categoryId = category.category_id;
      }
   });
  
   return (
      <div className={styles.compare_grid}>
         {
            pubList.map((publisher) => (
               <CompareWrap
                  key={publisher.publisher_id}
                  publisher={publisher.publisher_name}
                  publisherid={publisher.publisher_id}
                  categoryid={categoryId} 
                  selected={selectedButtons.includes(publisher.publisher_name) || savedData.includes(publisher.publisher_name)}
               />
            ))
         }
      </div>
   )
}

export default CompareGrid