import React, { useState } from "react";

const ToDoForm = ({ setTodos }) => {
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false,
  });

  function handleInput(e) {
    setTodo({ ...todo, entry: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (todo.task.trim()) {
      setTodos({ ...todo, id: todo.task });
      setTodo({ ...todo, task: "" });
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="todo"
          type="text"
          value={todo.task}
          onChange={handleInput}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ToDoForm;
