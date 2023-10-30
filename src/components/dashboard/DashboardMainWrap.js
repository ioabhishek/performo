import React, {useState, useEffect} from 'react'
import styles from './dashboard.module.css'
import GranularityWrapper from './GranularityWrapper'
import DashboardGrid from './DashboardGrid'
import { RPOSITION } from '@/utils/constants'
import { MPOSITION } from '@/utils/constants'
import { TOP_KEYWORDS } from '@/utils/constants'

function DashboardMainWrap() {
  const [date, setDate] = useState(new Date().toLocaleDateString());
  const [selectedCategory, setSelectedCategory] = useState('');
  const [positions, setPositions] = useState([]);
  const [mpositions, setMositions] = useState([]);
  const [topKeywords, setTopKeyword] = useState([]);

  useEffect(() => {
    const fetchPosition = async () => {
      const data = await fetch(RPOSITION);
      const json = await data.json();
      setPositions(json);
    }
    fetchPosition();

    const fetchMposition = async () => {
      const data = await fetch(MPOSITION);
      const json = await data.json();
      setMositions(json);
    }
    fetchMposition();

    const fetchTopKeywords = async () => {
      const data = await fetch(TOP_KEYWORDS);
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