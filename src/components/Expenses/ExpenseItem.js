//Convencion Capital caracter, and
//camelCase
//Un JSk snipet
//Tell that Css will've injected

/*Passing Data via  "Props" Key concepts
   pass data to the custome component 
*/
/* 
  Multiple componets
*/
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  //React hook to check for changes
  ///Only call in the ccomponent functions
  // Returns array, first element: value, updatedValue
  // the convetion is to name the second value functions  "set"+"name"

  /*const [title, setTitle] = useState(props.title); 
  const clickHandler = () => {
    setTitle('updated!');
  };*/

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description ">
          <h2>{props.title}</h2>
          <div className="expense-item__price">{props.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
