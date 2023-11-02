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
  const [leggards, setLeggards] = useState([]);
  const [missedTrain, setMissedTrain] = useState([]);
  const [earlyBirds, setEarlyBirds] = useState([]);
  
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
      setLeggards(json)
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
      setMissedTrain(json);
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
      setEarlyBirds(json)
    };
    fetchEarly();

    const fetchPosition = async () => {
      const data = await fetch('https://performo.in/api/ranking_position.php', {
        method: 'POST',
        headers: {
            Authorization: 'Bearer 0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
        },
        body: new URLSearchParams({date_from : '2023-10-19', date_to : '2023-10-25', publisher_id : 10})
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
        body: new URLSearchParams({date_from : '2023-10-19', date_to : '2023-10-25', publisher_id : 10})
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
        leggards={leggards}
        missedTrain={missedTrain}
        earlyBirds={earlyBirds}
      />
    </>
  );
}

export default DashboardMainWrap;
