import React, { useState } from "react";
import './App.css';
import ToDoList from "./Components/ToDoList";
import ToDoForm from "./Components/ToDoForm";

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <ToDoForm setTodos={setTodos} />
      <ToDoList todos={todos} />
    </div>
  );
}

export default App;
