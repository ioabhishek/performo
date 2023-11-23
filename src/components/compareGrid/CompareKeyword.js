import React, { useState, useEffect } from "react";
import styles from "./compareGrid.module.css";
import { PulseLoader } from "react-spinners";

const CompareKeyword = ({ id }) => {
   const [keywordData, setKeywordData] = useState([]);
   const [status, setStatus] = useState("loading");

   useEffect(() => {
      const fetchkw = async () => {
         try {
            const data = await fetch(
               "https://performo.in/api/article_keywords.php",
               {
                  method: "POST",
                  headers: {
                     Authorization:
                        "Bearer 0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
                  },
                  body: new URLSearchParams({ article_id: id }),
               }
            );

            // console.log("Response status:", data.status);

            if (!data.ok) {
               throw new Error(`HTTP error! Status: ${data.status}`);
            }

            const contentType = data.headers.get("content-type");

            // Choose one method based on the content type
            if (contentType && contentType.includes("application/json")) {
               const json = await data.json();
               // console.log("Parsed JSON:", json);
               setKeywordData(json);
               setStatus(json.length === 0 ? "false" : "true");
            } else {
               const textResponse = await data.text();
               // console.log("Text Response:", textResponse);
               // Handle the text response accordingly
            }
         } catch (error) {
            console.error("An error occurred:", error);
            setStatus("false");
            setKeywordData([]);
         }
      };

      fetchkw();
   }, [id]);

   // console.log(keywordData, status);

   if (status === "loading") {
      return (
         <div className={styles.compare_tab_itm}>
            <PulseLoader color="#696CFF" size={10} data-textid="Loader" />
         </div>
      );
   } else if (status === "false") {
      return (
         <div className={styles.compare_tab_itm}>
            <span className="loading_text">No data...</span>
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
