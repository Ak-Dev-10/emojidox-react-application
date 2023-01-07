import "./styles.css";
import React, { useState } from "react";
// usestate is a function it returns an array a variable and a setter function

const emojiDictionary = {
  "😀": "happy",
  "😐": "dissapointed",
  "😔": "sorrow",
  "😲": "shocked",
  "😮": "amused",
  "😓": "tensed"
};

let emojisPresent = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    let userInput = event.target.value;
    let meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = " we dont have this in our database ";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    let meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>EmojiDox</h1>
      <input onChange={emojiInputHandler}></input>
      <h2>{meaning}</h2>
      <h3>emoji's we know</h3>
      {emojisPresent.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{
              fontSize: " 2rem ",
              padding: " 0.5rem ",
              cursor: "pointer"
            }}
            key={emoji}
          >
            {emoji}{" "}
          </span>
        );
      })}
    </div>
  );
}
/*
render cycle = view -> event -> state -> render
*/
