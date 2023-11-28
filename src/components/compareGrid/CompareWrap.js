import React, { useState, useEffect } from "react";
import styles from "./compareGrid.module.css";
import CompareCard from "./CompareCard";
import CompareLabel from "./CompareLabel";

const CompareWrap = ({ publisher, publisherid, categoryid, selected, searchInput }) => {
   const [articles, setArticles] = useState([]);
   const [loadingTime, setLoadingTime] = useState(null);
   const [pageNum, setPageNum] = useState(10);
   const [isSearchRequest, setIsSearchRequest] = useState(false);

   useEffect(() => {
      if (selected) {
         const fetchArticles = async () => {
            try {
               const startTime = performance.now();
               let apiEndpoint = 'https://performo.in/api/all_article.php';

               if (searchInput) {
                  apiEndpoint = 'https://performo.in/api/search_keyword.php';
               }

               let json;

               if (searchInput) {
                  // console.log(publisherid, categoryid, searchInput)
                  // console.log(articles)

                  const data = await fetch(apiEndpoint, {
                     method: 'POST',
                     headers: {
                        Authorization: 'Bearer 0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
                     },
                     body: new URLSearchParams({ publisher_id: publisherid, category_id: categoryid, keywords: searchInput, })
                  });
                  json = await data.json();
                  
                  console.log(categoryid)
                  console.log(json)

                  setArticles([]);
                  setIsSearchRequest(true);
               } else {
                  const data = await fetch(apiEndpoint, {
                     method: 'POST',
                     headers: {
                        Authorization: 'Bearer 0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
                     },
                     body: new URLSearchParams({ publisher_id: publisherid, category_id: categoryid, page_num: pageNum, })
                  });
                  json = await data.json();
                  setIsSearchRequest(false);
               }

               const endTime = performance.now();
               setLoadingTime(endTime - startTime);

               if (Array.isArray(json) && json.length === 0) {
                  setArticles([]);
               } else {
                  if (Array.isArray(json)) {
                     setArticles((prevArticles) => (isSearchRequest ? [...json] : [ ...json]));
                  } else if (typeof json === "object") {
                     setArticles([json]);
                  }
               }
            } catch (error) {
               // console.error('An error occurred while fetching data:', error);
            }
         };

         fetchArticles();
      }
   }, [selected, searchInput, publisherid, categoryid, pageNum, isSearchRequest]);

   const loadMoreArticles = () => {
      setPageNum(pageNum + 10);
   };

   return (
      <div className={`${styles.compare_wrap} ${selected ? styles.visible : ''}`}>
         <CompareLabel publisher={publisher} />
         <div>
            {loadingTime !== null && (
               <p className={styles.ltime_txt}>Data loaded in {loadingTime.toFixed(2)} milliseconds</p>
            )}
         </div>
         {selected && articles?.map((article, index) => (
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
         {
            articles.length >= 10 && (
               <button className={styles.show_more_btn} onClick={loadMoreArticles}>
                  Load More
               </button>
            )
         }
      </div>
   );
};

export default CompareWrap;
