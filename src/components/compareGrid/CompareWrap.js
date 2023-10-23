import React, { useState, useEffect } from "react";
import styles from "./compareGrid.module.css";
import CompareCard from "./CompareCard";
import CompareLabel from "./CompareLabel";
import { ARTS, ARTM, ARTE } from "@/utils/constants";

const CompareWrap = ({ publisher, publisherid, categoryid, selected }) => {

   const [articles, setArticles] = useState([]);
   const [loadingTime, setLoadingTime] = useState(null);

   useEffect(() => {
      const fetchArticles = async () => {
         try {
            const startTime = performance.now(); // Record start time
            const data = await fetch(`${ARTS}${publisherid}${ARTM}${categoryid}${ARTE}`);
            if (!data.ok) {
               throw new Error(`Failed to fetch data (status code: ${data.status})`);
            }
            const json = await data.json();
            const endTime = performance.now(); // Record end time
            setLoadingTime(endTime - startTime); // Calculate and set loading time

            if (Array.isArray(json) && json.length === 0) {
               setArticles([]);
            } else {
               setArticles(json);
            }
         } catch (error) {
            console.error('An error occurred while fetching data:', error);
         }
      };
   
      fetchArticles();
   }, []);  

   return (
      <div className={`${styles.compare_wrap} ${selected ? styles.visible : ''}`}>
         <CompareLabel publisher={publisher} />
         <div>
            {loadingTime !== null && (
               <p>Data loaded in {loadingTime.toFixed(2)} ms</p>
            )}
         </div>
         {
            articles.slice(0,5).map((article, index) => (
               <CompareCard
                  key={index}
                  id={article.id}
                  title={article.title}
                  content={article.title}
                  image={article.mediaurl}
                  arturl={article.link}
                  author={article.author}
                  pubdate={article.pubdate}
               />
            ))
         }
      </div>
   );
}

export default CompareWrap;
