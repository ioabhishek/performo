import React, { useState, useEffect } from "react";
import styles from "./compareGrid.module.css";
import CompareCard from "./CompareCard";
import CompareLabel from "./CompareLabel";
import { ARTS, ARTM, ARTE } from "@/utils/constants";

const CompareWrap = ({ publisher, publisherid, categoryid, selected }) => {

   console.log(publisher, publisherid, categoryid)

   const [articles, setArticles] = useState([]);

   useEffect(() => {
      fetchArticles();
   },[]);

   const fetchArticles = async () => {
      const data = await fetch(ARTS+{publisherid}+ARTM+{categoryid}+ARTE);
      const json = await data.json();
      // console.log(json)
      setArticles(json);
   };

   return (
      <div className={`${styles.compare_wrap} ${selected ? styles.visible : ''}`}>
         <CompareLabel publisher={publisher} />
         {
            articles.map((article, index) => (
               <CompareCard
                  key={index}
                  id={article.publisher}
                  title={article.title}
                  content={article.title}
                  image={article.mediaurl}
               />
            ))
         }
      </div>
   );
}

export default CompareWrap;
