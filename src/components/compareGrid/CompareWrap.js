import React, { useState, useEffect } from "react";
import styles from "./compareGrid.module.css";
import CompareCard from "./CompareCard";
import CompareLabel from "./CompareLabel";
import { ARTS, ARTM, ARTE } from "@/utils/constants";
import { SRCHS, SRCHM, SRCHE } from "@/utils/constants";

const CompareWrap = ({ publisher, publisherid, categoryid, selected, searchInput }) => {
   const [articles, setArticles] = useState([]);
   const [loadingTime, setLoadingTime] = useState(null);
   const [showCount, setShowCount] = useState(10);

   useEffect(() => {
      const fetchArticles = async () => {
         try {
            const startTime = performance.now();
            let apiEndpoint = `${ARTS}${publisherid}${ARTM}${categoryid}${ARTE}`;

            if (searchInput) {
               apiEndpoint = `${SRCHS}${publisherid}${SRCHM}${categoryid}${SRCHE}${searchInput}`;
               console.log(searchInput);
            }

            const data = await fetch(apiEndpoint);
            if (!data.ok) {
               throw new Error(`Failed to fetch data (status code: ${data.status})`);
            }
            const json = await data.json();
            const endTime = performance.now();
            setLoadingTime(endTime - startTime);

            if (Array.isArray(json) && json.length === 0) {
               setArticles([]);
            } else {
               setArticles(json);
            }
         } catch (error) {
            // Handle the error as needed
            console.error('An error occurred while fetching data:', error);
         }
      };

      fetchArticles();
   }, [searchInput, publisherid, categoryid]);

   const loadMoreArticles = () => {
      setShowCount(prevShowCount => prevShowCount + 10);
   };

   return (
      <div className={`${styles.compare_wrap} ${selected ? styles.visible : ''}`}>
         <CompareLabel publisher={publisher} />
         <div>
            {loadingTime !== null && (
               <p>Data loaded in {loadingTime.toFixed(2)} milliseconds</p>
            )}
         </div>
         {selected && articles.slice(0, showCount).map((article, index) => (
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
         ))}
         {articles.length > showCount && (
            <button className={styles.show_more_btn} onClick={loadMoreArticles}>Load More</button>
         )}
      </div>
   );
};

export default CompareWrap;
