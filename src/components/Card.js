import "./Card.css";

export default function Card(props) {
  console.log("CHILDREN", props.children); // children are element passed in Card component i.e. ExpenseItem and div

  // to apply 2 classes i.e. ".card" and one passed with props
  // for example card expense-item
  const classes = "card " + props.className; 
  
  console.log(classes);
  return <div className={classes}>{props.children}</div>;
}
