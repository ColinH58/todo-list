import React from "react";

const ToDos = ({ todo }) => {
  return (
    <div>
        <input type="checkbox" />
      <li>{todo.entry}</li>
      <button>X</button>
    </div>
  );
};

export default ToDos;
