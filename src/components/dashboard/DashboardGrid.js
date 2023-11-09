import React from 'react';
import styles from './dashboard.module.css';
import DashboardCardRank from './DashboardCardRank';
import DashboardCardm from './DashboardCardm';
import DashboardKeyword from './DashboardKeyword';
import { PulseLoader } from "react-spinners";
import DashboardCardLeg from './DashboardCardLeg';
import DashboardCardMissed from './DashboardCardMissed';
import DashboardCardEarly from './DashboardCardEarly';
const DashboardGrid = ({ startDate, endDate, categoryId }) => {

  return (
    <div className={styles.main_grid}>
      <DashboardCardRank startDate={startDate} endDate={endDate} categoryId={categoryId}/>
      <DashboardCardm startDate={startDate} endDate={endDate} categoryId={categoryId}/>
      <DashboardKeyword startDate={startDate} endDate={endDate}/>
      <DashboardCardEarly startDate={startDate} endDate={endDate} categoryId={categoryId}/>
      <DashboardCardLeg startDate={startDate} endDate={endDate} categoryId={categoryId}/>
      <DashboardCardMissed startDate={startDate} endDate={endDate} categoryId={categoryId}/>
    </div>
  );
}

export default DashboardGrid;
