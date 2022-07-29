import React, { useState } from "react";
import './App.css';
import ToDoList from "./Components/ToDoList";
import ToDoForm from "./Components/ToDoForm";

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(todo) {
    setTodos([todo, ...todos]);
  }

  return (
    <div>
      <h1>To Do List</h1>
      <ToDoForm addTodo={addTodo} />
      <ToDoList todos={todos} />
    </div>
  );
}

export default App;
