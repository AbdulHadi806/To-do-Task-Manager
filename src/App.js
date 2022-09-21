import React from "react";
import { useState } from "react";
import "./App.css";
// importing components
import Form from "./componenet/form.js";
import TodoList from "./componenet/todoList";
function App() {
  const [inputtext, setinputtext] = useState("");
  const [todos, settodos] = useState([]);
  return (
    <div className="app">
      <div className="container">
        <div className="Header">
          <h1>Todo List</h1>
          <Form
            todos={todos}
            inputtext={inputtext}
            setinputtext={setinputtext}
            settodos={settodos}
          />
          <TodoList todos={todos} settodos={settodos} />
        </div>
      </div>
    </div>
  );
}

export default App;
