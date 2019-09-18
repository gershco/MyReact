import React from "react";

function Joke(props) {
  return (
    <div className="card">
      {props.question ? <h2>Question: {props.question}</h2> : ""}
      <h3 style={{ color: !props.question && "grey" }}>
        Punchline: {props.punchLine}
      </h3>
    </div>
  );
}

export default Joke;
