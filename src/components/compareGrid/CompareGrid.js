import React, { useState, useEffect } from 'react';
import styles from './compareGrid.module.css';
import CompareWrap from './CompareWrap';
import { usePathname } from 'next/navigation';
import { PUBLISHER, CATEGORY } from '@/utils/constants';

const CompareGrid = ({ selectedButtons, savedData }) => {
   const [pubList, setPubList] = useState([]);
   const [catgList, setCatgList] = useState([]);
   const [categoryId, setCategoryId] = useState(null);

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
   const decodedParam = decodeURIComponent(match[1]);

   useEffect(() => {
      catgList.forEach((category) => {
         if (category.category_name === decodedParam) {
            setCategoryId(category.category_id);
         }
      });
   }, [catgList, match]);

   if (categoryId === null) {
      return (
         <div className='loading_wrap'>
            <h2 className='loading_text'>Loading...</h2>
         </div>
      ); 
   }

   return (
      <div className={styles.compare_grid}>
         {pubList.map((publisher) => (
            <CompareWrap
               key={publisher.publisher_id}
               publisher={publisher.publisher_name}
               publisherid={publisher.publisher_id}
               categoryid={categoryId}
               selected={selectedButtons.includes(publisher.publisher_name) || savedData.includes(publisher.publisher_name)}
            />
         ))}
      </div>
   );
};

export default CompareGrid;
