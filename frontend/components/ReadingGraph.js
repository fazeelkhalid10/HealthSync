import React from 'react';
import styles from './ReadingGraph.module.css'

import BloodSugarChart from './BloodSugarChart';
 // Make sure to import your CSS file for styling
import BloodPressureChart from './Bloodpressurechart';

const ReadingsGraph = ({ bloodpressure1, bloodsugar1 }) => {
  return (
    <div className={styles.chartscontainer}>
      <div className={styles.chart}>
        <BloodPressureChart bloodpressure1={bloodpressure1} />
      </div>
      <div className={styles.chart}>
        <BloodSugarChart bloodsugar1={bloodsugar1} />
    
      </div>
    </div>
  );
};

export default ReadingsGraph;
