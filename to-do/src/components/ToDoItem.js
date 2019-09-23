import React from "react";

function LineInput(props) {

function ToDoItem(props) {

  return (
    <div className="to-do-item">



      <LineInput />
      <p>{props.task.text}</p>
    </div>
  );
}

if ( props.task.completed ) {

    return <input type="checkbox" selected />

} else {

return <input type="checkbox" />
}

export default ToDoItem;
