import { TodoItemsContext } from "../store/todo-items-store";
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
import { useContext } from "react";

// The prop `onDeleteClick` was also removed from the last correct version.
// Re-adding it here in case it's needed by the child TodoItem.
const TodoItems = ({ onDeleteClick }) => {
  // FIX: Destructure the `todoItems` array from the context object
  const { todoItems } = useContext(TodoItemsContext);

  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        <TodoItem
          key={item.name}
          todoDate={item.dueDate}
          todoName={item.name}
          onDeleteClick={onDeleteClick}
        ></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
