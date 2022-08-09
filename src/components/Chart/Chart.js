import React from 'react';
import ChartBar from './ChartBar';

import './Chart.css';

const Chart = (props) => {
  return (
    <div className="chart">
      {props.data.map(chartBar => {
        const { label, value } = chartBar;
        return <ChartBar label={label} value={value} maxValue={props.maxValue} />
      })}
    </div>
  )
}

export default Chart;