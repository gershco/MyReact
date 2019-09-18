import React from "react";
import "./style.css";
import ToDoItem from "./components/ToDoItem";

function App() {
  return (
    <div className="to-do-list">
      <ToDoItem />

      <ToDoItem />

      <ToDoItem />
    </div>
  );
}

export default App;
