import React from 'react';

import './ChartBar.css';

const ChartBar = (props) => {
  return (
    <div className="chart-bar">
      <div className="chart-bar-out">
        <div
          className="chart-bar-in"
          style={{ height: `${(props.value * 100) / props.maxValue}%` }}
        ></div>
      </div>
      <div className="chart-bar-label">{props.label}</div>
    </div>
  )
}

export default ChartBar;