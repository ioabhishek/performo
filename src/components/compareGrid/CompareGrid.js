import React, { useState, useEffect } from 'react';
import styles from './compareGrid.module.css';
import CompareWrap from './CompareWrap';
import { usePathname } from 'next/navigation';
import { useSearchContext } from "@/utils/searContext";
import { PulseLoader } from "react-spinners";
import { useSelector } from 'react-redux'
import { useAccess } from '@/context/accessContext';
const CompareGrid = ({ selectedButtons, savedData }) => {
   const [catgList, setCatgList] = useState([]);
   const [categoryId, setCategoryId] = useState(null);
   const pathname = usePathname();
   const match = pathname.match(/\/category\/(.+)/);
   const decodedParam = decodeURIComponent(match[1]);
   const pubList = useSelector((state) => state.data);
   const { searchInput } = useSearchContext();
   const { token } = useAccess();
   useEffect(() => {
      const fetchCatg = async () => {
         try {

            const data = await fetch('https://performo.in/api/get_category.php', {
               method: 'POST',
               headers: {
                  Authorization: token
               },
            });
            const json = await data.json();
            setCatgList(json);
         } catch (error) {
            // console.error('Error fetching categories:', error);
         }
      };
      fetchCatg();
   }, []);

   useEffect(() => {
      catgList.forEach((category) => {
         if (category.category_name === decodedParam) {
            setCategoryId(category.category_id);
         }
      });
   }, [catgList, match, decodedParam]);

   if (categoryId === null) {
      return (
         <div className='loading_wrap'>
            <PulseLoader
               color="#696CFF"
               size={20}
               data-textid="Loader"
            />
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
               searchInput={ searchInput }
            />
         ))}
      </div>
   );
};

export default CompareGrid;
