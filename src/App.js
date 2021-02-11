import React from "react";
import './App.css';
import Reminder from "./Reminder"

function App() {
  return (
    <div className="app">
      <div className="app__header">
        <h1>REMINDER</h1>
      </div>
      <div className="app__container">
        <Reminder />
      </div>
      <button className="app__button">set reminder</button>
    </div>
  );
}

export default App;
