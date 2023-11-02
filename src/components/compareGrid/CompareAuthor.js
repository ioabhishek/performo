import React, {useState, useEffect} from 'react'
import styles from './compareGrid.module.css';

const CompareAuthor = ({id}) => {
   const [authorData, setAuthorData] = useState([]);

   useEffect(() => {
      const fetchCategory = async () => {
         try {
            const data = await fetch(apiEndpoint, {
               method: 'POST',
               headers: {
                  Authorization: 'Bearer 0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
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