import { ToDoItem } from "./ToDoItem";
import styles from "./ToDoList.module.css"

export const ToDoList = ({ todoList }) => {
  // map string arrary to react jsx
  const todoJsx = todoList.map((item) => <ToDoItem key={item} text={item} />);
  return <div className={styles.list}>{todoJsx}</div>;
};
