import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";
import { useState } from "react";
import { TodoItemsContext } from "./store/todo-items-store";

function App() {
  const [todoItems, setTodoItems] = useState([
    { name: "Learn React", dueDate: "2024-12-31" },
    { name: "Learn JavaScript", dueDate: "2024-11-30" },
    { name: "Learn CSS", dueDate: "2024-10-31" },
  ]);

  const handleNewItem = (itemName, itemDueDate) => {
    setTodoItems((currValue) => [
      ...currValue,
      { name: itemName, dueDate: itemDueDate },
    ]);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };

  // Create the context value as an object
  const todoItemsStore = {
    todoItems: todoItems,
    addNewItem: handleNewItem,
    deleteItem: handleDeleteItem,
  };

  return (
    <TodoItemsContext.Provider value={todoItemsStore}>
      <center className="todo-container">
        <AppName />
        <AddTodo onNewItem={handleNewItem} />
        {<WelcomeMessage todoItems={todoItems}></WelcomeMessage>}
        <TodoItems onDeleteClick={handleDeleteItem}></TodoItems>
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
