import React from "react";
import ToDos from "./ToDos";

const ToDoList = ({ todos }) => {
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <ToDos key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
