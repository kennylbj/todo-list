import React from "react";
import styles from "./Input.module.css";

// onConfirm: prop
export const Input = ({ onConfirm }) => {
  const [todo, setTodo] = React.useState("");

  const handleChange = (e) => {
    // e.target.value
    setTodo(e.target.value);
  };

  // this function will be called when user click on the button
  const handleClick = () => {
    onConfirm(todo);
    setTodo("");
  };

  return (
    <div className={styles.input}>
      <input value={todo} onChange={handleChange} />
      <button onClick={handleClick}>confirm</button>
    </div>
  );
};
