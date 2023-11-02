import React from 'react';
import styles from './dashboard.module.css';
import DashboardCardr from './DashboardCardr';
import DashboardCardm from './DashboardCardm';
import DashboardCard from './DashboardCard';
import { PulseLoader } from "react-spinners";
import DashboardCardLeg from './DashboardCardLeg';
import DashboardCardMissed from './DashboardCardMissed';
import DashboardCardEarly from './DashboardCardEarly';
const DashboardGrid = ({ positions, mpositions, topKeywords,legaard,miss_trained,early_bird,leggardall,early_birdall}) => {
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
        {legaard.length> 0 && (
          <DashboardCardLeg legaard={legaard} leggardall={leggardall}  />
        )}
        {miss_trained.length>0&& (
          <DashboardCardMissed missed_train={miss_trained}  />
        )}
        {early_bird.length>0&& (

        <DashboardCardEarly early_bird={early_bird} early_birdall={early_birdall}/>
        )
        }
      </div>
    </>
  );
}

export default DashboardGrid;
