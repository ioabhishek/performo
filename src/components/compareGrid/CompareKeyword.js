import React, {useState, useEffect} from 'react'
import styles from './compareGrid.module.css';
import { KEYWORD } from '@/utils/constants';

const CompareKeyword = ({id}) => {
   const [keywordData, setKeywordData] = useState([]);

   // useEffect(() => {
   //    const fetchCategory = async () => {
   //       try {
   //          const data = await fetch(`${KEYWORD}${id}`);
   //          if (!data.ok) {
   //             throw new Error(`HTTP error! Status: ${data.status}`);
   //          }
   //          const json = await data.json();
   //          if (json && Array.isArray(json) && json.length > 0 && json[0].keyword_name) {
   //             setKeywordData(json[0].keyword_name.split(','));
   //          } else {
   //             setKeywordData([]);
   //             console.error("Invalid data format received");
   //          }
   //       } catch (error) {
   //          console.error("An error occurred while fetching data:", error);
   //       }
   //    };
   //    fetchCategory();
   // }, [id]);

   useEffect(() => {
      const fetchkw = async () => {
         try {
            const data = await fetch(`${KEYWORD}${id}`);
            if (!data.ok) {
               throw new Error(`Failed to fetch data. Status: ${data.status}`);
            }
            const json = await data.json();
            setKeywordData(json);
         } catch (error) {
            console.error("An error occurred:", error);
            // You can add code to handle the error as needed, such as showing an error message to the user.
         }
      };
    
      fetchkw();
   }, []);

   // dummy keyword
   // const dummyKeyword = [
   //    {
   //       "keyword_name": "bollywood",
   //       "keywordfirstseendate": "2023-10-19 06:34:13",
   //       "keywordlastseendate": null
   //    },
   //    {
   //       "keyword_name": "katrina kaif",
   //       "keywordfirstseendate": "2023-10-19 06:34:14",
   //       "keywordlastseendate": "2023-10-19 10:47:59"
   //    },
   //    {
   //       "keyword_name": "tiger 3",
   //       "keywordfirstseendate": "2023-10-19 06:34:14",
   //       "keywordlastseendate": null
   //    },
   //    {
   //       "keyword_name": "aditya chopra",
   //       "keywordfirstseendate": "2023-10-19 06:34:13",
   //       "keywordlastseendate": null
   //    },
   //    {
   //       "keyword_name": "salman khan",
   //       "keywordfirstseendate": "2023-10-19 06:34:14",
   //       "keywordlastseendate": null
   //    },
   //    {
   //       "keyword_name": "yash raj films",
   //       "keywordfirstseendate": "2023-10-19 06:34:14",
   //       "keywordlastseendate": null
   //    }
   // ]

   console.log(keywordData)

   if (keywordData.length === 0) {
      return (
         <div className={styles.compare_tab_itm}>
            <span className='loading_text'>No data...</span>
         </div>
      ); 
   }

   return (
      <div className={styles.compare_tab_itm}>
         {
            keywordData?.map((keyword, index) => (
               <>
                  <span key={index}>#{keyword?.keyword_name}</span>
               </>
               
            ))
         }
      </div>
   )
}

export default CompareKeyword