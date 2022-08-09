import React, { useState } from 'react';
import Card from '../Card/Card';
import Chart from '../Chart/Chart';

import './ExpensesFilter.css';

const initialChartDate = [
  { key: 'January', label: 'Jan', value: 0 },
  { key: 'February', label: 'Feb', value: 0 },
  { key: 'March', label: 'Mar', value: 0 },
  { key: 'April', label: 'Apr', value: 0 },
  { key: 'May', label: 'May', value: 0 },
  { key: 'June', label: 'Jun', value: 0 },
  { key: 'July', label: 'Jul', value: 0 },
  { key: 'August', label: 'Aug', value: 0 },
  { key: 'September', label: 'Sep', value: 0 },
  { key: 'October', label: 'Oct', value: 0 },
  { key: 'November', label: 'Nov', value: 0 },
  { key: 'December', label: 'Dec', value: 0 }

];
const ExpensesFilter = (props) => {
  const [drobdownValue, setDropdownValue] = useState('all');
  const [chartData, setChartData] = useState(initialChartDate);
  const maxValue = props.expenses.map(expense => expense.amount).reduce((a, b) => a + b, 0);

  const handleChangeDropdown = (e) => {
    props.onFilterExpenses(e.target.value);
    setDropdownValue(e.target.value);

    const updatedData = initialChartDate.map(data => {
      var month = props.expenses.find(expense => expense.date.month === data.key);

      if (month) data.value = month.amount;

      return data;
    });

    setChartData(updatedData);

    console.log(chartData)
    console.log(updatedData)

  }

  return (
    <Card className="expenses-filter-card">
      <div className="expenses-filter">
        <div>Filter by year</div>
        <select value={drobdownValue} onChange={handleChangeDropdown}>
          <option value="all">all</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
        </select>
      </div>
      {drobdownValue !== 'all' && props.expenses.length > 0 ? <Chart data={chartData} maxValue={maxValue} /> : null}
    </Card>
  )
}

export default ExpensesFilter;