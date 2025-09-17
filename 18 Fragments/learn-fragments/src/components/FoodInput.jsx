import styles from "./FoodInput.module.css";

const FoodInput = ({ handleKeyDown }) => {
  // const handleInputChange = (event) => {
  //   console.log(event.target.value);
  // };
  return (
    <div>
      <input
        className={styles.foodInput}
        type="text"
        placeholder="Enter Food Item"
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default FoodInput;
