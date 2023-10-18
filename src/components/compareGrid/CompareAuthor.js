import React, {useState, useEffect} from 'react'
import styles from './compareGrid.module.css';

const CompareAuthor = ({id}) => {
   const [authorData, setAuthorData] = useState([]);

   const url = `https://performo.in/api/get_author.php?token_key=@123abcd1366&article_id=${id}`

   useEffect(() => {
      const fetchCategory = async () => {
        const data = await fetch(url);
        const json = await data.json();
        setAuthorData(json);
      }
      fetchCategory();
   }, []);

   return (
      <div className={styles.compare_tab_itm}>
         <h4>Article Author</h4>
         <span>{authorData.author}</span>
      </div>
   )
}

export default CompareAuthor