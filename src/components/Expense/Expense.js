import React from 'react';
import Card from '../Card/Card';

import './Expense.css';

const Expense = (props) => {
  return (
    <Card className="expense-card">
      <div className="expense">
        <div className="expense-date">
          <div className="expense-month">{props.date.month}</div>
          <div className="expense-year">{props.date.year}</div>
          <div className="expense-day">{props.date.day}</div>
        </div>
        <div className="expense-title">{props.title}</div>
        <div className="expense-amount">${props.amount}</div>
      </div>
    </Card>
  )
}

export default Expense;