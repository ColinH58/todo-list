import React from "react";
import ToDos from "./ToDos";

const ToDoList = ({ todos, handleDelete }) => {
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <ToDos key={todo.id} todo={todo} handleDelete={handleDelete} />
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
