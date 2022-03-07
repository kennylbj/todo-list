import React from "react";

// props: properties
export const ToDoItem = ({ text }) => {
  // toggle: state, whether the item is toggled
  // setToggle, callback, update the toggle state
  const [toggle, setToggle] = React.useState(false);

  // this callback will be invoke when user clicks on this component
  const handleClick = () => {
    // setToggle(flag => !flag);
    setToggle(!toggle);
  };
  return (
    <div
      style={toggle ? { textDecoration: "line-through" } : {}}
      onClick={handleClick}
    >
      {text}
    </div>
  );
};
