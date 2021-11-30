import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { DUMMY_EXPENSES } from "./components/Constants/Constants";

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    //Will use the espred operator "..." to pull out all the existen
    //array elements  and populate the rest of the new array  with
    //those existen elementes.
    //setExpenses([expense, ...expenses]);

    //better way
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    //JSx sintaxis
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses item={expenses} />
    </div>
  );
};

//best practice put new compent into new files
export default App;

/*

  State: to tell react to run code again
  Lifting State up 
  Hooks  
  Controlled 
  Uncontrolled
  Stateless 
  Stateful
  Key always use wen mapin list of data
  
*/
