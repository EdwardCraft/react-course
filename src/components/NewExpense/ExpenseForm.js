import React, { useState } from "react";
import "./ExpenseForm.css";

//when ever you update
const ExpenseForm = (props) => {
  const [userIput, setUserIput] = useState({
    enterTitle: "",
    enterAmount: "",
    enterDate: "",
  });

  const titleChangeHandler = (event) => {
    // If your state updates depends on the previws update
    // this functios form es recomended.
    setUserIput((prevState) => {
      return { ...userIput, enterTitle: event.target.value };
    });
  };

  const amountChangeHandler = (event) => {
    /*setUserIput({
      ...userIput,
      enterAmount: event.target.value,
    });*/
    setUserIput((prevState) => {
      return { ...userIput, enterAmount: +event.target.value };
    });
  };

  const dateChangeHandler = (event) => {
    /*setUserIput({
      ...userIput,
      enterDate: event.target.value,
    });*/
    setUserIput((prevState) => {
      return { ...userIput, enterDate: event.target.value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: userIput.enterTitle,
      amount: userIput.enterAmount,
      date: new Date(userIput.enterDate),
    };

    //To privide data to the father
    props.onSaveExpenseData(expenseData);
    clearUserInput();
  };

  const clearUserInput = () => {
    setUserIput((prevState) => {
      return {
        enterTitle: "",
        enterAmount: "",
        enterDate: "",
      };
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={userIput.enterTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Ammount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={userIput.enterAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={userIput.enterDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;

/**
 *  Two Way bindings: means that not only litsen  to changes
 *  but also pass new value.
 *
 */
