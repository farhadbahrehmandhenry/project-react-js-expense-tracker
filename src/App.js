import React, { useState } from 'react';
import ExpensesList from './components/Expenses/ExpensesList';
import ExpensesFilter from './components/ExpenseFilter/ExpensesFilter';

import './App.css';

const initialExpenses = [
  { id: 1, title: 'Groceries', amount: 20.99, date: { day: 28, month: 'June', year: 2020 } },
  { id: 2, title: 'Rent', amount: 1020, date: { day: 28, month: 'November', year: 2021 } },
  { id: 3, title: 'Tution', amount: 220, date: { day: 28, month: 'October', year: 2022 } },
];

function App() {
  const [expenses, setExpenses] = useState(initialExpenses);
  const [filtered, setFiltered] = useState(initialExpenses);

  const handleFilterExpense = (year) => {
    let filteredExpenses = [...expenses];

    if (year !== 'all') {
      filteredExpenses = expenses.filter(expense => expense.date.year === +year);
    }
    console.log('ffff', filteredExpenses)

    setFiltered(filteredExpenses);
  }

  return (
    <div className="App">
      <ExpensesFilter onFilterExpenses={handleFilterExpense} expenses={filtered} />
      <ExpensesList expenses={filtered} />
    </div>
  );
}

export default App;
