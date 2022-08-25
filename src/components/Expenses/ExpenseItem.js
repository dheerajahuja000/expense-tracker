import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import React from "react";
// import { useState } from "react";

export default function ExpenseItem(props) {

  const [title, setTitle] = React.useState(props.title); 

  const testFunc = () => {
   setTitle("Updated");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price ">${props.amount}</div>
      </div>
      <button onClick={testFunc}>Test</button>
    </Card>
  );
}
