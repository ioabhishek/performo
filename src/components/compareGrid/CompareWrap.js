import React, { useState, useEffect } from "react";
import styles from "./compareGrid.module.css";
import CompareCard from "./CompareCard";
import CompareLabel from "./CompareLabel";

const CompareWrap = ({ publisher, publisherid, categoryid, selected, searchInput }) => {
   const [articles, setArticles] = useState([]);
   const [loadingTime, setLoadingTime] = useState(null);
   const [showCount, setShowCount] = useState(10);

   useEffect(() => {
      const fetchArticles = async () => {
         try {
            const startTime = performance.now();
            let apiEndpoint = 'https://performo.in/api/all_article.php'

            if (searchInput) {
               apiEndpoint = 'https://performo.in/api/search_keyword.php'
            }

            let json;

            if(searchInput) {
               const data = await fetch(apiEndpoint, {
                  method: 'POST',
                  headers: {
                     Authorization: 'Bearer 0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
                  },
                  body: new URLSearchParams({publisher_id : publisherid, category_id : categoryid, keywords : searchInput, })
               });
               json = await data.json();
            } else {
               const data = await fetch(apiEndpoint, {
                  method: 'POST',
                  headers: {
                     Authorization: 'Bearer 0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
                  },
                  body: new URLSearchParams({publisher_id : publisherid, category_id : categoryid, page_num : 10, })
               });
               json = await data.json();
            }

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
         {selected && articles?.slice(0, showCount).map((article, index) => (
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
