import React, {useState, useEffect} from 'react'
import styles from './compareGrid.module.css';
import { AUTHOR } from '@/utils/constants';

const CompareAuthor = ({id}) => {
   const [authorData, setAuthorData] = useState([]);

   useEffect(() => {
      const fetchCategory = async () => {
         try {
            const data = await fetch(`${AUTHOR}${id}`);
            if (!data.ok) {
               throw new Error(`Network response was not ok (status: ${data.status})`);
            }
            const json = await data.json();
            setAuthorData(json);
         } catch (error) {
            console.error("An error occurred while fetching data:", error);
         }
      }
    
      fetchCategory();
   }, [id]);
    

   if (authorData.length === 0) {
      return (
         <div className={styles.compare_tab_itm}>
            <span className='loading_text'>No data...</span>
         </div>
      ); 
   }

   return (
      <div className={styles.compare_tab_itm}>
         <h4>Article Author</h4>
         <span>{authorData.author}</span>
      </div>
   )
}

export default CompareAuthor