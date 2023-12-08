import React, { useState, useEffect } from 'react';
import styles from './dashboard.module.css';
import DashboardCardRank from './DashboardCardRank';
import DashboardCardm from './DashboardCardm';
import DashboardKeyword from './DashboardKeyword';
import DashboardCardLeg from './DashboardCardLeg';
import DashboardCardMissed from './DashboardCardMissed';
import DashboardCardEarly from './DashboardCardEarly';

const DashboardGrid = ({ startDate, endDate, categoryId ,counter}) => {
  
  return (
    <div className={styles.main_grid}>
      <DashboardCardRank startDate={startDate} endDate={endDate} counter={counter} categoryId={categoryId} />
      <DashboardCardm startDate={startDate} endDate={endDate} counter={counter} categoryId={categoryId}/>
      <DashboardCardEarly startDate={startDate} endDate={endDate} categoryId={categoryId} counter={counter}/>
      <DashboardCardLeg startDate={startDate} endDate={endDate} categoryId={categoryId} counter={counter}/>
      <DashboardCardMissed startDate={startDate} endDate={endDate} categoryId={categoryId} counter={counter}/>
      <DashboardKeyword startDate={startDate} endDate={endDate} categoryId={categoryId} counter={counter}/>
    </div>
  );
}

export default DashboardGrid;
