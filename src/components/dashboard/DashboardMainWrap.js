import React, {useState, useEffect} from 'react'
import styles from './dashboard.module.css'
import GranularityWrapper from './GranularityWrapper'
import DashboardGrid from './DashboardGrid'

const DashboardMainWrap = () => {
  const [date, setDate] = useState(new Date().toLocaleDateString());
  const [selectedCategory, setSelectedCategory] = useState('');
  const [positions, setPositions] = useState([]);
  const [mpositions, setMositions] = useState([]);
  const [topKeywords, setTopKeyword] = useState([]);

  useEffect(() => {
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
    }
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
    }
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
    }
    fetchTopKeywords();
  }, [date]);

  return (
    <>
      <GranularityWrapper date={date} setDate={setDate} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
      <DashboardGrid positions={positions} mpositions={mpositions} topKeywords={topKeywords}/>
    </>
  )
}

export default DashboardMainWrap