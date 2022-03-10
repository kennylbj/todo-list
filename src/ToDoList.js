import { ToDoItem } from "./ToDoItem";
import styles from "./ToDoList.module.css";

// [{title: "xxx", toggled: false}]
export const ToDoList = ({ todoList, onToggle }) => {
  // map string arrary to react jsx
  const todoJsx = todoList.map((item) => (
    <ToDoItem
      key={item.title}
      title={item.title}
      toggled={item.toggled}
      onToggle={onToggle}
    />
  ));
  return <div className={styles.list}>{todoJsx}</div>;
};
