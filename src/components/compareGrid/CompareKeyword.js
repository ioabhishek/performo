import React, {useState, useEffect} from 'react'
import styles from './compareGrid.module.css';

const CompareKeyword = ({id}) => {
   const [keywordData, setKeywordData] = useState([]);

   const url = `https://performo.in/api/article_keywords.php?token_key=@123abcd1366&article_id=${id}&key=keyword__${id}`

   useEffect(() => {
      const fetchCategory = async () => {
        const data = await fetch(url);
        const json = await data.json();
        setKeywordData(json[0].keyword_name.split(','));
      }
      fetchCategory();
   }, []);

   console.log(keywordData ? true : false)

   return (
      <div className={styles.compare_tab_itm}>
         <h4>Article Keywords</h4>
         {
            keywordData.map((keyword, index) => (
               <span key={index}>{keyword}</span>
            ))
         }
      </div>
   )
}

export default CompareKeyword