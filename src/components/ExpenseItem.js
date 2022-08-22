import "./ExpenseItem.css";

export default function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>March 29, 2020</div>
      <div className="expense-item__description">
        <h2>Car Insurance</h2>
        <div className="expense-item__price ">$2899.80</div>
      </div>
    </div>
  );
}
