import React, { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Sony A7III",
    amount: 1699.99,
    date: new Date(2019, 11, 16),
  },
  {
    id: "e2",
    title: "Tamron 28mm-75mm f2.8 Lens",
    amount: 879.0,
    date: new Date(2019, 11, 16),
  },
  {
    id: "e3",
    title: "DJI Mavic 2 Pro",
    amount: 1599.0,
    date: new Date(2019, 2, 15),
  },
  {
    id: "e4",
    title: "Zhiyun Crane 2S",
    amount: 599.0,
    date: new Date(2020, 9, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
