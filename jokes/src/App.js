import React from "react";
import Joke from "./Joke";
import "./style.css";

function App() {
  return (
    <div>
      <Joke
        joke={{
          question: "What is black and white and red all over?",
          punchLine: "A sunburned penguin!"
        }}
      />

      <Joke
        joke={{
          punchLine: "I hate Russian dolls, they're so full of themselves!"
        }}
      />

      <Joke
        joke={{
          punchLine:
            "I recently decided to sell my vacuum cleaner as all it was doing was gathering dust!"
        }}
      />
    </div>
  );
}

export default App;
