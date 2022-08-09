import React, { useState } from 'react';
import ExpensesList from './components/Expenses/ExpensesList';
import ExpensesFilter from './components/ExpenseFilter/ExpensesFilter';
import NewExpenseForm from './components/NewExpenseForm/NewExpenseForm';

import './App.css';

const initialExpenses = [
  { id: 1, title: 'Groceries', amount: 20.99, date: { day: 28, month: 'June', year: 2020 } },
  { id: 2, title: 'Rent', amount: 1020, date: { day: 28, month: 'November', year: 2021 } },
  { id: 3, title: 'Tution', amount: 220, date: { day: 28, month: 'October', year: 2022 } },
  { id: 4, title: 'Movie', amount: 54, date: { day: 11, month: 'September', year: 2022 } },
];

function App() {
  const [allExpenses, setAllExpenses] = useState(initialExpenses);
  const [filtered, setFiltered] = useState(allExpenses);
  const [filter, setFilter] = useState('all');

  const handleFilterExpense = async (filter) => {
    await setFilter(filter);

    let filteredExpenses = [...allExpenses];

    if (filter !== 'all') {
      filteredExpenses = allExpenses.filter(expense => expense.date.year === +filter);
    }

    await setFiltered(filteredExpenses);
  }

  const handleAddNewExpense = async (expense) => {
    await setAllExpenses(prevState => ([...prevState, expense]));

    let filteredExpenses = [...allExpenses];
    console.log(filteredExpenses, 'eee')

    if (filter !== 'all') {
      filteredExpenses = allExpenses.filter(expense => expense.date.year === +filter);
    }

    await setFiltered(filteredExpenses);
  }

  return (
    <div className="App">
      <NewExpenseForm onAddNewExpense={handleAddNewExpense} />
      <ExpensesFilter onFilterExpenses={handleFilterExpense} expenses={allExpenses} />
      <ExpensesList expenses={filtered} />
    </div>
  );
}

export default App;
