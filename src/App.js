import React from "react";
import { Input } from "./Input";
import { ToDoList } from "./ToDoList";
import "./App.css";

const initialList = ["Shopping", "Play Game", "Study"];
function App() {
  const [todoList, setTodoList] = React.useState(initialList);

  const handleConfirm = (value) => {
    setTodoList([...todoList, value]);
  };

  const handleReset = () => {
    setTodoList(initialList);
  };
  return (
    <div className="App">
      <h1>To Do List</h1>
      <ToDoList todoList={todoList} />
      <Input onConfirm={handleConfirm} />
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;
