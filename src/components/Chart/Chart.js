import React from 'react';
import ChartBar from './ChartBar';

import './Chart.css';

const Chart = (props) => {
  const maxValue = props.data.map(expense => expense.value).reduce((a, b) => a + b, 0);

  return (
    <div className="chart">
      {props.data.map(chartBar => {
        const { label, value } = chartBar;
        return <ChartBar label={label} value={value} maxValue={maxValue} key={label} />
      })}
    </div>
  )
}

export default Chart;