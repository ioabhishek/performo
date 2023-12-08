import React, {useState, useEffect} from 'react'
import styles from './compareGrid.module.css';
import { useAccess } from '@/context/accessContext';
const CompareAuthor = ({id}) => {
   const [authorData, setAuthorData] = useState([]);
   const { token } = useAccess();
   useEffect(() => {
      const fetchCategory = async () => {
         try {
            const data = await fetch(apiEndpoint, {
               method: 'POST',
               headers: {
                  Authorization: token
               },
               body: new URLSearchParams({ article_id: id })
            });
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
            <span className='loading_text'>...</span>
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