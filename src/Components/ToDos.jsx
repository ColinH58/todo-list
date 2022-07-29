import React from "react";

const ToDos = ({ todo, handleDelete }) => {
  function handleDeleteTask() {
    handleDelete(todo.id);
  }

  return (
    <div>
      <li>{todo.task}</li>
      <button onClick={handleDeleteTask}>X</button>
    </div>
  );
};

export default ToDos;
