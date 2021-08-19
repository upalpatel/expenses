import React from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Sony A7III",
      amount: 1699.99,
      date: new Date(2019, 8, 16),
    },
    {
      id: "e2",
      title: "Tamron 28mm-75mm f2.8 Lens",
      amount: 879.0,
      date: new Date(2019, 8, 16),
    },
    {
      id: "e3",
      title: "DJI Mavic 2 Pro",
      amount: 1599.0,
      date: new Date(2018, 12, 15),
    },
    {
      id: "e4",
      title: "Zhiyun Crane 2S",
      amount: 599.0,
      date: new Date(2020, 6, 12),
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log("In App.js");
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
