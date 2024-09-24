import React from "react";

const Button = (props) => {
  return (
    <button
      type={props.type}
      value={props.value}
      className="blue-btn"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
