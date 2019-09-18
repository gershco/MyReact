import React from "react";

function Joke(props) {
  return (
    <div className="card">
      {props.joke.question ? <h2>Question: {props.joke.question}</h2> : ""}
      <h3>Punchline: {props.joke.punchLine}</h3>
    </div>
  );
}

export default Joke;
