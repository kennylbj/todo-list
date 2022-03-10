import React from "react";
import { Input } from "./Input";
import { ToDoList } from "./ToDoList";
import "./App.css";

// const initialList = ["Shopping", "Play Game", "Study"];
const initialList = [
  {
    title: "Shopping",
    toggled: false,
  },
  {
    title: "Play Game",
    toggled: false,
  },
  {
    title: "Study",
    toggled: false,
  },
];
function App() {
  const [todoList, setTodoList] = React.useState(initialList);

  const handleConfirm = (value) => {
    setTodoList([
      ...todoList,
      {
        title: value,
        toggled: false,
      },
    ]);
  };

  const handleToggle = (title) => {
    const newList = todoList.map((todo) => {
      if (todo.title === title) {
        return {
          ...todo,
          toggled: !todo.toggled,
        };
      }
      return todo;
    });
    setTodoList(newList);
  };

  const handleReset = () => {
    setTodoList(initialList);
  };
  return (
    <div className="App">
      <h1>To Do List</h1>
      <ToDoList todoList={todoList} onToggle={handleToggle} />
      <Input onConfirm={handleConfirm} />
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;
