import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
const [text,newText] = useState("");

// handleClick=()=>newText("Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy");
 
  return (
    <div id="main">
      <button id="click" onClick={()=>newText("Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy")}>click </button>
      <h1 id="para">{text}</h1>
    </div>
  );
}


export default App;
