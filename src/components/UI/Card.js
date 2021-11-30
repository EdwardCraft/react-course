import "./Card.css";
const Card = (props) => {
  //children will be always the content
  //of the custom component tag
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default Card;
