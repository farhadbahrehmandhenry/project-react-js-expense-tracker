import React, { useState, useRef } from 'react';
import Card from '../Card/Card';

import './NewExpenseForm.css';

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const NewExpenseForm = (props) => {
  const [isAddingExpense, setIsAdfdingExpense] = useState(false);

  const titleInput = useRef(null);
  const amountInput = useRef(null);
  const dateInput = useRef(null);

  const handleAddExpense = () => {
    setIsAdfdingExpense(true);
  }

  const handleCancel = () => {
    setIsAdfdingExpense(false);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const newExpense = {
      title: titleInput.current.value,
      amount: amountInput.current.value,
      date: {
        month: monthNames[new Date(dateInput.current.value).getMonth()],
        day: new Date(dateInput.current.value).getDay(),
        year: new Date(dateInput.current.value).getFullYear(),
      },
      id: Math.random() + 1
    }

    props.onAddNewExpense(newExpense);
  }

  return (
    <Card className="add-new-expense-card">
      {isAddingExpense ?
        <form className="add-new-expense-form" onSubmit={handleSubmit}>
          <div className="inputes">
            <div>
              <label>Title</label>
              <input type="text" ref={titleInput}></input>
            </div>
            <div>
              <label>Amount</label>
              <input type="number" ref={amountInput}></input>
            </div>
            <div>
              <label>Date</label>
              <input type="date" ref={dateInput}></input>
            </div>
          </div>
          <div className="actions">
            <button onClick={handleCancel}>Cancel</button>
            <button type="submit">Add</button>
          </div>
        </form> :
        <button
          className="add-new-expense-btn"
          onClick={handleAddExpense}
          style={{ display: 'flex' }}
        >Add New Expense
        </button>
      }
    </Card>

  )
}

export default NewExpenseForm;