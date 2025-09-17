import { useState } from "react";
import Item from "./Item";

const FoodItems = ({ items }) => {
  let [activeItems, setActiveItems] = useState([]);

  let onByBuyButtonClicked = (item, event) => {
    let newActiveItems = [...activeItems, item];
    setActiveItems(newActiveItems);
  };

  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item
          key={item}
          foodItem={item}
          bought={activeItems.includes(item)}
          handleBuyButton={(event) => onByBuyButtonClicked(item, event)}
        ></Item>
      ))}
    </ul>
  );
};

export default FoodItems;
