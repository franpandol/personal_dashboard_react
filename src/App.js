import React from 'react';
import { Weather } from './components/weather';
import Notes from './components/notes/Notes';
import Pomodoro from './components/pomodoro/Pomodoro';
import './App.css'; // Import the CSS file

function App() {
  return (
    <div className="App">
      <div className="left-column">
        <h1>My Weather App</h1>
        <Weather />
      </div>
      <div className="right-column">
        <Notes />
        <Pomodoro />
      </div>
    </div>
  );
}

export default App;