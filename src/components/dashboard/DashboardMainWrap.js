import React, { useState, useEffect } from "react";
import styles from "./dashboard.module.css";
import GranularityWrapper from "./GranularityWrapper";
import DashboardGrid from "./DashboardGrid";

function DashboardMainWrap() {
  const [date, setDate] = useState(new Date().toLocaleDateString());
  const [selectedCategory, setSelectedCategory] = useState("");
  const [positions, setPositions] = useState([]);
  const [mpositions, setMositions] = useState([]);
  const [topKeywords, setTopKeyword] = useState([]);
  const [legaard, setLegaard] = useState([]);
  const [leggardall,setleggardall]=useState([]);
  const [miss_trained, setMiss_trained] = useState([]);
  const [early_bird, setEarly_bird] = useState([]);
  const [early_birdall, setEarly_birdall] = useState([]);
  
  useEffect(() => {
    const fetchLagaard = async () => {
      const data = await fetch('https://performo.in/api/leggard.php', {
        method: 'POST',
        headers: {
            Authorization: 'Bearer 0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
        },
        body: new URLSearchParams({ publisher_id : 10, date_from : '2023-10-24', date_to : '2023-10-25' })
      });
      const json = await data.json();
      const legard_keyword_name1 = json
        .slice(0, 5)
        .map((item) => item.legard_keyword_name);
      // const legard_keyword_rank =  json.slice(0,5).map(item => item.rank);
      setLegaard(legard_keyword_name1);
      const legard_keyword_name2=json.map((item) => item.legard_keyword_name);
      setleggardall(legard_keyword_name2);
      //  setRanklegaard(legard_keyword_rank);
    };
    fetchLagaard();

    const fetchmissed = async () => {
      const data = await fetch('https://performo.in/api/missed_train.php', {
        method: 'POST',
        headers: {
            Authorization: 'Bearer 0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
        },
        body: new URLSearchParams({ publisher_id : 16, date_from : '2023-10-24', date_to : '2023-10-25' })
      });
      const json = await data.json();
      // const miss_trained =  json.slice(0,5).map(item => item.legard_keyword_name);
      setMiss_trained(json);
      //  setRanklegaard(legard_keyword_rank);
    };
    fetchmissed();

    const fetchEarly = async () => {
      const data = await fetch('https://performo.in/api/early_offer.php', {
        method: 'POST',
        headers: {
            Authorization: 'Bearer 0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
        },
        body: new URLSearchParams({ publisher_id : 10, category_id : '336fdcf7d540e4b430a890b63da159c9', date_from : '2023-10-24', date_to : '2023-10-25' })
      });
      const json = await data.json();

      const early_key=json.slice(0,5).map(item => item.early_keyword_name);
      const early_key_all=json.map(item => item.early_keyword_name);
      setEarly_bird(early_key);
      setEarly_birdall(early_key_all);
    };
    fetchEarly();

    const fetchPosition = async () => {
      const data = await fetch('https://performo.in/api/ranking_position.php', {
        method: 'POST',
        headers: {
            Authorization: 'Bearer 0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
        },
        body: new URLSearchParams({date_from : '2023-10-24', date_to : '2023-10-25', publisher_id : 10})
      });
      const json = await data.json();
      setPositions(json);
    };
    fetchPosition();

    const fetchMposition = async () => {
      const data = await fetch('https://performo.in/api/ranking_position_time.php', {
        method: 'POST',
        headers: {
            Authorization: 'Bearer 0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
        },
        body: new URLSearchParams({date_from : '2023-10-24', date_to : '2023-10-25', publisher_id : 10})
      });
      const json = await data.json();
      setMositions(json);
    };
    fetchMposition();

    const fetchTopKeywords = async () => {
      const data = await fetch('https://performo.in/api/top_keyword.php', {
        method: 'POST',
        headers: {
            Authorization: 'Bearer 0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
        },
        body: new URLSearchParams({date_from : '2023-10-24', date_to : '2023-10-25'})
      });
      const json = await data.json();
      setTopKeyword(json);
    };
    fetchTopKeywords();
  }, [date]);

  return (
    <>
      <GranularityWrapper
        date={date}
        setDate={setDate}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <DashboardGrid
        positions={positions}
        mpositions={mpositions}
        topKeywords={topKeywords}
        legaard={legaard}
        leggardall={leggardall}
        miss_trained={miss_trained}
        early_bird={early_bird}
        early_birdall={early_birdall}
      />
    </>
  );
}

export default DashboardMainWrap;
