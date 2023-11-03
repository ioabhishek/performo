import React from 'react';
import styles from './dashboard.module.css';
import DashboardCardr from './DashboardCardr';
import DashboardCardm from './DashboardCardm';
import DashboardCard from './DashboardCard';
import { PulseLoader } from "react-spinners";
import DashboardCardLeg from './DashboardCardLeg';
import DashboardCardMissed from './DashboardCardMissed';
import DashboardCardEarly from './DashboardCardEarly';
const DashboardGrid = ({ positions, mpositions, topKeywords, leggards, missedTrain, earlyBirds}) => {

  if (!positions || !mpositions || !topKeywords || !leggards || !missedTrain || !earlyBirds) {
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
        {leggards.length> 0 && (
          <DashboardCardLeg leggards={leggards} />
        )}
        {missedTrain.length> 0 && (
          <DashboardCardMissed missedTrain={missedTrain}  />
        )}
        {earlyBirds.length> 0 && (
          <DashboardCardEarly earlyBirds={earlyBirds}/>
        )
        }
      </div>
    </>
  );
}

export default DashboardGrid;
