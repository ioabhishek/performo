import React, {useState, useEffect} from 'react'
import styles from './compareGrid.module.css';
import { KEYWORD } from '@/utils/constants';

const CompareKeyword = ({id}) => {
   const [keywordData, setKeywordData] = useState([]);

   useEffect(() => {
      const fetchCategory = async () => {
         try {
            const data = await fetch(`${KEYWORD}${id}`);
            if (!data.ok) {
               throw new Error(`HTTP error! Status: ${data.status}`);
            }
            const json = await data.json();
            if (json && Array.isArray(json) && json.length > 0 && json[0].keyword_name) {
               setKeywordData(json[0].keyword_name.split(','));
            } else {
               setKeywordData([]);
               console.error("Invalid data format received");
            }
         } catch (error) {
            console.error("An error occurred while fetching data:", error);
         }
      };
      fetchCategory();
   }, [id]);

   if (keywordData.length === 0) {
      return (
         <div className={styles.compare_tab_itm}>
            <span className='loading_text'>No data...</span>
         </div>
      ); 
   }

   return (
      <div className={styles.compare_tab_itm}>
         <h4>Article Keywords</h4>
         {
            keywordData.map((keyword, index) => (
               <>
                  <span key={index}>{keyword}</span>
               </>
               
            ))
         }
      </div>
   )
}

export default CompareKeyword