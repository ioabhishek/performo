import React, { useState, useEffect } from 'react'
import styles from './compareGrid.module.css'
import CompareWrap from './CompareWrap'
import { PUB_CATEGORY } from '@/utils/constants';
import useCategoryMapping from '@/hooks/useCategoryId';
import { usePathname } from 'next/navigation'

const CompareGrid = ({selectedButtons}) => {
   const [pubList, setPubList] = useState([]);
   const [uniquePublisherInfo, setUniquePublisherInfo] = useState([]);

   useEffect(() => {
      fetchPubs();
   }, []);

   const fetchPubs = async () => {
      const data = await fetch(PUB_CATEGORY);
      const json = await data.json();
      setPubList(json);
   };

   useEffect(() => {
      const uniqueInfo = Array.from(new Set(pubList.map(pub => pub.publisher_id))).map(publisherId => {
         const pub = pubList.find(pub => pub.publisher_id === publisherId);
         return {
            publisher_name: pub.publisher_name,
            publisher_id: pub.publisher_id,
            category_id: pub.category_id
         };
      });
      setUniquePublisherInfo(uniqueInfo);
   }, [pubList]);


   // Getting category id from hook
   const getCategoryId = useCategoryMapping(pubList);
   const pathname = usePathname();
   const match = pathname.match(/\/category\/(.+)/);
   const catgId = getCategoryId(match[1]);
   // console.log(catgId)


   return (
      <div className={styles.compare_grid}>
         {
            uniquePublisherInfo.map((uniquePublisher) => (
               <CompareWrap
                  key={uniquePublisher.publisher_id}
                  publisher={uniquePublisher.publisher_name}
                  publisherid={uniquePublisher.publisher_id}
                  categoryid={catgId} 
                  selected={selectedButtons.includes(uniquePublisher.publisher_name)}
               />
            ))
         }
      </div>
   )
}

export default CompareGrid