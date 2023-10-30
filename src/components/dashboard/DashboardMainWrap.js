import React, {useState, useEffect} from 'react'
import styles from './dashboard.module.css'
import GranularityWrapper from './GranularityWrapper'
import DashboardGrid from './DashboardGrid'
import { RPOSITION } from '@/utils/constants'

function DashboardMainWrap() {
  const [date, setDate] = useState(new Date().toLocaleDateString());
  const [selectedCategory, setSelectedCategory] = useState('');
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    const fetchCategory = async () => {
      const data = await fetch(RPOSITION);
      const json = await data.json();
      setPositions(json);
    }
    fetchCategory();
  }, []);

  return (
    <>
      <GranularityWrapper date={date} setDate={setDate} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
      <DashboardGrid positions={positions}/>
    </>
  )
}

export default DashboardMainWrap