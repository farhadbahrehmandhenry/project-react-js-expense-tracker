import React from 'react';
import Expense from '../Expense/Expense';
import Card from '../Card/Card';

import './ExpensesList.css';

const ExpensesList = (props) => {
  return (
    <Card className="expenses-list">
      {props.expenses.length > 0 ? props.expenses.map(expense => {
        const { title, date, amount, id } = expense;

        return <Expense title={title} date={date} amount={amount} key={id} />
      }) : <div>No Expenses Found!!</div>}
    </Card>
  );
}

export default ExpensesList;