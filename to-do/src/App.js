import React from "react";
import "./style.css";
import ToDoItem from "./components/ToDoItem";
import todoData from "./todoData";

function App() {
  const todoComponents = todoData.map(item => (
    <ToDoItem key={item.id} task={item} />
  ));

  return (
    <div>
      {todoComponents}
      <br></br>
    </div>
  );
}

export default App;
