import React, { useState, useEffect } from "react";
import styles from "./compareGrid.module.css";
import CompareCard from "./CompareCard";
import CompareLabel from "./CompareLabel";
import { useAccess } from "@/context/accessContext";
import { PulseLoader } from "react-spinners";
const CompareWrap = ({
  publisher,
  publisherid,
  categoryid,
  selected,
  searchInput,
}) => {
  const [regularArticles, setRegularArticles] = useState([]);
  const [searchArticles, setSearchArticles] = useState([]);
  const [loadingTime, setLoadingTime] = useState(null);
  const [pageNum, setPageNum] = useState(10);
  const [isSearchRequest, setIsSearchRequest] = useState(false);
  const [showloader, setShowloader] = useState(true);
  const { token } = useAccess();
  useEffect(() => {
    if (selected) {
      setShowloader(true);
      const fetchArticles = async () => {
        try {
          const startTime = performance.now();
          let apiEndpoint = "https://performo.in/api/all_article.php";

          if (searchInput) {
            apiEndpoint = "https://performo.in/api/search_keyword.php";
          }

          let json;

          if (searchInput) {
            const data = await fetch(apiEndpoint, {
              method: "POST",
              headers: {
                Authorization: token,
              },
              body: new URLSearchParams({
                publisher_id: publisherid,
                category_id: categoryid,
                keywords: searchInput,
              }),
            });
            json = await data.json();

            setSearchArticles(json);
            setIsSearchRequest(true);
          } else {
            setShowloader(true);
            const data = await fetch(apiEndpoint, {
              method: "POST",
              headers: {
                Authorization: token,
              },
              body: new URLSearchParams({
                publisher_id: publisherid,
                category_id: categoryid,
                page_num: pageNum,
              }),
            });
            json = await data.json();
            setIsSearchRequest(false);
          }

          const endTime = performance.now();
          setLoadingTime(endTime - startTime);

          if (json.length === 0) {
            setSearchArticles([]);
            setRegularArticles([]);
          } else {
            if (isSearchRequest) {
              setRegularArticles([]);
              setSearchArticles(json);
            } else {
              setSearchArticles([]);
              setRegularArticles((prevArticles) => {
                const newArticles = [...prevArticles, ...json];

                // console.log('new articles', newArticles)
                let uniqueArticles = newArticles.filter(
                  (article, index, self) => {
                    const isUnique =
                      self.findIndex((a) => a.title === article.title) ===
                      index;

                    return isUnique;
                  }
                );
                // console.log('unique articles', uniqueArticles)

                return uniqueArticles;
              });
            }
          }
        } catch (error) {
          // Handle error
        }
      };

      fetchArticles();
    }
  }, [
    selected,
    searchInput,
    publisherid,
    categoryid,
    pageNum,
    isSearchRequest,
  ]);

  const loadMoreArticles = () => {
    setPageNum(pageNum + 10);
  };
  useEffect(() => {
    setTimeout(() => {
      setShowloader(false);
    }, 7000);
  }, [showloader]);
  return (
    <div className={`${styles.compare_wrap} ${selected ? styles.visible : ""}`}>
      <CompareLabel publisher={publisher} />
      {(isSearchRequest ? searchArticles : regularArticles).length > 0 ? (
        <div>
          {loadingTime !== null && (
            <p className={styles.ltime_txt}>
              Data loaded in {loadingTime.toFixed(2)} milliseconds
            </p>
          )}
          {selected &&
            (isSearchRequest ? searchArticles : regularArticles).map(
              (article, index) => (
                <CompareCard
                  key={index}
                  id={article.id}
                  title={article.title}
                  content={article.title}
                  image={article.mediaurl}
                  arturl={article.link}
                  author={article.author}
                  pubdate={article.pubdate}
                  currentrank={article.currentrank}
                />
              )
            )}
          {(isSearchRequest ? searchArticles : regularArticles).length >=
            10 && (
            <button className={styles.show_more_btn} onClick={loadMoreArticles}>
              Load More
            </button>
          )}
        </div>
      ) : showloader ? (
        <PulseLoader color="#696CFF" size={10} data-textid="Loader" />
      ) : (
        (isSearchRequest ? searchArticles : regularArticles).length === 0 && (
          <p>No articles available</p>
        )
      )}
    </div>
  );
};

export default CompareWrap;
