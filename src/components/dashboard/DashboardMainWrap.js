import React, { useState, useEffect } from "react";
import GranularityWrapper from "./GranularityWrapper";
import DashboardGrid from "./DashboardGrid";
import { useAccess } from '@/context/accessContext';

const DashboardMainWrap = () => {
  const formatDate = new Date().toLocaleDateString();
  const parts = formatDate.split('/');
  const formattedDate = `${parts[2]}-${parts[1]}-${parts[0]}`;
  const [date, setDate] = useState(formattedDate);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [catgList, setCatgList] = useState([])
  const [categoryId, setCategoryId] = useState('336fdcf7d540e4b430a890b63da159c9');
  const startDate = date.split(" - ")[0]
  const endDate = date.split(" - ")[1] ? date.split(" - ")[1] : date.split(" - ")[0]

  const [positions, setPositions] = useState([]);
  const [mpositions, setMositions] = useState([]);
  const [topKeywords, setTopKeyword] = useState([]);
  const [leggards, setLeggards] = useState([]);
  const [missedTrain, setMissedTrain] = useState([]);
  const [earlyBirds, setEarlyBirds] = useState([]);
  const { userPubId } = useAccess();

  useEffect(() => {
    const fetchCatg = async () => {
      try {
        const data = await fetch('https://performo.in/api/get_category.php', {
          method: 'POST',
          headers: {
            Authorization: 'Bearer 0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
          },
        });
        const json = await data.json();
        setCatgList(json);
      } catch (error) {
        //  console.error('Error fetching categories:', error);
      }
    };
    fetchCatg();
    catgList.forEach((category) => {
      if (category.category_name === selectedCategory) {
        setCategoryId(category.category_id);
      }
    });
  }, [])


  useEffect(() => {
    const fetchLagaard = async () => {
      const data = await fetch('https://performo.in/api/leggard.php', {
        method: 'POST',
        headers: {
            Authorization: 'Bearer 0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
        },
        body: new URLSearchParams({ date_from : startDate, date_to : endDate, publisher_id : userPubId, category_id: categoryId })
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
        body: new URLSearchParams({ date_from : startDate, date_to : endDate, publisher_id : userPubId, category_id: categoryId})
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
        body: new URLSearchParams({ date_from : startDate, date_to : endDate, publisher_id : userPubId, category_id: categoryId })
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
        body: new URLSearchParams({ date_from : startDate, date_to : endDate, publisher_id : userPubId, category_id: categoryId})
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
        body: new URLSearchParams({date_from : startDate, date_to : endDate, publisher_id : userPubId, category_id: categoryId})
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
        body: new URLSearchParams({date_from : startDate, date_to : endDate})
      });
      const json = await data.json();
      setTopKeyword(json);
    };
    fetchTopKeywords();
  }, [startDate, endDate, categoryId, selectedCategory]);

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
