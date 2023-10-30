import React from 'react';
import styles from './dashboard.module.css';
import DashboardCardr from './DashboardCardr';
import DashboardCardm from './DashboardCardm';
import DashboardCard from './DashboardCard';
import { PulseLoader } from "react-spinners";

const DashboardGrid = ({ positions, mpositions, topKeywords }) => {
  if (!positions || !mpositions || !topKeywords) {
    return (
      <div className='loading_wrap'>
        <PulseLoader
          color="#696CFF"
          size={20}
          data-textid="Loader"
        />
      </div>
    );
  }

  return (
    <>
      <div className={styles.main_grid}>
        {positions.map((position, index) => (
          <DashboardCardr key={index} rankcount={position?.rankcount} rank={position?.rank}/>
        ))}
        {mpositions.map((mposition, index) => (
          <DashboardCardm key={index} rankminute={mposition?.rank_minute} rank={mposition?.rank}/>
        ))}
        {topKeywords.length > 0 && (
          <DashboardCard topKeywords={topKeywords} />
        )}
      </div>
    </>
  );
}

export default DashboardGrid;
