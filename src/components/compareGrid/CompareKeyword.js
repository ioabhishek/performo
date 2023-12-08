import React, { useState, useEffect } from "react";
import styles from "./compareGrid.module.css";
import { PulseLoader } from "react-spinners";
import { useAccess } from '@/context/accessContext';
const CompareKeyword = ({ id }) => {
   const [keywordData, setKeywordData] = useState([]);
   const [status, setStatus] = useState("loading");
   const { token } = useAccess();
   useEffect(() => {
      console.log(token)
      const fetchkw = async () => {
         try {
            const data = await fetch(
               "https://performo.in/api/article_keywords.php",
               {
                  method: "POST",
                  headers: {
                     Authorization:
                        token
                  },
                  body: new URLSearchParams({ article_id: id }),
               }
            );
            const status = (data.status);
            const json = await data.json();
            setStatus(json.length > 0 ? true : false);
            setKeywordData(json);
         } catch (error) {
            console.error("An error occurred:", error);
            setStatus(false);
            setKeywordData([]);
         }
      };

      fetchkw();
   }, [id]);

   if (status === "loading") {
      return (
         <div className={styles.compare_tab_itm}>
            <PulseLoader color="#696CFF" size={10} data-textid="Loader" />
         </div>
      );
   } else if (status === false) {
      return (
         <div className={styles.compare_tab_itm}>
            <span className="loading_text">...</span>
         </div>
      );
   } else {
      return (
         <div className={styles.compare_tab_itm}>
            {keywordData?.map((keyword, index) => (
               <span key={index}>#{keyword?.keyword_name}</span>
            ))}
         </div>
      );
   }
};

export default CompareKeyword;