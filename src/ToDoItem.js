import React from "react";

// props: properties
export const ToDoItem = ({ title, toggled, onToggle }) => {
  // toggle: state, whether the item is toggled
  // setToggle, callback, update the toggle state
  // const [toggle, setToggle] = React.useState(false);

  // this callback will be invoke when user clicks on this component
  const handleClick = () => {
    onToggle(title);
  };
  return (
    <div
      style={toggled ? { textDecoration: "line-through" } : {}}
      onClick={handleClick}
    >
      {title}
    </div>
  );
};
