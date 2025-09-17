const ErrorMessage = ({ items }) => {
  // console.log(items);
  // let foodItems = ["Dal", "Green Vegetable", "Roti", "Milk", "Rice"];
  return <div>{items.length === 0 && <h3>I am still hungry.</h3>}</div>;
};

export default ErrorMessage;
