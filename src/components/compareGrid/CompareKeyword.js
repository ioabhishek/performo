import React, {useState, useEffect} from 'react'
import styles from './compareGrid.module.css';
import { PulseLoader } from "react-spinners";

const CompareKeyword = ({id}) => {
   const [keywordData, setKeywordData] = useState([]);
   const [status, setStatus] = useState('loading');

   useEffect(() => {
      const fetchkw = async () => {
         try {
            const data = await fetch('https://performo.in/api/article_keywords.php', {
               method: 'POST',
               headers: {
                  Authorization: 'Bearer 0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
               },
               body: new URLSearchParams({ article_id: id })
            });
            const json = await data.json();
            json.length === 0 ? setStatus("false") : setStatus("true")
            setKeywordData(json);
         } catch (error) {
            // console.error("An error occurred:", error);
         }
      };
    
      fetchkw();
   }, [id]);

   if(status === "loading") {
      return (
         <div className={styles.compare_tab_itm}>
            <PulseLoader
               color="#696CFF"
               size={10}
               data-textid="Loader"
            />
         </div>
      ); 
   } else if (status === "false") {
      return (
         <div className={styles.compare_tab_itm}>
            <span className='loading_text'>No data...</span>
         </div>
      ); 
   } else return (
      <div className={styles.compare_tab_itm}>
         {
            keywordData?.map((keyword) => (
               <>
                  <span key={keyword}>#{keyword?.keyword_name}</span>
               </>
               
            ))
         }
      </div>
   )
}

export default CompareKeyword