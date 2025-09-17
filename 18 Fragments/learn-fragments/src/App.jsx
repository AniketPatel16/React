import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { use, useState } from "react";

function App() {
  const [] = useState();
  // let foodItems = [];
  // let foodItems = ["Dal", "Vegetable", "Roti", "Milk", "Rice", "Salad"];

  // let [textToShow, setTextState] = useState();

  // let [foodItems, setFoodItems] = useState(["Salad", "Green", "Apple"]);
  let [foodItems, setFoodItems] = useState([]);
  // console.log(`Current value of textToShow is ${textToShow}`);

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
      console.log(`You have entered ${newFoodItem}`);
    }
  };

  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Food</h1>
        <FoodInput handleKeyDown={onKeyDown}></FoodInput>
        <ErrorMessage items={foodItems}></ErrorMessage>
        <FoodItems items={foodItems}></FoodItems>
      </Container>
    </>
  );
}
export default App;
